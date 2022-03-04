import Head from 'next/head'
import { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }: AppProps) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta name='description' content='AuctionRush Homepage' />
        <meta name='author' content='Ashish Patwal' />
        <title>AuctionRush - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
