import Link from '#/components/common/link'
import { GITHUB, LINKEDIN, NAME } from '#/data/contact'
import { Box, BoxProps, Button, Container, Heading, IconButton, Image, Stack, Text, Tooltip } from '@chakra-ui/react'
import useScrollPosition from '@react-hook/window-scroll'
import { FaRegFilePdf } from 'react-icons/fa6'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { SECTION_IDS } from '.'
import Section from '../common/section'

export default function Main() {
  return (
    <Section id={SECTION_IDS.main} screenHeight>
      <Container maxW="6xl" h="full" display="flex" flexDirection="column">
        <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" h="full" py={{ base: 4, md: 0 }}>
          <Details />
          <Photo display={{ base: 'none', md: 'block' }} mr={0} />
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
      aria-hidden
    >
      Role a página para mais informações
    </Text>
  )
}

function Details() {
  return (
    <Box my="auto" textAlign={{ base: 'center', md: 'left' }} fontSize={{ base: '0.65rem', sm: '0.75rem', md: '1rem' }}>
      <Heading as="div" fontSize="e4xl" mb={4}>
        Olá! Eu sou
      </Heading>

      <Photo display={{ base: 'block', md: 'none' }} mb={4} />

      <Box w="fit-content" mx={{ base: 'auto', md: 0 }} mb={4}>
        <Heading as="h1" fontSize="e6xl" color="primary.500" mb={2}>
          {NAME}
        </Heading>
        <Box bg="primary.500" h={1.5} rounded="full" />
      </Box>

      <Heading as="div" fontSize="e4xl" fontWeight={200} mb={4}>
        Desenvolvedor web full-stack
      </Heading>

      <Stack mt={10} direction={{ base: 'column', md: 'row' }} maxW={{ base: 'xs', md: 'unset' }} mx="auto">
        <Tooltip label="Acesse meu GitHub" placement="bottom">
          <Button
            as={Link}
            href={`https://github.com/${GITHUB}`}
            target="_blank"
            aria-label="Acessar meu GitHub"
            size="lg"
            variant="outline"
            color="white"
            leftIcon={<IoLogoGithub size={36} />}
            px={2}
          >
            {GITHUB}
          </Button>
        </Tooltip>

        <Tooltip label="Acesse meu LinkedIn" placement="bottom">
          <Button
            as={Link}
            href={`https://www.linkedin.com/in/${LINKEDIN}/`}
            target="_blank"
            aria-label="Acessar meu LinkedIn"
            size="lg"
            variant="outline"
            colorScheme="linkedin"
            leftIcon={<IoLogoLinkedin size={36} />}
            px={2}
          >
            {LINKEDIN}
          </Button>
        </Tooltip>

        <Tooltip label="Baixe meu currículo" placement="bottom">
          <Button
            as={Link}
            href="/attachments/Currículo - Jefferson Dantas.pdf"
            target="_blank"
            aria-label="Baixar meu currículo em PDF"
            size="lg"
            variant="outline"
            colorScheme="red"
            leftIcon={<FaRegFilePdf size={28} />}
            px={2}
          >
            Currículo
          </Button>
        </Tooltip>
      </Stack>
    </Box>
  )
}

function Photo(props: BoxProps) {
  return (
    <Box position="relative" w="fit-content" m="auto" aria-hidden {...props}>
      <Image
        src={`https://github.com/${GITHUB}.png`}
        alt={`Imagem do GitHub de ${NAME}`}
        rounded="full"
        w={{ base: '20em', lg: '30em' }}
        shadow="md"
        transition="all 0.2s ease-in-out"
        _hover={{ shadow: 'lg' }}
      />
      <Tooltip label="Acesse meu GitHub" placement="left">
        <IconButton
          as={Link}
          href={`https://github.com/${GITHUB}`}
          target="_blank"
          aria-label="GitHub"
          position="absolute"
          bottom="0"
          right="0"
          w={{ base: '4em', md: '6em' }}
          h={{ base: '4em', md: '6em' }}
          variant="ghost"
          bg="white"
          rounded="full"
          shadow="md"
          _hover={{ bg: 'white', transform: 'scale(1.1)', shadow: 'xl' }}
        >
          <IoLogoGithub size={100} color="black" />
        </IconButton>
      </Tooltip>
    </Box>
  )
}
