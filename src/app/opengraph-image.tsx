import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #1e3a5f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 8,
            height: 64,
            background: '#3b82f6',
            borderRadius: 4,
            marginBottom: 36,
          }}
        />

        {/* Title */}
        <div
          style={{
            color: 'white',
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          Inphenix System
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#94a3b8',
            fontSize: 38,
            fontWeight: 400,
            marginBottom: 20,
          }}
        >
          Impression 3D Grand Format & Sur Mesure
        </div>

        {/* Location */}
        <div
          style={{
            color: '#64748b',
            fontSize: 26,
          }}
        >
          Suresnes · Île-de-France · Made in France
        </div>

        {/* Decorative circle */}
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: '50%',
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.12)',
            marginTop: -260,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 80,
            bottom: -80,
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.07)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
