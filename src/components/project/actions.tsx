import { useProject } from '#/contexts/project'
import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io'
import { MdOpenInNew } from 'react-icons/md'

export function ProjectActions() {
  const project = useProject()

  return (
    <Box mt={3} hidden={!project.link && !project.github}>
      {project.link && (
        <Button
          as={Link}
          href={project.link}
          target="_blank"
          mr={2}
          size="sm"
          colorScheme="green"
          leftIcon={<MdOpenInNew size={20} />}
          aria-label={`Abrir página do projeto ${project.name}`}
        >
          Abrir
        </Button>
      )}

      {project.github && (
        <Button
          as={Link}
          href={project.github}
          mr={2}
          size="sm"
          colorScheme="white"
          variant="outline"
          leftIcon={<IoLogoGithub size={20} />}
        >
          GitHub
        </Button>
      )}
    </Box>
  )
}
