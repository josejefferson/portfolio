import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react'

export function ForceTheme() {
  const { colorMode, setColorMode } = useColorMode()

  useEffect(() => {
    if (colorMode === 'light') setColorMode('dark')
  }, [colorMode, setColorMode])

  return null
}
