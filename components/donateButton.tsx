import { Button } from './button'

export default function DonateButton() {
  return (
    <Button as={'a'} display={{ base: 'none', md: 'inline-flex' }} href={'#'}>
      Donate
    </Button>
  )
}
