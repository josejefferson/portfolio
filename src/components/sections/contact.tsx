import Link from '#/components/common/link'
import { EMAIL, LINKEDIN } from '#/data/info'
import { Card, CardBody, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { IoLogoLinkedin } from 'react-icons/io'
import { MdMail } from 'react-icons/md'
import { SECTION_IDS } from '.'
import Section from '../common/section'

export default function Contact() {
  return (
    <Section id={SECTION_IDS.contact} title="Contato" titleColor="cyan.500">
      <Container maxW="6xl">
        <Flex justify="space-evenly" direction={{ base: 'column', md: 'row' }} gap={5}>
          <Link href={`mailto:${EMAIL}`} target="_blank">
            <Card
              direction="row"
              variant="outline"
              rounded="full"
              minW={330}
              borderColor="red.600"
              borderWidth={2}
              bg="red.900"
              h="68px"
              _hover={{ bg: 'red.800' }}
              _active={{ bg: 'red.700' }}
              transition=".2s ease"
            >
              <Flex h="full" aspectRatio={1 / 1} align="center" justify="center" rounded="full" bg="red.700">
                <MdMail size={36} />
              </Flex>

              <CardBody p={2}>
                <Heading size="md">E-mail</Heading>
                <Text>{EMAIL}</Text>
              </CardBody>
            </Card>
          </Link>

          <Link href={`https://www.linkedin.com/in/${LINKEDIN}/`} target="_blank">
            <Card
              direction="row"
              variant="outline"
              rounded="full"
              minW={330}
              borderColor="linkedin.600"
              borderWidth={2}
              bg="linkedin.900"
              h="68px"
              _hover={{ bg: 'linkedin.800' }}
              _active={{ bg: 'linkedin.700' }}
              transition=".2s ease"
            >
              <Flex h="full" aspectRatio={1 / 1} align="center" justify="center" rounded="full" bg="linkedin.700">
                <IoLogoLinkedin size={36} />
              </Flex>

              <CardBody p={2}>
                <Heading size="md">LinkedIn</Heading>
                <Text>{LINKEDIN}</Text>
              </CardBody>
            </Card>
          </Link>
        </Flex>
      </Container>
    </Section>
  )
}
