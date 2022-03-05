import { AppProps } from 'next/app'
import NextLink from 'next/link'
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
  useColorModeValue,
  background
} from '@chakra-ui/react'
import ThemeToggle from './theme-toggle'
import Brand from './brand'

const LinkItem = ({ href, path, target, children, ...props }: AppProps) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const bgGradient = useColorModeValue(
    'linear(to-bl, moe_skin, moe_bluee)',
    'linear(to-tr, moe_red, moe_pink)'
  )
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'moe_bluee' : undefined}
        color={active ? 'moe_greenn' : inactiveColor}
        target={target}
        _hover={{
          bgGradient: bgGradient,
          borderRadius: 'base'
        }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props: AppProps) => {
  const { path } = props
  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bgGradient={useColorModeValue(
        // 'linear(to-r, moe_pink, moe_green)',
        // 'linear(to-r, moe_blue, moe_red)'
        '#ffffff40',
        '#20202380'
      )}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.xl'
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Brand />
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row-reverse' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <ThemeToggle />
          <LinkItem href='/activeauctions' path={path}>
            Active Auctions
          </LinkItem>
          <LinkItem href='/myauctions' path={path}>
            My Auctions
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
