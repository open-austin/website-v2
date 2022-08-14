import { Button } from '@chakra-ui/react'

export default function DonateButton() {
  return (
    <Button
      as={'a'}
      display={{ base: 'none', md: 'inline-flex' }}
      fontSize={'sm'}
      fontWeight={600}
      color={'white'}
      bg={'orange.600'}
      href={'#'}
      _hover={{
        bg: 'orange.400',
      }}
    >
      Donate
    </Button>
  )
}
