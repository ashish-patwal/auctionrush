import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box my={5} align='center' opacity={0.4} fontSize='sm'>
      &copy; {new Date().getFullYear()} AuctionRush
    </Box>
  )
}

export default Footer
