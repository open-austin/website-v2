import { Button, useColorMode } from '@chakra-ui/react'
export default function DarkModeSwitch() {
  console.log(useColorMode())

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={(e) => toggleColorMode()}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}
