import { NAVIGATION } from '#/data/nav'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Link from '#/components/common/link'
import Social from './social'

export default function NavDesktop() {
  return (
    <ButtonGroup as="nav" variant="link" spacing={{ base: 4, lg: 8 }} alignItems="center">
      {NAVIGATION.map((item, i) => (
        <Button as={Link} href={item.href} key={i} colorScheme="primary">
          {item.name}
        </Button>
      ))}
      <Social />
    </ButtonGroup>
  )
}
