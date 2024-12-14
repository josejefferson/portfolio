import { OTHER_PROJECTS } from '#/data/other-projects'
import { Container, SimpleGrid } from '@chakra-ui/react'
import { SECTION_IDS } from '.'
import Section from '../common/section'
import { OtherProject } from '../home/other-project'

export default function OtherProjects() {
  return (
    <Section id={SECTION_IDS.otherProjects} title="Outros projetos" titleColor="pink.500">
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 2, md: 4 }}>
          {OTHER_PROJECTS.map((project, i) => (
            <OtherProject project={project} key={i} />
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}
