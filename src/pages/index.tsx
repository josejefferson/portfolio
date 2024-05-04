import Page from '#/components/page/page'
import { Sections } from '#/components/sections'
import { Box } from '@chakra-ui/layout'

export default function Home() {
  return (
    <Page>
      <Box className="sections" mb={8}>
        <Sections.Main />
        <Sections.About />
        <Sections.Languages />
        <Sections.Skills />
        <Sections.Education />
        <Sections.Experience />
        <Sections.MainProjects />
        {/* <Sections.OtherProjects /> */}
        <Sections.Contact />
      </Box>
    </Page>
  )
}
