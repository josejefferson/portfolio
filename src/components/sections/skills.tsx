import { SectionTitle } from '#components/common/section-title'
import { SKILLS } from '#data/skills'
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
  Text,
  chakra
} from '@chakra-ui/react'
import { InView } from 'react-intersection-observer'

export default function SkillsSection() {
  return (
    <chakra.section id="habilidades">
      <Flex direction="column">
        <SectionTitle title="Habilidades" color="blue.500" />

        <Flex>
          <Container maxW="6xl">
            <SimpleGrid columns={[1, 1, 3]} spacing={5} py={5} h="full">
              {SKILLS.map((skill, i) => (
                <SkillCard {...skill} key={i} />
              ))}
            </SimpleGrid>
          </Container>
        </Flex>
      </Flex>
    </chakra.section>
  )
}

interface ISkill {
  name: string
  image: string
  skill: number
}

interface ISkillCardProps {
  title: string
  color: string
  items: ISkill[]
}

function SkillCard({ title, color, items }: ISkillCardProps) {
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
            <Heading size="md">{title}</Heading>
          </CardHeader>
          <Divider borderWidth={1} />
          <CardBody>
            {items.map((item, i) => (
              <Flex mb={3} gap={3} key={i} className="skill" sx={{ animationDelay: `${i * 100}ms !important` }}>
                <Image className="skill-image" w={10} h={10} src={item.image} alt="Ícone" objectFit="contain" />
                <Box flex="1" sx={{ animationDelay: `${i * 100}ms !important` }}>
                  <Text fontWeight={500} mb={2} className="skill-name">
                    {item.name}
                  </Text>
                  <Progress
                    size="xs"
                    value={item.skill}
                    colorScheme={color}
                    borderRadius="full"
                    className="skill-bar"
                    sx={{ animationDelay: `${i * 100}ms !important` }}
                  />
                </Box>
              </Flex>
            ))}
          </CardBody>
        </Card>
      )}
    </InView>
  )
}
