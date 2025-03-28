import { EMAIL, GITHUB, LINKEDIN } from '#/data/info'
import { Box, Button, ButtonGroup, Container, HStack, IconButton, Text } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { MdMail, MdOutlineCode } from 'react-icons/md'
import Link from '../common/link'

export default function Footer() {
  return (
    <Box as="footer" bg="gray.900" py={5} pb={20}>
      <Container maxW="6xl">
        <HStack justify="space-between" flexDirection={{ base: 'column', sm: 'row' }}>
          <Text fontSize="sm" color="fg.subtle">
            &copy; {new Date().getFullYear()} Jefferson Dantas
          </Text>
          <ButtonGroup variant="ghost" colorScheme="white" spacing={3}>
            <IconButton
              as={Link}
              href={`https://github.com/${GITHUB}`}
              target="_blank"
              aria-label="GitHub"
              icon={<IoLogoGithub size={24} />}
            />
            <IconButton
              as={Link}
              href={`https://www.linkedin.com/in/${LINKEDIN}/`}
              target="_blank"
              aria-label="LinkedIn"
              icon={<IoLogoLinkedin size={24} />}
            />
            <IconButton
              as={Link}
              href={`mailto:${EMAIL}`}
              target="_blank"
              aria-label="E-mail"
              icon={<MdMail size={24} />}
            />
            <Button
              as={Link}
              leftIcon={<MdOutlineCode size={24} />}
              href="https://github.com/josejefferson/portfolio"
              target="_blank"
            >
              Código fonte
            </Button>
          </ButtonGroup>
        </HStack>
      </Container>
    </Box>
  )
}
