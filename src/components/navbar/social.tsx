import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

export default function Social() {
  return (
    <HStack>
      <Link href="https://github.com/josejefferson" target="_blank">
        <Tooltip hasArrow label="Acesse meu GitHub" placement="bottom">
          <IconButton aria-label="GitHub" size="sm" variant="ghost" color="white" px={2}>
            <IoLogoGithub size={24} />
          </IconButton>
        </Tooltip>
      </Link>
      <Link href="https://www.linkedin.com/in/jose-jefferson/" target="_blank">
        <Tooltip hasArrow label="Acesse meu LinkedIn" placement="bottom">
          <IconButton
            aria-label="LinkedIn"
            size="sm"
            variant="ghost"
            colorScheme="linkedin"
            px={2}
          >
            <IoLogoLinkedin size={24} />
          </IconButton>
        </Tooltip>
      </Link>
    </HStack>
  )
}
