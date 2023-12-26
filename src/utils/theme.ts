import { baseTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { Nunito } from 'next/font/google'

const defaultFonts =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
const nunito = Nunito({ subsets: ['latin'], display: 'swap' })

export const theme = extendTheme(
  {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    colors: {
      primary: baseTheme.colors.blue,
      secondary: baseTheme.colors.red
    },
    fonts: {
      heading: `${nunito.style.fontFamily}, ${defaultFonts}`,
      body: `${nunito.style.fontFamily}, ${defaultFonts}`
    }
  },
  withDefaultColorScheme({
    colorScheme: 'primary'
  })
)
