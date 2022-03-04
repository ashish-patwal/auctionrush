import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Layout from '../layout/main'
import theme from '../lib/theme'

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default App
