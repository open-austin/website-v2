import { useColorMode } from '@chakra-ui/react'
import { Button } from './button'

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}
