import { Button as ChakraButton, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  name?: string
}

export const Button = ({ children, name }: ButtonProps) => (
  <ChakraButton variant="primary" name={name}>
    {children}
  </ChakraButton>
)
