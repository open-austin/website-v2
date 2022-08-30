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
            <ListLink href={'#'}>About us</ListLink>
            <ListLink href={'#'}>Blog</ListLink>
            <ListLink href={'#'}>Contact us</ListLink>
            <ListLink href={'#'}>Pricing</ListLink>
            <ListLink href={'#'}>Testimonials</ListLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <ListLink href={'#'}>Help Center</ListLink>
            <ListLink href={'#'}>Terms of Service</ListLink>
            <ListLink href={'#'}>Legal</ListLink>
            <ListLink href={'#'}>Privacy Policy</ListLink>
            <ListLink href={'#'}>Status</ListLink>
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
