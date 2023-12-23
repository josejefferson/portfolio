import { Container } from '@chakra-ui/react'
import { sectionIDs } from '.'
import Section from '../common/section'

export default function Contact() {
  return (
    <Section id={sectionIDs.contact} title="Contato" titleColor="orange.500">
      <Container maxW="6xl" my={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora voluptas labore dolor dolorem placeat
        libero soluta. Quas dolorem harum perferendis fugit id explicabo asperiores recusandae ea placeat porro!
        Tempore.
      </Container>
    </Section>
  )
}
