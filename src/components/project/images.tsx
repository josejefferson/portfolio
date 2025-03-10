import { useProject } from '#/contexts/project'
import { AspectRatio, Box, Image } from '@chakra-ui/react'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function Images({ setCurrentImage }: { setCurrentImage: (i: number) => void }) {
  const project = useProject()
  return (
    <Box w="full" userSelect="none">
      <Swiper
        navigation
        modules={[Navigation, A11y]}
        centeredSlides
        loop
        spaceBetween={30}
        className="images"
        onSlideChange={(swiper) => setCurrentImage(swiper.realIndex)}
      >
        {project.detailImages?.map((image, i) => (
          <SwiperSlide key={i}>
            <AspectRatio ratio={16 / 9} w="full" bg="black">
              <Image
                src={image.src.src}
                width={image.src.width}
                height={image.src.height}
                alt=""
                h="full"
                sx={{ objectFit: 'scale-down !important' }}
              />
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
