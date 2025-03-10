import { ISkillCategory, SKILLS } from '#/data/skills'
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Progress,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { InView } from 'react-intersection-observer'
import { SECTION_IDS } from '.'
import Section from '../common/section'
import Link from '../common/link'

export default function Skills() {
  return (
    <Section id={SECTION_IDS.skills} title="Habilidades" titleColor="orange.500">
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} h="full">
          {SKILLS.map((skillCategory, i) => (
            <SkillCard skillCategory={skillCategory} key={i} />
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}

interface ISkillCardProps {
  skillCategory: ISkillCategory
}

function SkillCard({ skillCategory }: ISkillCardProps) {
  const { title, color, items } = skillCategory

  return (
    <InView>
      {({ inView, ref }) => (
        <Card
          w="full"
          borderColor={color + '.400'}
          borderWidth={2}
          ref={ref}
          className={inView ? 'skill-card animate-skill' : 'skill-card'}
        >
          <CardHeader textAlign="center">
            <Heading as="h3" size="md">
              {title}
            </Heading>
          </CardHeader>

          <Divider borderWidth={1} />

          <CardBody>
            {items.map((item, i) => (
              <Flex
                as={Link}
                href={item.technology.site}
                align="center"
                mb={3}
                gap={3}
                key={i}
                className="skill"
                sx={{ animationDelay: `${i * 100}ms !important` }}
              >
                <Image
                  className="skill-image"
                  w={10}
                  h={10}
                  src={item.technology.image}
                  alt="Ícone"
                  objectFit="contain"
                  aria-hidden
                />
                <Text fontWeight={500} role="presentation" className="skill-name">
                  {item.technology.name}
                </Text>
              </Flex>
            ))}
          </CardBody>
        </Card>
      )}
    </InView>
  )
}
