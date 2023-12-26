import {
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoLogoLinkedin } from 'react-icons/io'
import { MdMail } from 'react-icons/md'
import { sectionIDs } from '.'
import Section from '../common/section'

export default function Contact() {
  return (
    <Section id={sectionIDs.contact} title="Contato" titleColor="cyan.500">
      <Container maxW="6xl" my={5}>
        <Flex justify="space-evenly" direction={{ base: 'column', md: 'row' }} gap={5}>
          <Link href="mailto:jeffersonn.jjdaj@gmail.com" target="_blank">
            <Card
              direction="row"
              variant="outline"
              rounded="full"
              minW={330}
              borderColor="red.600"
              borderWidth={2}
              bg="red.900"
              h="68px"
            >
              <Flex h="full" aspectRatio={1 / 1} align="center" justify="center" rounded="full" bg="red.700">
                <MdMail size={36} />
              </Flex>

              <CardBody p={2}>
                <Heading size="md">E-mail</Heading>
                <Text>jeffersonn.jjdaj@gmail.com</Text>
              </CardBody>
            </Card>
          </Link>

          <Link href="https://www.linkedin.com/in/jose-jefferson/" target="_blank">
            <Card
              direction="row"
              variant="outline"
              rounded="full"
              minW={330}
              borderColor="linkedin.600"
              borderWidth={2}
              bg="linkedin.900"
              h="68px"
            >
              <Flex h="full" aspectRatio={1 / 1} align="center" justify="center" rounded="full" bg="linkedin.700">
                <IoLogoLinkedin size={36} />
              </Flex>

              <CardBody p={2}>
                <Heading size="md">LinkedIn</Heading>
                <Text>jose-jefferson</Text>
              </CardBody>
            </Card>
          </Link>
        </Flex>
      </Container>
    </Section>
  )
}
