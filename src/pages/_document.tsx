import { DESCRIPTION, JOB_NAME, KEYWORDS, NAME, PORTFOLIO_URL } from '#/data/info'
import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/img/favicon.png" type="image/png" sizes="32x32" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />

        {/* Meta tags */}
        <meta name="title" content={NAME + ' - ' + JOB_NAME} />
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jefferson Dantas" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PORTFOLIO_URL} />
        <meta property="og:title" content={NAME + ' - ' + JOB_NAME} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${PORTFOLIO_URL}/img/portfolio-screenshot.webp`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PORTFOLIO_URL} />
        <meta name="twitter:title" content={NAME + ' - ' + JOB_NAME} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${PORTFOLIO_URL}/img/portfolio-screenshot.webp`} />
      </Head>
      <body>
        <ColorModeScript initialColorMode="dark" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
