import { useProject } from '#/contexts/project'
import { Box, Image } from '@chakra-ui/react'
import { A11y, Mousewheel, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function Images({ setCurrentImage }: { setCurrentImage: (i: number) => void }) {
  const project = useProject()
  return (
    <Box w="full" userSelect="none">
      <Swiper
        navigation
        modules={[Mousewheel, Navigation, A11y]}
        mousewheel
        centeredSlides
        loop
        spaceBetween={30}
        className="images"
        onSlideChange={(swiper) => setCurrentImage(swiper.realIndex)}
      >
        {project.detailImages?.map((image, i) => (
          <SwiperSlide key={i}>
            <Image src={image.src} alt={image.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
