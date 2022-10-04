import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('gray.700', 'gray.900')
  const hover = useColorModeValue('gray.800', 'gray.700')

  return (
    <Button
      size={'md'}
      onClick={toggleColorMode}
      bg={bg}
      _hover={{ bg: hover }}
    >
      {colorMode === 'light' ? '🌑 Dark Mode' : '💡 Light Mode'}
    </Button>
  )
}
