import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { resolveMx, resolve4 } from 'dns/promises'

// Rate limiting simple en mémoire
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_MAX = 5 // max 5 emails par IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // par heure

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true
  }

  entry.count++
  return false
}

// Sanitisation HTML pour éviter les injections XSS
function sanitizeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// Validation email basique
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Vérification DNS du domaine email (MX ou A record en fallback)
async function hasValidEmailDomain(email: string): Promise<boolean> {
  try {
    const domain = email.split('@')[1]
    if (!domain) return false
    // Essayer MX d'abord
    const mxRecords = await resolveMx(domain).catch(() => [])
    if (mxRecords.length > 0) return true
    // Fallback : un A record suffit (RFC 5321)
    const aRecords = await resolve4(domain).catch(() => [])
    return aRecords.length > 0
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Trop de demandes. Réessayez plus tard.' },
        { status: 429 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: 'Clé API Resend non configurée' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, company, phone, service, sector, message, turnstileToken } = body

    // Vérification Turnstile (anti-spam)
    if (!turnstileToken || typeof turnstileToken !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Veuillez valider le captcha anti-spam.' },
        { status: 400 }
      )
    }

    // Vérifier le token Turnstile côté serveur
    const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY
    if (!turnstileSecret) {
      console.error('Cloudflare Turnstile secret key not configured')
      return NextResponse.json(
        { success: false, message: 'Configuration serveur incorrecte' },
        { status: 500 }
      )
    }

    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken,
        remoteip: ip,
      }),
    })

    const turnstileData = await turnstileResponse.json()

    if (!turnstileData.success) {
      console.error('Turnstile verification failed:', turnstileData)
      return NextResponse.json(
        { success: false, message: 'Échec de la vérification anti-spam. Veuillez réessayer.' },
        { status: 403 }
      )
    }

    // Validation des champs requis
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Le nom est requis' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Email invalide' },
        { status: 400 }
      )
    }

    // Vérifier le domaine email (non bloquant - log seulement)
    const emailHasValidDomain = await hasValidEmailDomain(email)
    if (!emailHasValidDomain) {
      console.warn(`Domaine email suspect (pas de MX/A record) : ${email.split('@')[1]}`)
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Le message est requis' },
        { status: 400 }
      )
    }

    // Limiter la longueur des champs
    if (name.length > 200 || email.length > 200 || message.length > 10000) {
      return NextResponse.json(
        { success: false, message: 'Un ou plusieurs champs dépassent la longueur maximale' },
        { status: 400 }
      )
    }

    // Sanitiser toutes les entrées
    const safeName = sanitizeHtml(name.trim())
    const safeEmail = sanitizeHtml(email.trim())
    const safeCompany = company ? sanitizeHtml(String(company).trim()) : ''
    const safePhone = phone ? sanitizeHtml(String(phone).trim()) : ''
    const safeService = service ? sanitizeHtml(String(service).trim()) : ''
    const safeSector = sector ? sanitizeHtml(String(sector).trim()) : ''
    const safeMessage = sanitizeHtml(message.trim()).replace(/\n/g, '<br>')

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Construire le contenu de l'email
    const emailContent = `
      <h2>Nouvelle demande de contact - Inphenix System</h2>

      <h3>Informations du client</h3>
      <ul>
        <li><strong>Nom:</strong> ${safeName}</li>
        <li><strong>Email:</strong> ${safeEmail}</li>
        ${safeCompany ? `<li><strong>Entreprise:</strong> ${safeCompany}</li>` : ''}
        ${safePhone ? `<li><strong>Téléphone:</strong> ${safePhone}</li>` : ''}
        ${safeService ? `<li><strong>Service souhaité:</strong> ${safeService}</li>` : ''}
        ${safeSector ? `<li><strong>Secteur:</strong> ${safeSector}</li>` : ''}
      </ul>

      <h3>Message</h3>
      <p>${safeMessage}</p>

      <hr>
      <p><small>Envoyé depuis le formulaire de contact du site inphenix-system.fr</small></p>
    `

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'contact@inphenix-system.fr',
      to: 'contact@inphenix-system.fr',
      replyTo: email.trim(),
      subject: `[Site Web] Nouveau contact de ${safeName}`,
      html: emailContent,
    })

    if (error) {
      console.error('Erreur Resend:', error)
      return NextResponse.json(
        { success: false, message: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}
