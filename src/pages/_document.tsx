import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://github.com/josejefferson.png" />
      </Head>
      <body>
        <ColorModeScript initialColorMode="dark" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
