import { Box, Center, Flex, chakra } from '@chakra-ui/react'

export default function LanguagesSection() {
  return (
    <chakra.section h="calc(100vh - 64px)" id="linguagens">
      <Flex direction="column" h="full">
        <Box
          bg="black"
          color="white"
          textAlign="center"
          fontSize="4xl"
          py="3"
          position="sticky"
          top="64px"
          fontFamily="Nunito"
        >
          Principais linguagens
        </Box>
        <Flex h="full" fontSize={['4xl', '5xl', '7xl', '8xl']} textAlign="center">
          <Center flexDirection="column" bg="#ead41c" w="50%" h="full" color="black">
            <chakra.div fontSize={['7xl', '8xl', '9xl']} fontWeight={600}>
              JS
            </chakra.div>
            JavaScript
          </Center>
          <Center flexDirection="column" bg="#2f72bc" w="50%" h="full" color="white">
            <chakra.div fontSize={['7xl', '8xl', '9xl']} fontWeight={600}>
              TS
            </chakra.div>
            TypeScript
          </Center>
        </Flex>
      </Flex>
    </chakra.section>
  )
}
