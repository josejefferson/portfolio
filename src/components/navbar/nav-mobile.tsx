import { NAVIGATION } from '#/data/nav'
import {
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoMdMenu } from 'react-icons/io'
import Social from './social'

export default function NavMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <HStack>
        <Social />
        <IconButton variant="ghost" icon={<IoMdMenu />} aria-label="Abrir menu de navegação" onClick={onOpen} />
      </HStack>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <CloseButton ml="auto" onClick={onClose} />
            {NAVIGATION.map((item, i) => (
              <Link href={item.href} onClick={onClose} key={i}>
                <Button colorScheme="primary" variant="link" py={3} display="block" w="full">
                  {item.name}
                </Button>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
