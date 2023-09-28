import { Avatar } from '@chakra-ui/avatar'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/button'
import { Box, Container, HStack, Text } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import Link from 'next/link'
import { IoMdMenu } from 'react-icons/io'

export default function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, md: true })

  return (
    <>
      <Box
        as="nav"
        bg="black"
        boxShadow="sm"
        h="64px"
        display="flex"
        alignItems="center"
        position="fixed"
        top="0"
        left="0"
        w="full"
        zIndex="100"
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
                  <Button colorScheme="primary">Início</Button>
                </Link>
                <Link href="#linguagens">
                  <Button colorScheme="primary">Linguagens</Button>
                </Link>
                <Link href="#habilidades">
                  <Button colorScheme="primary">Habilidades</Button>
                </Link>
                <Link href="#projetos">
                  <Button colorScheme="primary">Projetos</Button>
                </Link>
              </ButtonGroup>
            ) : (
              <IconButton variant="ghost" icon={<IoMdMenu />} aria-label="Abrir menu" />
            )}
          </HStack>
        </Container>
      </Box>
      <Box h="64px" />
    </>
  )
}
