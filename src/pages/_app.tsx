import { useState } from 'react';
import type { AppProps } from 'next/app'
import NextTopLoader from 'nextjs-toploader';
import '@/css/style.scss';
import { CookiesProvider } from 'react-cookie';

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      {/* eslint-disable react/no-unknown-property */}
      <style jsx global>{`
				html {
				font-family: ${montserrat.style.fontFamily};
				}
			`}</style>
      <NextTopLoader height={1} />
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  )
}
