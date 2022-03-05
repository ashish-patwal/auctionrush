import { AnimatePresence, motion } from 'framer-motion'
import { Heading, useColorModeValue, useColorMode } from '@chakra-ui/react'

const Brand = () => {
  const { colorMode } = useColorMode()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 10, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: '0.2' }}
      >
        <Heading
          as='h1'
          size='xl'
          letterSpacing={'tighter'}
          bgClip='text'
          bgGradient={useColorModeValue(
            'linear(to-r, moe_pink, moe_green)',
            'linear(to-r, moe_blue, moe_red)'
          )}
        >
          {colorMode === 'light' ? 'AuctionRush' : 'AuctionCrush'}
        </Heading>
      </motion.div>
    </AnimatePresence>
  )
}

export default Brand
