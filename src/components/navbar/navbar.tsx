import { Avatar } from '@chakra-ui/avatar'
import { Box, Container, HStack, Text } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import Link from '#/components/common/link'
import ScrollToTop from '../common/scroll-top'
import NavDesktop from './nav-desktop'
import NavMobile from './nav-mobile'
import NavDrawer from './drawer'
import { useProject } from '#/contexts/project'

export default function Navbar() {
  const project = useProject()
  const breakpointMd = useBreakpointValue({ base: false, md: true })
  const breakpointLg = useBreakpointValue({ base: false, lg: true })

  return (
    <>
      <Box
        as="nav"
        bg="black"
        boxShadow="sm"
        h="64px"
        display="flex"
        alignItems="center"
        position="fixed"
        top="0"
        left="0"
        w="full"
        zIndex="100"
        transition="all 0.2s ease"
        borderBottom="1px solid"
        borderBottomColor="gray.500"
      >
        <Container maxW="6xl">
          <HStack spacing="10" justify="space-between">
            <HStack>
              <NavDrawer />
              <HStack as={Link} href="/" borderWidth={1} rounded="full" p={1} position="relative">
                <Avatar src="https://github.com/josejefferson.png" size="sm" />
                <Text fontWeight={500} px={2} hidden={!breakpointLg}>
                  {project?.name || 'Jefferson Dantas'}
                </Text>
              </HStack>
            </HStack>

            {!project?.name && (breakpointMd ? <NavDesktop /> : <NavMobile />)}
          </HStack>
        </Container>
      </Box>
      <Box h="64px" />
      <ScrollToTop />
    </>
  )
}
