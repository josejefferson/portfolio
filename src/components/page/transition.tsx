import { AnimatePresence, motion } from 'framer-motion'
import { Router, useRouter } from 'next/router'
import NProgress from 'nprogress'
import { PropsWithChildren, useEffect } from 'react'

export default function PageTransition({ children }: PropsWithChildren) {
  const router = useRouter()

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start()
    })

    Router.events.on('routeChangeComplete', () => {
      NProgress.done(false)
    })
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.25 }}
        variants={{
          exitState: { opacity: 0 },
          initialState: { opacity: 0 },
          animateState: { opacity: 1 }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
