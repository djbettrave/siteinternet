'use client'

import Script from 'next/script'

export default function TarteaucitronInit() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.17.0/tarteaucitron.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        const w = window as Window & { tarteaucitron?: { init: (config: Record<string, unknown>) => void } }
        w.tarteaucitron && w.tarteaucitron.init({
          privacyUrl: '/politique-confidentialite',
          bodyPosition: 'bottom',
          hashtag: '#tarteaucitron',
          cookieName: 'tarteaucitron',
          orientation: 'bottom',
          groupServices: false,
          showDetailsOnClick: true,
          serviceDefaultState: 'wait',
          showAlertSmall: false,
          cookieslist: false,
          closePopup: false,
          showIcon: true,
          iconPosition: 'BottomLeft',
          adblocker: false,
          DenyAllCta: true,
          AcceptAllCta: true,
          highPrivacy: true,
          alwaysNeedConsent: false,
          handleBrowserDNTRequest: false,
          removeCredit: false,
          moreInfoLink: true,
          useExternalCss: false,
          useExternalJs: false,
          mandatory: true,
          mandatoryCta: true,
          googleConsentMode: false,
        })
      }}
    />
  )
}
