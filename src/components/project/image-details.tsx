import { useProject } from '#/contexts/project'
import FormattedText from '#/components/common/formatted-text'
import { Fade, Flex, Heading, Text } from '@chakra-ui/react'
import { Technology } from '../common/technology'

export function ImageDetails({ currentImage }: { currentImage: number }) {
  const project = useProject()
  return (
    <Flex direction="column" w="full" bg="blue.700" h="full" position="relative">
      {project.detailImages?.map((image, i) => (
        <Fade in={currentImage === i} key={i}>
          <Flex
            position="absolute"
            left={0}
            top={0}
            p={3}
            gap={8}
            w="full"
            h="full"
            pointerEvents={currentImage !== i ? 'none' : 'auto'}
          >
            <Flex direction="column" flex="1">
              <Heading as="h2" size="lg" mb={2}>
                {image.title}
              </Heading>
              <FormattedText align="justify">{image.description}</FormattedText>
              <Text align="justify"></Text>
            </Flex>
            <Flex
              maxW="calc(var(--chakra-sizes-7) * 4 + var(--chakra-space-1) * 3)"
              flexWrap="wrap"
              alignContent="start"
              gap={1}
            >
              {image.technologies?.map((tech, i) => <Technology tech={tech} key={i} />)}
            </Flex>
          </Flex>
        </Fade>
      ))}
    </Flex>
  )
}
