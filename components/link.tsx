// Wrapping Chakra's <Link> with NextJS's <Link>

// See: https://chakra-ui.com/docs/components/link/usage#usage-with-nextjs

import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import { ReactElement } from 'react'

export type LinkProps = {
  href: string
  children: ReactElement | string
  isExternal: boolean | null
}

export const Link = ({ href, children }: LinkProps) => (
  <NextLink href={href} passHref>
    <ChakraLink>{children}</ChakraLink>
  </NextLink>
)
