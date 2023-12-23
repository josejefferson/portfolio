import { PropsWithChildren } from 'react'
import Navbar from '../navbar/navbar'
import Head from 'next/head'

interface IPageProps extends PropsWithChildren {
  title?: string
}

export default function Page({ children, title }: IPageProps) {
  let pageTitle = title

  if (pageTitle) {
    pageTitle = `${pageTitle} - Jefferson Dantas`
  } else {
    pageTitle = 'Jefferson Dantas'
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  )
}
