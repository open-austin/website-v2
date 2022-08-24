import {
  Stack,
  Heading,
  UnorderedList,
  ListItem,
  Box,
  Text,
  Container,
  Center,
} from '@chakra-ui/react'
import { Link } from '../components/link'

const MeetTheTeam = () => {
  return (
    <Container>
      <Stack>
        <Center>
          <Heading as="h1" size="4xl">
            Open Austin Leadership
          </Heading>
        </Center>
        <Text fontSize={'xl'}>
          Here are our{' '}
          <Link
            href="https://docs.google.com/document/d/1hRG_yf0XWz4b-PwQ265R0TaIXtuuQ516N-kkBKDg1k8/edit#heading=h.gucmfp1zup8l"
            isExternal
          >
            {' '}
            bylaws{' '}
          </Link>{' '}
          and{' '}
          <Link
            href="https://drive.google.com/drive/folders/163C2dsaa-dYH45gUfy9t3Uql5XUfTc4A"
            isExternal
          >
            board meeting minutes
          </Link>
          . Do you have more questions that this site does not answer? Email{' '}
          <Link href="mailto:info@open-austin.org" isExternal>
            info@open-austin.org
          </Link>
          .
        </Text>
        <Box pb={8} mb={8}>
          <Text fontSize={'xl'} mb={2}>
            Our board consists of:
          </Text>
          <UnorderedList fontSize={'xl'}>
            <ListItem>
              <Link href="http://lianilychee.github.io/" isExternal>
                Liani Lye
              </Link>{' '}
              – President
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/mcareyaus" isExternal>
                Matt Carey
              </Link>{' '}
              – Treasurer
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/steve-h-63506b23/"
                isExternal
              >
                Steve Harrison
              </Link>{' '}
              – Secretary
            </ListItem>
            <ListItem>Aaron Renaud – At-large Member</ListItem>
            <ListItem>
              <Link href="https://github.com/newswim" isExternal>
                Dan Minshew
              </Link>{' '}
              – At-large Member
            </ListItem>
          </UnorderedList>
          <Text fontSize={'xl'} mb={2} mt={2}>
            Our advisory council consists of:
          </Text>
          <UnorderedList fontSize={'xl'}>
            <ListItem>Mateo Clarke</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </Container>
  )
}

export default MeetTheTeam
