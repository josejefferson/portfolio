import { Link as ChakraLink, LinkProps as ChakraLinkProps, chakra } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { forwardRef } from 'react'

export type LinkProps = NextLinkProps &
  ChakraLinkProps & {
    href?: string
    underline?: boolean
  }

const Link = forwardRef((props: LinkProps, ref) => {
  if (!props.href) return <chakra.span {...props} ref={ref} />

  return (
    <ChakraLink
      as={NextLink}
      {...props}
      ref={ref}
      _hover={{ textDecoration: props.underline ? 'underline' : 'none' }}
    />
  )
})

export default Link
