import { ITechnology } from '#/data/technologies'
import { Box, Image, Tooltip } from '@chakra-ui/react'
import Link from './link'

interface ITechnologyProps {
  tech: ITechnology
  size?: number
}

export function Technology({ tech, size = 7 }: ITechnologyProps) {
  return (
    <Tooltip label={tech.name} placement="top">
      <Box w={size} h={size} as={Link} href={tech.site} target="_blank" tabIndex={0}>
        <Image src={tech.image} alt={tech.name} w="full" h="full" objectFit="contain" />
      </Box>
    </Tooltip>
  )
}
