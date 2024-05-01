import { Text } from '@chakra-ui/react'
import ReactLinkify from 'react-linkify'

export default function FormattedText({ children, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      mt={2}
      whiteSpace="pre-line"
      sx={{
        '& a': {
          color: 'var(--chakra-colors-blue-500)'
        },
        '& a:hover': { textDecoration: 'underline' }
      }}
      {...props}
    >
      <ReactLinkify>{children as any}</ReactLinkify>
    </Text>
  )
}
