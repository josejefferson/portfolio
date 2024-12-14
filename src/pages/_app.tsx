import { ForceTheme } from '#/components/common/force-theme'
import PageTransition from '#/components/page/transition'
import '#/styles/globals.css'
import '#/styles/nprogress.css'
import '#/styles/swiper.css'
import { theme } from '#/utils/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTransition>
      <ChakraProvider theme={theme}>
        <ForceTheme />
        <Component {...pageProps} />
      </ChakraProvider>
    </PageTransition>
  )
}
