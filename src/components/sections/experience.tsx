import { Container, Heading, UnorderedList, ListItem, Text, Box, Flex, Tooltip } from '@chakra-ui/react'
import { SECTION_IDS } from '.'
import Section from '../common/section'
import { COMPETENCES } from '#/data/competences'
import Link from '../common/link'

export default function Experience() {
  return (
    <Section id={SECTION_IDS.experience} title="Experiência" titleColor="green.500">
      <Container maxW="6xl" my={5}>
        <Heading>IFPB - Campus Picuí</Heading>

        <Text fontWeight={200} fontStyle="italic" mb={4}>
          2018 - Atualmente
        </Text>

        <UnorderedList>
          <ListItem>
            Desenvolvi uma plataforma para registro de faltas dos professores e remanejamento de horários escolares{' '}
            <Link href="/projeto/vagazero/" target="_blank" color="primary.400">
              (link)
            </Link>
            ;
          </ListItem>
          <ListItem>
            Criei um assistente virtual (chatbot) para auxiliar na demanda de dúvidas de alunos e responsáveis de alunos
            do IFPB{' '}
            <Link href="/projeto/chatbot/" target="_blank" color="primary.400">
              (link)
            </Link>
            .<br />
            Este projeto recebeu uma premiação na VII FECAP;
          </ListItem>
          <ListItem>
            Criei uma extensão para o Google Meet que permite a leitura em voz alta das mensagens do chat, para ajudar
            os professores durante a pandemia{' '}
            <Link href="https://github.com/josejefferson/speak-meet-messages" target="_blank" color="primary.400">
              (link)
            </Link>
            ;
          </ListItem>
          <ListItem>
            Desenvolvi um site que reunia todos as videoaulas gravadas pelo IFPB durante a pandemia{' '}
            <Link href="https://github.com/josejefferson/ifpblives" target="_blank" color="primary.400">
              (link)
            </Link>
            .
          </ListItem>
        </UnorderedList>

        <Heading fontSize="lg" mt={8} mb={4}>
          Minhas competências:
        </Heading>

        <Flex gap={2} flexWrap="wrap">
          {COMPETENCES.map((competence, i) => (
            <Tooltip label={competence.description} placement="top" hasArrow key={i}>
              <Box
                bg="gray.600"
                fontSize="sm"
                borderRadius="full"
                py={0.5}
                px={2}
                cursor={competence.description ? 'help' : 'default'}
                tabIndex={competence.description ? 0 : -1}
              >
                {competence.name}
              </Box>
            </Tooltip>
          ))}
        </Flex>
      </Container>
    </Section>
  )
}
