import { NAVIGATION } from '#/data/nav'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Link from 'next/link'
import Social from './social'

export default function NavDesktop() {
  return (
    <ButtonGroup as="nav" variant="link" spacing="8"alignItems="center">
      {NAVIGATION.map((item, i) => (
        <Link href={item.href} key={i}>
          <Button colorScheme="primary">{item.name}</Button>
        </Link>
      ))}
      <Social/>
    </ButtonGroup>
  )
}
