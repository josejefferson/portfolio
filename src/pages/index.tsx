import Navbar from '#/components/navbar/navbar'
import { Sections } from '#/components/sections'
import { Box } from '@chakra-ui/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jefferson Dantas</title>
      </Head>
      <Navbar />
      <Box className="sections">
        <Sections.Main />
        <Sections.About />
        <Sections.Languages />
        <Sections.Skills />
        <Sections.Education />
        <Sections.Experience />
        <Sections.MainProjects />
        <Sections.OtherProjects />
        <Sections.Contact />
      </Box>
    </>
  )
}
