import { NAVIGATION } from '#/data/nav'
import { PROJECTS } from '#/data/projects'
import {
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRef } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { MdArrowForward, MdHome } from 'react-icons/md'

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <IconButton ref={btnRef} variant="ghost" icon={<IoMdMenu />} aria-label="Abrir menu lateral" onClick={onOpen} />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody pt={0}>
            <Button
              as={Link}
              href="/"
              leftIcon={<MdHome />}
              variant="ghost"
              colorScheme="white"
              textDecoration="none !important"
              justifyContent="flex-start"
              my={1}
              w="full"
            >
              Início
            </Button>

            <Heading as="h2" size="sm" mt={4} mb={2}>
              PROJETOS
            </Heading>

            {PROJECTS.filter((project) => project.id).map((project, i) => (
              <Button
                as={Link}
                href={`/projeto/${project.id}`}
                onClick={onClose}
                colorScheme="white"
                variant="ghost"
                my={1}
                py={3}
                w="full"
                justifyContent="flex-start"
                textDecoration="none !important"
                leftIcon={<MdArrowForward />}
                key={i}
              >
                {project.name}
              </Button>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
