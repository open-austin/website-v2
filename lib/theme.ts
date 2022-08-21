/**
 * This file is just an example of how we might override the theme.
 * Nothing here is really doing much for us, with the exception of
 * `Link`, which is overriden just so we could see links more easily.
 *
 * As I was learning about Chakra and it's design system assuptions,
 * I left some links so that the next person will have a place to
 * get started. Good luck!
 *
 * @Updated (08/19/2022) @newswim
 *
 */

import {
  ComponentStyleConfig,
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
    orange: '#EA6036',
    orangeDark: '#C83E2F',
    orangeLight: '#F2884B',
    gray: '#5D5D5D',
    blue: '#0082DE'
  },
  greys: {
    darkGray: '#2D2D2D',
    medGray: '#AEAEAE',
    lightGray: '#D8D8D8',
    white: '#FFFFFF'
  }
}

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
}

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const components = {
  Link: {
    baseStyle: {
      color: colors.brand['orangeDark'],
    },
  },
  SocialButton: {
    baseStyle: {
      color: '#e77131',
    },
  },
  Stack: {
    baseStyle: {
      spacing: 4,
      direction: "column"
    }
  },
  Heading: {
    variants: {
      title: {
        as: 'h1',
        fontSize: fontSizes['6xl'],
        mt: 6,
        justifyContent:'center'
      },
      section: {
        fontSize:fontSizes['3xl'],
        pt:8
      },
      credits: {
        fontSize:fontSizes['3xl'],
        pb: 2
      }
    }
  }

}

/**
 * Note: there are conflicting examples of how to use `extendTheme`, and
 * its docs say that the API is unwiedly. Also, it's really poorly typed.
 *
 * @see https://chakra-ui.com/docs/styled-system/color-mode#updating-the-theme-config
 * @see https://chakra-ui.com/getting-started/nextjs-guide#customizing-theme
 */
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
