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
import Link from '#/components/common/link'
import { useRef } from 'react'
import { MdMoreVert } from 'react-icons/md'
import Social from './social'

export default function NavMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <HStack>
        <Social />
        <IconButton
          ref={btnRef}
          variant="ghost"
          icon={<MdMoreVert size={24} />}
          aria-label="Abrir menu de navegação"
          onClick={onOpen}
        />
      </HStack>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <CloseButton ml="auto" onClick={onClose} />
            {NAVIGATION.map((item, i) => (
              <Button
                as={Link}
                href={item.href}
                onClick={onClose}
                colorScheme="primary"
                variant="link"
                py={3}
                w="full"
                key={i}
              >
                {item.name}
              </Button>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
