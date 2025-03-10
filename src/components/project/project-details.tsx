import FormattedText from '#/components/common/formatted-text'
import { useProject } from '#/contexts/project'
import { Flex, Heading } from '@chakra-ui/react'
import { TruncateText } from '../common/truncate-text'
import { ProjectActions } from './actions'
import { Technologies } from './technologies'
import Link from '../common/link'

export function ProjectDetails() {
  const project = useProject()
  return (
    <Flex p={3} direction="column" w={{ md: '300px' }} bg="gray.700" minH="full">
      <Heading mb={4} as={Link} href={project.link || project.github} underline isExternal>
        {project.name}
      </Heading>
      <FormattedText>
        <TruncateText limit={100}>{project.description}</TruncateText>
      </FormattedText>
      <ProjectActions />
      <Technologies />
    </Flex>
  )
}
