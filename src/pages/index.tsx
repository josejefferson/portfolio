import Navbar from '#components/navbar/navbar'
import MainSection from '#components/sections/main'
import Section2 from '#components/sections/section2'
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
        <MainSection />
        {/* <Section2 />
        <Section2 />
        <Section2 />
        <Section2 /> */}
      </Box>
    </>
  )
}
