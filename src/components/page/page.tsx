import { JOB_NAME, NAME } from '#/data/info'
import { SkipNavContent } from '@chakra-ui/react'
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'

interface IPageProps extends PropsWithChildren {
  title?: string
}

export default function Page({ children, title }: IPageProps) {
  let pageTitle = title

  if (pageTitle) {
    pageTitle = `${pageTitle} | ` + NAME
  } else {
    pageTitle = NAME + ' - ' + JOB_NAME
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navbar />
      <main>
        <SkipNavContent />
        {children}
      </main>
      <Footer />
    </>
  )
}
