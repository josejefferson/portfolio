import { Card, CardBody, Container, Image, Link, SimpleGrid, Text } from '@chakra-ui/react'
import { sectionIDs } from '.'
import Section from '../common/section'

export default function About() {
  return (
    <Section id={sectionIDs.about} title="Sobre mim" titleColor="blue.500">
      <Container maxW="6xl" my={5}>
        <SimpleGrid columns={[1, 1, 2]}>
          <Card rounded="xl">
            <CardBody fontSize="lg" textAlign="justify">
              <Image
                src="https://github.com/josejefferson.png"
                aria-label="Imagem do GitHub de Jefferson Dantas"
                rounded="lg"
                w={[16, 100]}
                shadow="md"
                float="left"
                mr={2}
                mb={2}
                filter="grayscale(1)"
              />
              Prazer, eu sou <Text as="u">Jefferson Dantas</Text>! Sou um entusiasta apaixonado por{' '}
              <Text as="b">programação web</Text>, com 20 anos de idade e formação em informática pelo IFPB Campus
              Picuí. Atualmente, estou aprimorando meus conhecimentos, cursando Sistemas para Internet no mesmo
              instituto. Contribuí ativamente para o desenvolvimento de sistemas significativos no campus, como o seu{' '}
              <Link href="#chatbot" fontStyle="italic">
                chatbot
              </Link>{' '}
              e o{' '}
              <Link href="#vagazero" fontStyle="italic">
                VagaZero
              </Link>
              , uma plataforma que otimiza o registro de faltas de professores e remanejamento de horários no IFPB
              Campus Picuí. Estou animado para continuar explorando e crescendo na área de desenvolvimento.
            </CardBody>
          </Card>

          <Image
            src="/img/languages.svg"
            aria-label="Ilustração com as principais tecnologias que uso: JavaScript, TypeScript, Node.js, React, Next.js, Yarn e GitHub"
            w={300}
            mx="auto"
            display={['none','none','block']}
          />
        </SimpleGrid>
      </Container>
    </Section>
  )
}
