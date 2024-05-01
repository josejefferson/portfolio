import { IMainTechnology, MAIN_TECHNOLOGIES } from '#/data/main-technologies'
import { Box, Card, Container, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { SECTION_IDS } from '.'
import Section from '../common/section'
import Link from '#/components/common/link'

export default function MainTechnologies() {
  return (
    <Section id={SECTION_IDS.languages} title="Principais tecnologias" titleColor="yellow.500">
      <Container maxW="6xl" my={5}>
        <Flex justify="center" overflowX="auto">
          <Box display="inline-block" mx="auto">
            <SimpleGrid columns={{ base: 3, md: 4, lg: 6 }} spacing={[3, 5]} m={[3, 5]}>
              {MAIN_TECHNOLOGIES.map((tech, i) => (
                <TechnologyCard tech={tech} key={i} />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
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
    >
      <Card
        p={[2, 4]}
        textAlign="center"
        bg={`${cardColor}.900`}
        _hover={{ bg: `${cardColor}.800` }}
        _active={{ bg: `${cardColor}.700` }}
        transition=".2s ease"
      >
        <Image src={technology.image} alt={technology.name} w="full" aspectRatio={1 / 1} objectFit="contain" />
        <Text fontSize={['md', 'xl']} mt={[2, 4]}>
          {technology.name}
        </Text>
      </Card>
    </Link>
  )
}
