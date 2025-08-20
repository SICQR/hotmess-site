import '../styles/globals.css'
import Pixels from '../../Pixels'
import CookieConsent from '../../CookieConsent'
import ChatWidget from '../../ChatWidget'
import RadioBar from '../../RadioBar'

export default function App({ Component, pageProps }){
  return (
    <>
      <Pixels />
      <Component {...pageProps} />
      <CookieConsent />
      <ChatWidget />
      <RadioBar />
    </>
  )
}
