import { Card, CardBody, Container, Flex, Grid, Image, chakra } from '@chakra-ui/react'
import { SECTION_IDS } from '.'
import Section from '../common/section'

export default function About() {
  return (
    <Section id={SECTION_IDS.about} title="Sobre mim" titleColor="blue.500">
      <Container maxW="6xl">
        <Grid templateColumns={{ base: '1fr', md: '3fr 1fr', lg: '2fr 1fr' }} gap={10}>
          <Card rounded="xl">
            <CardBody fontSize="lg" textAlign="justify">
              <chakra.p>
                <Image
                  src="https://github.com/josejefferson.png"
                  aria-label="Imagem do GitHub de Jefferson Dantas"
                  rounded="lg"
                  w={{ base: 16, sm: 100 }}
                  shadow="md"
                  float="left"
                  mr={2}
                  mb={2}
                  filter="grayscale(1)"
                />
                Prazer, eu sou <u>Jefferson Dantas</u>! Sou um entusiasta apaixonado por <b>programação web</b>, com
                formação em informática pelo IFPB Campus Picuí. Atualmente, estou aprimorando meus conhecimentos,
                cursando Sistemas para Internet no mesmo instituto. Contribuí ativamente para o desenvolvimento de
                sistemas significativos no campus, como o seu chatbot e o VagaZero, uma plataforma que otimiza o
                registro de faltas de professores e remanejamento de horários no IFPB Campus Picuí. Estou animado para
                continuar explorando e crescendo na área de desenvolvimento.
              </chakra.p>

              <chakra.p mt={3}>
                Minha especialização está centrada no <b>desenvolvimento web fullstack</b>, destacando-me na criação de
                sites e sistemas back-end por meio da utilização de <b>JavaScript</b>, <b>TypeScript</b> e <b>NestJS</b>
                . No âmbito do front-end, possuo competência em tecnologias como <b>React</b>, <b>Next.js</b>,{' '}
                <b>HTML</b>, <b>CSS</b> e <b>JavaScript</b>.
              </chakra.p>

              <chakra.p mt={3}>
                No meu tempo livre, gosto de estudar novas tecnologias, além disso, dedico-me em projetos pessoais,
                transformando minhas ideias em realidade através da programação.
              </chakra.p>
            </CardBody>
          </Card>

          <Flex h="full" align="center" display={{ base: 'none', md: 'flex' }}>
            <Image
              src="/img/languages.svg"
              aria-label="Ilustração com as principais tecnologias que uso: JavaScript, TypeScript, Node.js, React, NextJS, Yarn e GitHub"
              w="full"
              maxW={400}
              mx="auto"
            />
          </Flex>
        </Grid>
      </Container>
    </Section>
  )
}
