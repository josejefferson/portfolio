import { Box, chakra } from '@chakra-ui/react'

interface ISectionTitleProps {
  title: string
  color: string
}

export function SectionTitle({ title, color }: ISectionTitleProps) {
  return (
    <Box fontSize={['32px', '56px']} textAlign="center" color={color} fontFamily="monospace" py={4}>
      <chakra.span color="gray">&lt;</chakra.span>
      {title} <chakra.span color="gray">/&gt;</chakra.span>
    </Box>
  )
}
