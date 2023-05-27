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
  chakra
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import Link from 'next/link'

export default function Section2() {
  return (
    <chakra.section h="calc(100vh - 64px)" bg="green.500" id="section2">
      <Container maxW="6xl" h="full">
        Hello World
        {/* <Stack direction={['column', 'row']} justify="space-between" h="full">
        </Stack> */}
      </Container>
    </chakra.section>
  )
}
