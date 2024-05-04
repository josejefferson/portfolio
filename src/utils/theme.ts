import { Tooltip, baseTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { Nunito } from 'next/font/google'

const DEFAULT_FONTS = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(',')

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
      heading: `${nunito.style.fontFamily}, ${DEFAULT_FONTS}`,
      body: `${nunito.style.fontFamily}, ${DEFAULT_FONTS}`
    },
    fontSizes: {
      e2xl: '1.5em',
      e2xs: '0.625em',
      e3xl: '1.875em',
      e3xs: '0.45em',
      e4xl: '2.25em',
      e5xl: '3em',
      e6xl: '3.75em',
      e7xl: '4.5em',
      e8xl: '6em',
      e9xl: '8em',
      elg: '1.125em',
      emd: '1em',
      esm: '0.875em',
      exl: '1.25em',
      exs: '0.75em'
    }
  },
  withDefaultColorScheme({
    colorScheme: 'primary'
  })
)

Tooltip.defaultProps = { hasArrow: true }
