import { PROJECTS } from '#/data/projects'
import { Container } from '@chakra-ui/react'
import { sectionIDs } from '.'
import Section from '../common/section'
import { Project } from '../home/project'

export default function MainProjects() {
  return (
    <Section id={sectionIDs.mainProjects} title="Projetos em destaque" titleColor="orange.500">
      <Container maxW="6xl" my={5}>
        {PROJECTS.map((project, i) => (
          <Project project={project} i={i} key={i} />
        ))}
      </Container>
    </Section>
  )
}
