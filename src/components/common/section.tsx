import { Box, Container, Flex, chakra } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

interface ISectionProps extends PropsWithChildren {
  title?: string
  titleColor?: string
  id?: string
  screenHeight?: boolean
}

export default function Section(props: ISectionProps) {
  const { id, screenHeight } = props

  return (
    <chakra.section id={id} h={screenHeight ? 'calc(100vh - 64px)' : 'auto'}>
      <SectionContent {...props} />
    </chakra.section>
  )
}

function SectionContent(props: ISectionProps) {
  const { title, titleColor, children } = props

  if (!title) return children

  return (
    <Flex direction="column" h="full">
      <SectionTitle title={title} color={titleColor!} />
      {children}
    </Flex>
  )
}

interface ISectionTitleProps {
  title: string
  color: string
}

export function SectionTitle({ title, color }: ISectionTitleProps) {
  return (
    <Container maxW="6xl">
      <Box
        as="h2"
        aria-label={title}
        fontSize={{ base: 36, md: 50 }}
        textAlign="center"
        color={color}
        fontFamily="monospace"
        pt={12}
        pb={6}
      >
        <chakra.span color="gray" aria-hidden>
          &lt;
        </chakra.span>
        {title}{' '}
        <chakra.span color="gray" aria-hidden>
          /&gt;
        </chakra.span>
      </Box>
    </Container>
  )
}
