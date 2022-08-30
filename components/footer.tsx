import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { Link } from './link'
import { Button } from './button'
import Logo from './logo'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <Button as={'a'} href={href}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return <Text variant="flh">{children}</Text>
}

const ListLink = ({
  children,
  href,
}: {
  children: ReactNode
  href: String
}) => {
  return (
    <Link href={href}>
      <Text variant="fll">{children}</Text>
    </Link>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo
                color={useColorModeValue('gray.700', 'white')}
                height={'5em'}
              />
            </Box>
            <Text fontSize={'sm'}>© 2022 Open Austin. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Twitter'}
                href={'https://twitter.com/openaustin'}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={'YouTube'}
                href={
                  'https://www.youtube.com/channel/UCSDcLeHsq8k-WLaJaRQHh4w'
                }
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={'LinkedIn'}
                href={'https://www.linkedin.com/company/open-austin/about/'}
              >
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            {FOOTER_ITEMS_COMPANY.map((link) => (
              <ListLink href={link.href} key={link.href}>
                {link.label}
              </ListLink>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            {FOOTER_ITEMS_SUPPORT.map((link) => (
              <ListLink href={link.href} key={link.href}>
                {link.label}
              </ListLink>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('#EA6036', '#F2884B')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: useColorModeValue('#C83E2F', '#FFFFFF'),
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

interface FooterItems {
  href: String
  label: String
  key?: String
}

const FOOTER_ITEMS_COMPANY: ReadonlyArray<FooterItems> = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Contact us' },
  { href: '#', label: 'Pricing' },
  { href: '#', label: 'Testimonials' },
]

const FOOTER_ITEMS_SUPPORT: ReadonlyArray<FooterItems> = [
  { href: '#', label: 'Help' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Legal' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Status' },
]
