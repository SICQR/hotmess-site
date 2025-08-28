'use client'

import { useEffect, useState } from 'react'

export function Pixels() {
  const [consentGiven, setConsentGiven] = useState(false)
  
  useEffect(() => {
    function updateConsent() {
      const consent = localStorage.getItem('hm_cookie_consent')
      setConsentGiven(consent === 'accepted')
    }
    
    updateConsent()
    window.addEventListener('hm_cc_update', updateConsent)
    return () => window.removeEventListener('hm_cc_update', updateConsent)
  }, [])

  if (!consentGiven) return null

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const META_PIXEL_ID = process.env.META_PIXEL_ID
  const TIKTOK_PIXEL_ID = process.env.TIKTOK_PIXEL_ID

  return (
    <>
      {GA_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `
            }}
          />
        </>
      )}
      
      {META_PIXEL_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `
          }}
        />
      )}
      
      {TIKTOK_PIXEL_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
                ttq.methods=['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie'];
                ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
                for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
                ttq.instance=function(t){var e=ttq._i[t]||[];return function(){ttq.push([t].concat(Array.prototype.slice.call(arguments,0)))}};
                ttq.load=function(e,n){var i='https://analytics.tiktok.com/i18n/pixel/events.js';
                ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=i;ttq._t=ttq._t||{};ttq._t[e]=+new Date;
                ttq._o=ttq._o||{};ttq._o[e]=n||{};var o=document.createElement('script');
                o.type='text/javascript';o.async=!0;o.src=i+'?sdkid='+e+'&lib='+t;
                var a=document.getElementsByTagName('script')[0];a.parentNode.insertBefore(o,a)};
                ttq.load('${TIKTOK_PIXEL_ID}');
                ttq.page();
              }(window, document, 'ttq');
            `
          }}
        />
      )}
    </>
  )
}