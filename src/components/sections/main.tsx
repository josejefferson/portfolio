import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Tooltip,
  chakra,
  useToast
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

export default function MainSection() {
  return (
    <chakra.section h="calc(100vh - 64px)" id="inicio">
      <Container maxW="6xl" h="full">
        <Stack direction={['column', 'row']} justify="space-between" h="full">
          <Details />
          <Photo />
        </Stack>
      </Container>
    </chakra.section>
  )
}

function Details() {
  const toast = useToast()

  const portfolioWarning = () => {
    toast({
      title: 'Atenção',
      description: 'O portfólio não está pronto ainda',
      status: 'warning',
      duration: 5000,
      isClosable: true
    })
  }

  return (
    <Flex direction="column" justify="center" w="fit-content">
      <Box mt={[4, 0]}>
        <Heading fontSize={['2xl', '3xl', '4xl', '5xl']}>Olá! Eu sou</Heading>
        <Box w="fit-content">
          <Heading fontSize={['3xl', '4xl', '5xl', '6xl']} color="primary.500" my={2}>
            Jefferson Dantas
          </Heading>
          <Box bg="primary.500" h={1.5} rounded="full" />
        </Box>
        <Heading fontSize={['xl', '2xl', '3xl', '4xl']} mt={[2, 6]}>
          Desenvolvedor web
        </Heading>
        <HStack mt={[4, 10]}>
          <Button size="lg" onClick={portfolioWarning}>
            Saiba mais
          </Button>
          <Link href="https://github.com/josejefferson" target="_blank">
            <Tooltip hasArrow label="Acesse meu GitHub" placement="bottom">
              <IconButton aria-label="GitHub" size="lg" variant="ghost" color="black">
                <IoLogoGithub size={36} />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href="https://www.linkedin.com/in/jose-jefferson/" target="_blank">
            <Tooltip hasArrow label="Acesse meu LinkedIn" placement="bottom">
              <IconButton aria-label="LinkedIn" size="lg" variant="ghost" colorScheme="linkedin">
                <IoLogoLinkedin size={36} />
              </IconButton>
            </Tooltip>
          </Link>
        </HStack>
      </Box>
    </Flex>
  )
}

function Photo() {
  return (
    <Flex direction="column" align="center" justify="center" ml="auto" h="full">
      <Box position="relative" w="fit-content">
        <Image
          src="https://github.com/josejefferson.png"
          aria-label="Imagem do GitHub de Jefferson Dantas"
          rounded="full"
          w={['200px', '300px', '350px', '500px']}
          shadow="md"
          transition="all 0.2s ease-in-out"
          _hover={{ shadow: 'lg' }}
        />
        <Link href="https://github.com/josejefferson" target="_blank">
          <Tooltip hasArrow label="Acesse meu GitHub" placement="left">
            <IconButton
              aria-label="GitHub"
              position="absolute"
              bottom="0"
              right="0"
              w={[50, 75, 100]}
              h={[50, 75, 100]}
              variant="ghost"
              bg="white"
              rounded="full"
              shadow="md"
              _hover={{ bg: 'white', transform: 'scale(1.1)', shadow: 'xl' }}
            >
              <IoLogoGithub size={100} color="black" />
            </IconButton>
          </Tooltip>
        </Link>
      </Box>
    </Flex>
  )
}
