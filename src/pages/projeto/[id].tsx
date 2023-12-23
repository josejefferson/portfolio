import Navbar from '#/components/navbar/navbar'
import { ImageDetails } from '#/components/project/image-details'
import { Images } from '#/components/project/images'
import { ProjectDetails } from '#/components/project/project-details'
import ProjectProvider from '#/contexts/project'
import { PROJECTS } from '#/data/projects'
import { Container, Flex } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

export default function Project({ id }: { id: string }) {
  const project = PROJECTS.find((project) => project.id === id)
  const [currentImage, setCurrentImage] = useState(0)

  if (!project) return 'Projeto não encontrado'

  return (
    <ProjectProvider project={project}>
      <Head>
        <title>{project.name + ' - Projeto - Jefferson Dantas'}</title>
      </Head>
      <Navbar projectName={project.name} />
      <Container maxW="6xl" px={0} minH="calc(100vh - 64px)">
        <Flex h="full" minH="calc(100vh - 64px)">
          <Flex direction="column" flex="1" w="100px" align="center" bg="gray.900">
            <Images setCurrentImage={setCurrentImage} />
            <ImageDetails currentImage={currentImage} />
          </Flex>

          <ProjectDetails />
        </Flex>
      </Container>
    </ProjectProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { id: context.query.id } }
}
