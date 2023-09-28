import { PROJECTS } from '#data/projects'
import { IProject } from '#types/project'
import { Box, Button, Container, Flex, Heading, Image, Text, chakra } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io'
import { MdInfo, MdOpenInNew } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import Link from 'next/link'
import { Badge } from '#components/common/badge'
import { SectionTitle } from '#components/common/section-title'

export default function Projects() {
  return (
    <chakra.section h="calc(100vh - 64px)" id="projetos">
      <Flex direction="column" h="full">
        <SectionTitle title="Projetos" color="orange.500" />

        <Container maxW="6xl" my={5}>
          {PROJECTS.map((project, i) => (
            <Project project={project} i={i} key={i} />
          ))}
        </Container>
      </Flex>
    </chakra.section>
  )
}

function Project({ project, i }: { project: IProject; i: number }) {
  const isOdd = i % 2 === 0
  return (
    <Flex
      direction={isOdd ? ['column', 'column', 'row'] : ['column', 'column', 'row-reverse']}
      mb={20}
      gap={6}
      sx={{
        '&:hover > .side-line': { h: [0, 0, '200px'], w: ['200px', '200px', 0] },
        '&:hover .images': {
          transform: ['none', 'none', `rotate3d(0, 1, 0, ${isOdd ? '' : '-'}15deg)`]
        }
      }}
    >
      <Box
        w={['60px', '60px', 0]}
        h={[0, 0, '60px']}
        border="white 1px solid"
        className="side-line"
        transition=".2s ease"
        m="auto"
      />

      <Box w={['full', '500px']} sx={{ perspective: '1600px' }}>
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay, A11y]}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 10000 + Math.floor(Math.random() * 5000),
            disableOnInteraction: false
          }}
          style={{ borderRadius: 'var(--chakra-radii-lg)', transition: '.2s ease' }}
          className="images"
        >
          <SwiperSlide>
            <Image src={project.image} alt="" rounded="lg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={project.image} alt="" rounded="lg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={project.image} alt="" rounded="lg" />
          </SwiperSlide>
        </Swiper>
      </Box>

      <Box>
        <Flex wrap="wrap" gap={2} mb={1} hidden={!project.badges?.length}>
          {project.badges?.map((badge, i) => (
            <Badge {...badge} key={i} />
          ))}
        </Flex>

        <Heading mb={3}>{project.name}</Heading>

        <Box width="100px" mb={3} bg="white" h="1px" className="heading-line" />

        <Text textAlign="justify" mb={3}>
          {project.description}
        </Text>

        {project.link && (
          <Link href={project.link} target="_blank">
            <Button mr={2} mb={2} colorScheme="green" leftIcon={<MdOpenInNew />}>
              Abrir
            </Button>
          </Link>
        )}

        {project.id && (
          <Link href={`/project/${project.id}`}>
            <Button mr={2} mb={2} colorScheme="blue" variant="outline">
              Detalhes
            </Button>
          </Link>
        )}

        {project.github && (
          <Link href={project.github}>
            <Button mr={2} mb={2} colorScheme="white" variant="outline" leftIcon={<IoLogoGithub />}>
              GitHub
            </Button>
          </Link>
        )}
      </Box>
    </Flex>
  )
}
