import PageTransition from '#/components/page/transition'
import '#/styles/globals.css'
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
        <Component {...pageProps} />
      </ChakraProvider>
    </PageTransition>
  )
}
