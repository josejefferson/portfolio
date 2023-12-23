import { IconButton } from '@chakra-ui/react'
import useScrollPosition from '@react-hook/window-scroll'
import { MdArrowUpward } from 'react-icons/md'

export default function ScrollToTop() {
  const scrollY = useScrollPosition(10)

  const isVisible = scrollY > 500

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <IconButton
      aria-label="Rolar para o topo da página"
      rounded="full"
      position="fixed"
      bottom={5}
      right={5}
      size="lg"
      shadow="lg"
      zIndex={1}
      transform={isVisible ? 'scale(1)':'scale(0)'}
      transition="transform .2s ease"
      onClick={scrollToTop}
    >
      <MdArrowUpward  />
    </IconButton>
  )
}
