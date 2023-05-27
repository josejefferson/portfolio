import '#styles/globals.css'
import { theme } from '#utils/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { IconContext } from 'react-icons'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ size: '24' }}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </IconContext.Provider>
  )
}
