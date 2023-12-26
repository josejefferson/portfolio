import { Container } from '@chakra-ui/react'
import { sectionIDs } from '.'
import Section from '../common/section'

export default function Experience() {
  return (
    <Section id={sectionIDs.experience} title="Experiência" titleColor="green.500">
      <Container maxW="6xl" my={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora voluptas labore dolor dolorem placeat
        libero soluta. Quas dolorem harum perferendis fugit id explicabo asperiores recusandae ea placeat porro!
        Tempore.
      </Container>
    </Section>
  )
}
