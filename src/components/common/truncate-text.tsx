import { Link } from '@chakra-ui/react'
import { useState } from 'react'

export function TruncateText({ children, limit }: { children: string; limit?: number }) {
  const [readMore, setReadMore] = useState(false)

  const LIMIT = limit ?? 300

  const toggleReadMore = (e: any) => {
    e.preventDefault()
    setReadMore(!readMore)
  }

  if (children.length < LIMIT + 50) {
    return <>{children}</>
  }

  return (
    <>
      {readMore ? children : children.slice(0, LIMIT) + '…'}{' '}
      <Link onClick={toggleReadMore}>
        {!readMore ? (
          'Ler mais'
        ) : (
          <>
            <br />
            Ler menos
          </>
        )}
      </Link>
    </>
  )
}
