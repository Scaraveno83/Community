import type {AppProps} from 'next/app'
import '../styles/globals.css'
import {useEffect} from 'react'

export default function App({Component, pageProps}: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').catch((e) => {
        // eslint-disable-next-line no-console
        console.warn('Service worker registration failed', e)
      })
    }
  }, [])

  return <Component {...pageProps} />
}
