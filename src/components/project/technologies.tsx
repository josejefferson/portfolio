import { useProject } from '#/contexts/project'
import { ITechnology } from '#/data/technologies'
import { ITechnologyType, TECHNOLOGY_TYPES } from '#/data/technology-types'
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export function Technologies() {
  const project = useProject()
  const groupedTechnologies = project.technologies.reduce((acc, tech) => {
    if (!acc.has(tech.type)) {
      acc.set(tech.type, [tech])
    } else {
      acc.set(tech.type, [...acc.get(tech.type)!, tech])
    }
    return acc
  }, new Map<ITechnologyType, ITechnology[]>())

  return (
    <>
      <Heading mt={5} as="h3" size="md">
        Tecnologias utilizadas
      </Heading>
      {Object.values(TECHNOLOGY_TYPES).map((type, i) => {
        const technologies = groupedTechnologies.get(type)
        if (!technologies) return null
        return (
          <Box key={i} mt={5}>
            <Box textAlign="left" fontSize={12} textTransform="uppercase" fontWeight={500}>
              {technologies.length === 1 ? type.name : type.namePlural}
            </Box>
            {technologies.map((tech, i) => (
              <VStack mt={3} key={i}>
                {tech.site ? (
                  <Link href={tech.site} target="_blank" style={{ width: '100%' }}>
                    <Technology tech={tech} />
                  </Link>
                ) : (
                  <Technology tech={tech} />
                )}
              </VStack>
            ))}
          </Box>
        )
      })}
    </>
  )
}

function Technology({ tech }: { tech: ITechnology }) {
  return (
    <Flex w="full" align="center">
      <Image src={tech.image} alt={tech.name} w={7} h={7} objectFit="contain" mr={3} />
      <Text fontSize={20} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" flex="1" fontWeight={300}>
        {tech.name}
      </Text>
    </Flex>
  )
}
