// Wrapping Chakra's <Link> with NextJS's <Link>

// See: https://chakra-ui.com/docs/components/link/usage#usage-with-nextjs

import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type LinkProps = {
  href: string
  children?: ReactNode | string
  isExternal?: boolean
  variant?: string
}

export const Link = ({ href, children, variant }: LinkProps) => (
  <NextLink href={href} passHref>
    <ChakraLink variant={variant}>{children}</ChakraLink>
  </NextLink>
)
