import '#/styles/globals.css'
import { theme } from '#/utils/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { IconContext } from 'react-icons'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start()
    })

    Router.events.on('routeChangeComplete', () => {
      NProgress.done(false)
    })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <IconContext.Provider value={{ size: '24' }}>
        <Component {...pageProps} />
      </IconContext.Provider>
    </ChakraProvider>
  )
}
