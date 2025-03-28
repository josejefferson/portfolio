import { Button, chakra } from '@chakra-ui/react'
import { useState } from 'react'

export function TruncateText({ children, limit }: { children: string; limit?: number }) {
  const [readMore, setReadMore] = useState(false)

  const LIMIT = limit ?? 200

  const toggleReadMore = (e: any) => {
    e.preventDefault()
    setReadMore(!readMore)
  }

  if (children.length < LIMIT + 50) {
    return children
  }

  return (
    <>
      <chakra.span srOnly>{children}</chakra.span>

      <chakra.span aria-hidden>
        {readMore ? children : children.slice(0, LIMIT) + '…'}

        <Button variant="link" onClick={toggleReadMore} display={readMore ? 'block' : 'inline'} aria-hidden>
          {readMore ? 'Ler menos' : 'Ler mais'}
        </Button>
      </chakra.span>
    </>
  )
}
