import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode('#FAFAEF', '#202023')(props)
    }
  })
}

const colors = {
  moe_blue: '#BCF3FC',
  moe_bluee: '#A0E5FB',
  moe_blueee: '#5DD4FA',
  moe_skin: '#FAFAEF',
  moe_pink: '#FBE3E2',
  moe_pinkk: '#F6C2E1',
  moe_red: '#F7A1A8',
  moe_redd: '#FC8B96',
  moe_green: '#9AFAC2',
  moe_greenn: '#82FBC5'
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const fonts = {
  heading: "'Dancing Script', cursive"
}

const theme = extendTheme({ colors, styles, config, fonts })
export default theme
