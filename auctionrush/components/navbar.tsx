import { AppProps } from 'next/app'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

const Navbar = (props: AppProps) => {
  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bgGradient='linear(to-r, moe_pink, moe_green)'
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex='docked'
      {...props}
    >
      hello this is a test
    </Box>
  )
}

export default Navbar
