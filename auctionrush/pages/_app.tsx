import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import AuthProvider from '../context/auth_context'
import Layout from '../layout/main'
import theme from '../lib/theme'
import Fonts from '../lib/fonts'

function App({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App
