import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { gsap } from "gsap";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} suppressHydrationWarning />
}
