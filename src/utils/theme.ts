import { baseTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.blue,
      secondary: baseTheme.colors.red
    }
  },
  withDefaultColorScheme({
    colorScheme: 'primary'
  })
)
