import Link from '#/components/common/link'
import { GITHUB, LINKEDIN } from '#/data/info'
import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

export default function Social() {
  return (
    <HStack>
      <Tooltip label="Acesse meu GitHub" placement="bottom">
        <IconButton
          as={Link}
          href={`https://github.com/${GITHUB}`}
          target="_blank"
          aria-label="Acessar meu GitHub"
          size="sm"
          variant="ghost"
          color="white"
          px={2}
        >
          <IoLogoGithub size={24} />
        </IconButton>
      </Tooltip>

      <Tooltip label="Acesse meu LinkedIn" placement="bottom">
        <IconButton
          as={Link}
          href={`https://www.linkedin.com/in/${LINKEDIN}/`}
          target="_blank"
          aria-label="Acessar meu LinkedIn"
          size="sm"
          variant="ghost"
          colorScheme="linkedin"
          px={2}
        >
          <IoLogoLinkedin size={24} />
        </IconButton>
      </Tooltip>
    </HStack>
  )
}
