import { Card, CardBody, Container, Heading, Image, Text, Tooltip, chakra } from '@chakra-ui/react'
import Link from '#/components/common/link'
import { SECTION_IDS } from '.'
import Section from '../common/section'
import { PropsWithChildren } from 'react'

export default function Education() {
  return (
    <Section id={SECTION_IDS.education} title="Formação" titleColor="purple.500">
      <Container maxW="6xl">
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
            <Heading as="h3" size="md" mb={3}>
              IFPB - Campus Picuí
            </Heading>

            <Heading as="h4" fontSize="lg" mt={5} mb={2} fontWeight={500}>
              2019 - 2021
            </Heading>

            <PPCHintWrapper url="/attachments/PPC - Informática.pdf">
              Curso Técnico Integrado em Informática (ensino médio)
            </PPCHintWrapper>

            <Heading as="h4" fontSize="lg" mt={5} mb={2} fontWeight={500}>
              2022 - 2023
            </Heading>

            <PPCHintWrapper url="/attachments/PPC - Eletrônica.pdf">
              Curso Técnico Subsequente em Eletrônica
            </PPCHintWrapper>

            <Heading as="h4" fontSize="lg" mt={5} mb={2} fontWeight={500}>
              2023 - 2026 <chakra.i>(em andamento)</chakra.i>
            </Heading>

            <PPCHintWrapper url="/attachments/PPC - TSI.pdf">
              Curso Superior de Tecnologia em Sistemas para Internet
            </PPCHintWrapper>
          </CardBody>
        </Card>
      </Container>
    </Section>
  )
}

function PPCHintWrapper({ children, url }: PropsWithChildren & { url: string }) {
  return (
    <Tooltip label="Clique para baixar o PPC" placement="top-start">
      <Link href={url} target="_blank" display="block">
        {children}{' '}
        <Text as="span" srOnly>
          (Clique para baixar o PPC do curso)
        </Text>
      </Link>
    </Tooltip>
  )
}
