import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue
} from '@chakra-ui/react'
import theme from '../../lib/theme'
import { LockIcon } from '@chakra-ui/icons'
import Layout from '../../layout/account'

export default function Auth() {
  return (
    <Layout>
      <Box
        bgGradient={useColorModeValue(
          `linear(to-r, ${theme.colors.moe_pink + 60}, ${theme.colors.moe_green + 60
          })`,
          `linear(to-r, ${theme.colors.moe_blue + 40}, ${theme.colors.moe_red + 40
          })`
        )}
        boxShadow='lg'
        rounded='md'
        p={5}
        m='auto'
      >
        <LockIcon pb={2} fontSize='3xl' />
        <Heading px={4} display='inline-block' as='h1'>
          Authenticate
        </Heading>
        <FormControl bg={useColorModeValue('light', 'dark')} as='form'>
          <FormLabel pt={4} htmlFor='email'>
            Email Address
          </FormLabel>
          <Input id='email' type='email' />
          <FormLabel pt={4} htmlFor='username'>
            Username
          </FormLabel>
          <Input id='username' type='text' />
          <FormLabel pt={4} htmlFor='password'>
            Password
          </FormLabel>
          <Input id='password' type='password' />
        </FormControl>
      </Box>
    </Layout>
  )
}
