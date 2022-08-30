import { Button as ChakraButton, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  name?: string
  onClick?: (e: any) => void
}

export const Button = ({ children, onClick, name }: ButtonProps) => (
  <ChakraButton
    bg={useColorModeValue('#EA6036', '#F2884B')}
    transition={'background 0.3s ease'}
    _hover={{
      bg: useColorModeValue('#C83E2F', '#FFFFFF'),
    }}
    onClick={onClick}
    name={name}
  >
    {children}
  </ChakraButton>
)
