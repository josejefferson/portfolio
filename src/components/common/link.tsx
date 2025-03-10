import { Link as ChakraLink, LinkProps as ChakraLinkProps, chakra } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { forwardRef } from 'react'

export type LinkProps = NextLinkProps &
  ChakraLinkProps & {
    href?: string
    underline?: boolean
  }

const Link = forwardRef((props: LinkProps, ref) => {
  const { href, target, underline, ...otherProps } = props
  if (!href) return <chakra.div display="inline" {...otherProps} ref={ref} />

  return (
    <ChakraLink
      as={NextLink}
      href={href}
      target={target}
      {...otherProps}
      ref={ref}
      _hover={{ textDecoration: props.underline ? 'underline' : 'none' }}
    />
  )
})

export default Link
