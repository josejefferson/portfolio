import { Box, Button, Container, Flex, Heading, IconButton, Image, Stack, Text, Tooltip } from '@chakra-ui/react'
import useScrollPosition from '@react-hook/window-scroll'
import Link from '#/components/common/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import Section from '../common/section'
import { sectionIDs } from '.'
import { FaRegFilePdf } from 'react-icons/fa6'

export default function Main() {
  return (
    <Section id={sectionIDs.main} screenHeight>
      <Container maxW="6xl" h="full" display="flex" flexDirection="column">
        <Stack direction={['column', 'column', 'row']} justify="space-between" h="full">
          <Details />
          <Photo />
        </Stack>
        <ScrollToSeeMore />
      </Container>
    </Section>
  )
}

function ScrollToSeeMore() {
  const scrollY = useScrollPosition(10)

  const isVisible = scrollY <= 0

  return (
    <Text
      textAlign="center"
      my={4}
      fontSize={12}
      fontWeight={200}
      opacity={isVisible ? 1 : 0}
      transition="opacity .2s ease"
    >
      Role a página para mais informações
    </Text>
  )
}

function Details() {
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
        <Heading fontSize={['xl', '2xl', '3xl', '4xl']} mt={[2, 6]} fontWeight={200}>
          Desenvolvedor web full-stack
        </Heading>
        <Stack mt={[4, 10]} direction={['column', 'row']}>
          <Link href="https://github.com/josejefferson" target="_blank">
            <Tooltip hasArrow label="Acesse meu GitHub" placement="bottom">
              <Button
                aria-label="GitHub"
                size="lg"
                variant="outline"
                color="white"
                leftIcon={<IoLogoGithub size={36} />}
                px={2}
              >
                josejefferson
              </Button>
            </Tooltip>
          </Link>

          <Link href="https://www.linkedin.com/in/jose-jefferson/" target="_blank">
            <Tooltip hasArrow label="Acesse meu LinkedIn" placement="bottom">
              <Button
                aria-label="LinkedIn"
                size="lg"
                variant="outline"
                colorScheme="linkedin"
                leftIcon={<IoLogoLinkedin size={36} />}
                px={2}
              >
                jose-jefferson
              </Button>
            </Tooltip>
          </Link>

          <Link href="/attachments/Currículo - Jefferson Dantas.pdf" target="_blank">
            <Tooltip hasArrow label="Baixe meu currículo" placement="bottom">
              <Button
                aria-label="GitHub"
                size="lg"
                variant="outline"
                colorScheme="red"
                leftIcon={<FaRegFilePdf size={24} />}
                px={2}
              >
                Currículo
              </Button>
            </Tooltip>
          </Link>
        </Stack>
      </Box>
    </Flex>
  )
}

function Photo() {
  return (
    <Flex direction="column" align="center" justify="center" h="full">
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
