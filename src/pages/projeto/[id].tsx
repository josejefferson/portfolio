import Page from '#/components/page/page'
import { ImageDetails } from '#/components/project/image-details'
import { Images } from '#/components/project/images'
import { ProjectDetails } from '#/components/project/project-details'
import ProjectProvider from '#/contexts/project'
import { PROJECTS } from '#/data/projects'
import { Container, Flex } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'

export default function Project({ id }: { id: string }) {
  const project = PROJECTS.find((project) => project.id === id)
  const [currentImage, setCurrentImage] = useState(0)

  if (!project) return 'Projeto não encontrado'

  return (
    <ProjectProvider project={project}>
      <Page title={`${project.name} - Projeto`}>
        <Container maxW="6xl" px={0} minH="calc(100vh - 64px)">
          <Flex direction={{ base: 'column', md: 'row' }} h="full" minH="calc(100vh - 64px)">
            <Flex direction="column" flex="1" w={{ md: '100px' }} align="center" bg="gray.900">
              <Images setCurrentImage={setCurrentImage} />
              <ImageDetails currentImage={currentImage} />
            </Flex>
            <ProjectDetails />
          </Flex>
        </Container>
      </Page>
    </ProjectProvider>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { id: params?.id } }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: PROJECTS.filter((project) => project.id).map((project) => ({ params: { id: project.id } })),
    fallback: false
  }
}
