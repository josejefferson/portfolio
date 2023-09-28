import { baseTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    colors: {
      primary: baseTheme.colors.blue,
      secondary: baseTheme.colors.red
    }
  },
  withDefaultColorScheme({
    colorScheme: 'primary'
  })
)
