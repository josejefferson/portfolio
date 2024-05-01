import { Badge } from '#/components/common/badge'
import { IProject } from '#/data/projects'
import FormattedText from '#/components/common/formatted-text'
import { AspectRatio, Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import Link from '#/components/common/link'
import { IoLogoGithub } from 'react-icons/io'
import { MdOpenInNew } from 'react-icons/md'
import { A11y, Autoplay, Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Technology } from '../common/technology'
import { TruncateText } from '../common/truncate-text'

export function Project({ project, i }: { project: IProject; i: number }) {
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
          pagination
          modules={[Pagination, Autoplay, A11y, Mousewheel]}
          mousewheel
          centeredSlides
          spaceBetween={30}
          loop
          autoplay={{
            delay: 10000 + Math.floor(Math.random() * 5000),
            disableOnInteraction: false
          }}
          style={{ borderRadius: 'var(--chakra-radii-lg)', transition: '.2s ease' }}
          className="images"
        >
          {project.images.map((image, i) => (
            <SwiperSlide key={i}>
              <AspectRatio ratio={16 / 9} w="full" bg="black">
                <Image src={image} alt="" rounded="lg" h="full" sx={{ objectFit: 'scale-down !important' }} />
              </AspectRatio>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box>
        <Flex wrap="wrap" gap={4} mb={1} hidden={!project.badges?.length}>
          {project.badges?.map((badge, i) => <Badge {...badge} key={i} />)}
        </Flex>

        <Heading mb={3}>{project.name}</Heading>

        <Box width="100px" mb={3} bg="white" h="1px" className="heading-line" />

        <FormattedText textAlign="justify" mb={3}>
          <TruncateText>{project.description}</TruncateText>
        </FormattedText>

        <Heading size="sm" mb={2}>
          Principais tecnologias utilizadas
        </Heading>
        <Flex gap={2} mb={5} flexWrap="wrap">
          {(project.mainTechnologies || project.technologies)?.map((tech, i) => <Technology tech={tech} key={i} />)}
        </Flex>

        <Heading size="sm" mb={2} hidden={!project.concepts?.length}>
          Conceitos utilizados
        </Heading>
        <Flex gap={1} mb={5} flexWrap="wrap">
          {project.concepts?.map((concept, i) => (
            <Box bg="gray.600" fontSize="xs" borderRadius="full" py={0.5} px={2} key={i}>
              {concept.name}
            </Box>
          ))}
        </Flex>

        {project.link && (
          <Button
            as={Link}
            href={project.link}
            target="_blank"
            mr={2}
            mb={2}
            colorScheme="green"
            leftIcon={<MdOpenInNew size={24} />}
          >
            Abrir
          </Button>
        )}

        {project.id && (
          <Button as={Link} href={`/projeto/${project.id}`} mr={2} mb={2} colorScheme="blue" variant="outline">
            Detalhes
          </Button>
        )}

        {project.github && (
          <Button
            as={Link}
            href={project.github}
            mr={2}
            mb={2}
            colorScheme="white"
            variant="outline"
            leftIcon={<IoLogoGithub size={24} />}
          >
            GitHub
          </Button>
        )}
      </Box>
    </Flex>
  )
}
