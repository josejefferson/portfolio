import { Avatar } from '@chakra-ui/avatar'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/button'
import { Box, Container, HStack, Text } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { IoMdMenu } from 'react-icons/io'

const COLORS = [
  ['white', 'black', 'primary'],
  ['green.600', 'white', 'white'],
  ['yellow.600', 'white', 'white'],
  ['blue.600', 'white', 'white']
]

export default function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, md: true })
  const [navbarColor, setNavbarColor] = useState(0)

  const changeBackground = useCallback(() => {
    const i = Math.floor(window.scrollY / (window.innerHeight - 64 - 1))
    if (navbarColor !== i) setNavbarColor(i)
  }, [navbarColor])

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
    return () => window.removeEventListener('scroll', changeBackground)
  }, [changeBackground])

  const [bg, color, link] = COLORS[navbarColor] || ['white', 'black', 'primary']

  return (
    <>
      <Box
        as="nav"
        bg={bg}
        color={color}
        boxShadow="sm"
        h="64px"
        display="flex"
        alignItems="center"
        position="fixed"
        top="0"
        left="0"
        w="full"
        zIndex="1"
        transition="all 0.2s ease"
      >
        <Container maxW="6xl">
          <HStack spacing="10" justify="space-between">
            <HStack borderWidth={1} rounded="full" p={1} position="relative">
              <Avatar src="https://github.com/josejefferson.png" size="sm" />
              <Text fontWeight={500} px={2} hidden={!isDesktop}>
                Jefferson Dantas
              </Text>
            </HStack>

            {isDesktop ? (
              <ButtonGroup variant="link" spacing="8">
                <Link href="#inicio">
                  <Button colorScheme={link}>Início</Button>
                </Link>
                <Link href="#section2">
                  <Button colorScheme={link}>Sobre</Button>
                </Link>
                <Link href="#habilidades">
                  <Button colorScheme={link}>Habilidades</Button>
                </Link>
                <Link href="#trabalhos">
                  <Button colorScheme={link}>Trabalhos</Button>
                </Link>
                <Link href="#contato">
                  <Button colorScheme={link}>Contato</Button>
                </Link>
              </ButtonGroup>
            ) : (
              <IconButton variant="ghost" icon={<IoMdMenu />} aria-label="Open Menu" />
            )}
          </HStack>
        </Container>
      </Box>
      <Box h="64px" />
    </>
  )
}
