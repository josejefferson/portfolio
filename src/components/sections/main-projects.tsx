import { PROJECTS } from '#/data/projects'
import { Container } from '@chakra-ui/react'
import { SECTION_IDS } from '.'
import Section from '../common/section'
import { Project } from '../home/project'

export default function MainProjects() {
  return (
    <Section id={SECTION_IDS.mainProjects} title="Projetos em destaque" titleColor="red.500">
      <Container maxW="6xl" my={5}>
        {PROJECTS.map((project, i) => (
          <Project project={project} i={i} key={i} />
        ))}
      </Container>
    </Section>
  )
}
