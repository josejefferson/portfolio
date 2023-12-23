import { IMainTechnology, MAIN_TECHNOLOGIES } from '#/data/main-technologies'
import { Box, Card, Flex, HStack, Image, Text } from '@chakra-ui/react'
import { sectionIDs } from '.'
import Section from '../common/section'
import Link from 'next/link'

export default function Languages() {
  return (
    <Section id={sectionIDs.languages} title="Principais tecnologias" titleColor="orange.500">
      <Flex justify="center" overflowX="auto">
        <Box display="inline-block" mx="auto">
          <HStack spacing={[3, 5]} m={[3, 5]}>
            {MAIN_TECHNOLOGIES.map((tech, i) => (
              <TechnologyCard tech={tech} key={i} />
            ))}
          </HStack>
        </Box>
      </Flex>
    </Section>
  )
}

export function TechnologyCard({ tech }: { tech: IMainTechnology }) {
  const { technology, cardColor } = tech

  return (
    <Link
      href={technology.site || ''}
      target="_blank"
      onClick={(e) => {
        if (technology.site) return
        e.preventDefault()
        e.stopPropagation()
      }}
      style={{ flexShrink: 0 }}
    >
      <Card
        p={[2, 4]}
        textAlign="center"
        bg={`${cardColor}.900`}
        _hover={{ bg: `${cardColor}.800` }}
        _active={{ bg: `${cardColor}.700` }}
        transition=".2s ease"
      >
        <Image src={technology.image} alt={technology.name} w={[100, 200]} h={[100, 200]} objectFit="contain" />
        <Text fontSize={['md', 'xl']} mt={[2, 4]}>
          {technology.name}
        </Text>
      </Card>
    </Link>
  )
}
