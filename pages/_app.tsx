import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { ReactNode } from "react";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
