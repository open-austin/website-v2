import {
  extendTheme,
  type ThemeConfig,
  // type Theme, // Uncomment to see the Theme API
  // theme as baseTheme,
} from '@chakra-ui/react'

// baseTheme.colors.messenger[300]

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
  // disableTransitionOnChange: true,
}

const colors = {
  brand: {
    primary: '#EA6036',
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const components = {
  Link: {
    baseStyle: {
      color: colors.brand['700'],
    },
  },
  SocialButton: {
    baseStyle: {
      color: '#e77131',
    },
  },
}

// Note: there are conflicting examples of how to use `extendTheme`, and
// its docs say that the API is unwiedly. Also, it's really poorly typed.
// See: https://chakra-ui.com/docs/styled-system/color-mode#updating-the-theme-config
// See: https://chakra-ui.com/getting-started/nextjs-guide#customizing-theme
export const theme = extendTheme({
  config,
  colors,
  components,
  // textStyles: {
  //   link: {
  //     color: '#2a69ac',
  //   },
  // h1: {
  //   // you can also use responsive styles
  //   fontSize: ['48px', '72px'],
  //   fontWeight: 'bold',
  //   lineHeight: '110%',
  //   letterSpacing: '-2%',
  // },
  // },
})
