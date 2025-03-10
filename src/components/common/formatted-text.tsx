import { chakra } from '@chakra-ui/react'
import ReactLinkify from 'react-linkify'

export default function FormattedText({ children, ...props }: React.ComponentProps<typeof chakra.span>) {
  return (
    <chakra.span
      whiteSpace="pre-line"
      sx={{
        '& a': {
          color: 'var(--chakra-colors-blue-400)'
        },
        '& a:hover': { textDecoration: 'underline' }
      }}
      {...props}
    >
      <ReactLinkify>{children}</ReactLinkify>
    </chakra.span>
  )
}
