import { useProject } from '#/contexts/project'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { Technologies } from './technologies'
import FormattedText from '#/components/common/formatted-text'
import { TruncateText } from '../common/truncate-text'

export function ProjectDetails() {
  const project = useProject()
  return (
    <Flex p={3} direction="column" w="300px" bg="gray.700" minH="full">
      <Heading mb={4}>{project.name}</Heading>
      <FormattedText>
        <TruncateText limit={100}>{project.description}</TruncateText>
      </FormattedText>
      <Technologies />
    </Flex>
  )
}
