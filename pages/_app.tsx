// Setup for Chakra and Next environments

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from '../lib/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
