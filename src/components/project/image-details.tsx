import FormattedText from '#/components/common/formatted-text'
import { useProject } from '#/contexts/project'
import { Flex, Heading } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Technology } from '../common/technology'

export function ImageDetails({ currentImage }: { currentImage: number }) {
  const project = useProject()
  const image = project.detailImages?.[currentImage]

  if (!image) return null

  return (
    <Flex direction="column" w="full" bg="blue.700" h="full" position="relative">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          key={currentImage}
        >
          <Flex p={3} gap={8} w="full" h="full" direction={{ base: 'column', sm: 'row' }}>
            <Flex direction="column" flex="1">
              <Heading as="h2" size="lg" mb={2}>
                {image.title}
              </Heading>
              <FormattedText textAlign="justify">{image.description}</FormattedText>
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
        </motion.div>
      </AnimatePresence>
    </Flex>
  )
}
