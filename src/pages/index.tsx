import Navbar from '#components/navbar/navbar'
import LanguagesSection from '#components/sections/languages'
import MainSection from '#components/sections/main'
import Projects from '#components/sections/projects'
import SkillsSection from '#components/sections/skills'
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
        {/* Sobre mim */}
        {/* Habilidades */}
        <LanguagesSection />
        <SkillsSection />
        <Projects />
        {/* Cursos */}
        {/* Contato */}
      </Box>
    </>
  )
}
