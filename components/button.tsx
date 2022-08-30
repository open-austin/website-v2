import { Button as ChakraButton, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => (
  <ChakraButton
    bg={useColorModeValue('#EA6036', '#F2884B')}
    transition={'background 0.3s ease'}
    _hover={{
      bg: useColorModeValue('#C83E2F', '#FFFFFF'),
    }}
  >
    {children}
  </ChakraButton>
)
