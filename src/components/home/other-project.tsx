import { IOtherProject } from '#/data/other-projects'
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text, chakra } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io'
import { MdOpenInNew } from 'react-icons/md'
import Link from '../common/link'
import { Technology } from '../common/technology'

export function OtherProject({ project }: { project: IOtherProject }) {
  return (
    <Card borderColor={`${project.color}.400`} borderWidth={2}>
      <CardHeader textAlign="center">
        <chakra.div as={project.icon} color={`${project.color}.400`} mx="auto" mb={4} size={36} />
        <Heading size="md">{project.name}</Heading>
      </CardHeader>

      <CardBody pt={0} pb={4} textAlign="center" color="gray.400">
        <Text>{project.description}</Text>
      </CardBody>

      <CardFooter pt={0} display="block">
        <Flex justify="center" gap={2} mb={4} flexWrap="wrap" hidden={!project.mainTechnologies}>
          {project.mainTechnologies?.map((tech, i) => <Technology tech={tech} size={4} key={i} />)}
        </Flex>

        <Flex justify="center" wrap="wrap" gap={2}>
          {project.link && (
            <Button
              as={Link}
              href={project.link}
              variant="ghost"
              size="sm"
              colorScheme="white"
              leftIcon={<MdOpenInNew size={24} />}
            >
              Abrir
            </Button>
          )}

          {project.github && (
            <Button
              as={Link}
              href={project.github}
              variant="ghost"
              size="sm"
              colorScheme="white"
              leftIcon={<IoLogoGithub size={24} />}
            >
              GitHub
            </Button>
          )}
        </Flex>
      </CardFooter>
    </Card>
  )
}
