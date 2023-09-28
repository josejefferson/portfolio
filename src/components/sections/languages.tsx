import { SectionTitle } from '#components/common/section-title'
import { Box, Center, Flex, chakra } from '@chakra-ui/react'

export default function LanguagesSection() {
  return (
    <chakra.section h="calc(100vh - 64px)" id="linguagens">
      <Flex direction="column" h="full">
        <SectionTitle title="Principais linguagens" color="red.500" />

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
