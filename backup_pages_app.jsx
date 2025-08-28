import '../styles/globals.css'
import '../styles/hotmess.css'
import Pixels from '../components/Pixels'
import CookieConsent from '../components/CookieConsent'
import ChatWidget from '../components/ChatWidget'

export default function App({ Component, pageProps }){
  return (
    <>
      <Pixels />
      <Component {...pageProps} />
      <CookieConsent />
      <ChatWidget />
    </>
  )
}
