import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Pixels(){
  const [ok, setOk] = useState(false)
  useEffect(()=>{
    function update(){ setOk(localStorage.getItem('hm_cc.analytics') === 'true') }
    update()
    window.addEventListener('hm_cc_update', update)
    return ()=>window.removeEventListener('hm_cc_update', update)
  }, [])

  if (!ok) return null
  const GA = process.env.GA_MEASUREMENT_ID
  const META = process.env.META_PIXEL_ID
  const TTK = process.env.TIKTOK_PIXEL_ID

  return (
    <>
      <Head>
        {GA && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}></script>
            <script dangerouslySetInnerHTML={{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); gtag('config', '${GA}');`}} />
          </>
        )}
        {META && (
          <script dangerouslySetInnerHTML={{__html:`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '${META}'); fbq('track', 'PageView');`}} />
        )}
        {TTK && (
          <script dangerouslySetInnerHTML={{__html:`
            !function (w, d, t) { w.TiktokAnalyticsObject=t; var ttq=w[t]=w[t]||[]; ttq.methods=['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie']; ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}; for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]); ttq.instance=function(t){var e=ttq._i[t]||[]; return function(){ttq.push([t].concat(Array.prototype.slice.call(arguments,0)))}}; ttq.load=function(e,n){var i='https://analytics.tiktok.com/i18n/pixel/events.js'; ttq._i=ttq._i||{}; ttq._i[e]=[]; ttq._i[e]._u=i; ttq._t=ttq._t||{}; ttq._t[e]=+new Date; ttq._o=ttq._o||{}; ttq._o[e]=n||{}; var o=d.createElement('script'); o.type='text/javascript'; o.async=!0; o.src=i+'?sdkid='+e+'&lib='+t; var a=d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(o,a) };
            ttq.load('${TTK}'); ttq.page();`}} />
        )}
      </Head>
    </>
  )
}
