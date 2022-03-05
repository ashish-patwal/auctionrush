import { AnimatePresence, motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        exit={{ rotate: 720, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          isRound={true}
          variant='outline'
          aria-label='Toggle Theme'
          colorScheme={useColorModeValue('moe_pinkk', 'moe_greenn')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggle
