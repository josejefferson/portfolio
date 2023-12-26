import { ITechnology } from '#/data/technologies'
import { Box, BoxProps, Image, ImageProps, Tooltip, TooltipProps } from '@chakra-ui/react'
import Link, { LinkProps } from './link'

interface ITechnologyProps {
  tech: ITechnology
  imageProps?: ImageProps
  boxProps?: BoxProps
  tooltipProps?: TooltipProps
  linkProps?: LinkProps
}

export function Technology(props: ITechnologyProps) {
  return props.tech.site ? (
    <Link href={props.tech.site} target="_blank" {...props.linkProps}>
      <TechnologyIcon {...props} />
    </Link>
  ) : (
    <TechnologyIcon {...props} />
  )
}

export function TechnologyIcon(props: ITechnologyProps) {
  return (
    <Tooltip label={props.tech.name} placement="top" hasArrow {...props.tooltipProps}>
      <Box w={7} h={7} {...props.boxProps}>
        <Image
          src={props.tech.image}
          alt={props.tech.name}
          w="full"
          h="full"
          objectFit="contain"
          {...props.imageProps}
        />
      </Box>
    </Tooltip>
  )
}
