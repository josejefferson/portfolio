import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
