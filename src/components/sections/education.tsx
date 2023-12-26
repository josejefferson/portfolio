import { Card, CardBody, Container, Heading, Image, Text, Tooltip, chakra } from '@chakra-ui/react'
import Link from '#/components/common/link'
import { sectionIDs } from '.'
import Section from '../common/section'

export default function Education() {
  return (
    <Section id={sectionIDs.education} title="Formação" titleColor="purple.500">
      <Container maxW="6xl" my={5}>
        <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" p={5}>
          <Image
            objectFit="contain"
            w={100}
            h={100}
            p={2}
            src="/img/ifpb-picui-logo.svg"
            alt="Logo do IFPB Campus Picuí"
            bg="white"
            rounded="lg"
            flexShrink={0}
            mx="auto"
          />

          <CardBody py={{ base: 5, sm: 0 }} px={{ base: 0, sm: 5 }}>
            <Heading size="md" mb={3}>
              IFPB - Campus Picuí
            </Heading>

            <Text fontSize="lg" mt={5} mb={2} fontWeight={500}>
              2019 - 2021
            </Text>

            <Tooltip label="Clique para baixar o PPC" placement="top-start" hasArrow>
              <Link href="/attachments/PPC - Informática.pdf" target="_blank">
                <Text>Curso Técnico Integrado em Informática (ensino médio)</Text>
              </Link>
            </Tooltip>

            <Text fontSize="lg" mt={5} mb={2} fontWeight={500}>
              2022 - 2023
            </Text>

            <Tooltip label="Clique para baixar o PPC" placement="top-start" hasArrow>
              <Link href="/attachments/PPC - Eletrônica.pdf" target="_blank">
                <Text>Curso Técnico Subsequente em Eletrônica</Text>
              </Link>
            </Tooltip>

            <Text fontSize="lg" mt={5} mb={2} fontWeight={500}>
              2023 - 2026 <chakra.i>(em andamento)</chakra.i>
            </Text>

            <Tooltip label="Clique para baixar o PPC" placement="top-start" hasArrow>
              <Link href="/attachments/PPC - TSI.pdf" target="_blank">
                <Text>Curso Superior de Tecnologia em Sistemas para Internet</Text>
              </Link>
            </Tooltip>
          </CardBody>
        </Card>
      </Container>
    </Section>
  )
}
