import { DefaultLayout } from '../components/Layout'
import {
  Box,
  Center,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function CodeOfConduct() {
  return (
    <DefaultLayout>
      <Container maxW="container.md" className="coc-container">
        <Stack spacing={4} direction="column">
          <Center>
            <Heading as="h1" size={'2xl'} mt={6} justifyContent="center">
              Codes of Conduct
            </Heading>
          </Center>
          <Heading size={'xl'} pt={8}>
            General code of conduct
          </Heading>
          <Text fontSize={'xl'}>
            Open Austin is committed to broad community participation, and
            making our events enjoyable and rewarding for everybody who
            participates. We provide this Code of Conduct in the interest of
            facilitating a positive, nurturing experience for all.
          </Text>
          <Text>We expect participants at our events and activities to:</Text>
          <Box pl={12}>
            <ol>
              <li>
                Keep a safe and respectful environment for all other
                participants.
              </li>
              <li>
                Act to ensure other participants are free to fully express their
                identities.
              </li>
              <li>
                Recognize that participants have different backgrounds and
                levels of experience. Everybody should be welcome, questions
                encouraged, and mentoring opportunities sought.
              </li>
              <li>
                Bring positive efforts and skills to bear, and prefer language
                such as “yes/and” to “no/but.”
              </li>
              <li>Strive to listen as much as they speak.</li>
              <li>
                Strive to build tools that are open and free technology for
                public use. Support efforts to prioritize activities that aim to
                foster public use, not private gain.
              </li>
              <li>
                Support efforts to prioritize access for and input from those
                who are traditionally excluded from the civic process.
              </li>
              <li>
                Work to ensure that the community is well-represented in the
                planning, design, and implementation of civic tech. This
                includes encouraging participation from women, minorities, and
                traditionally marginalized groups.
              </li>
              <li>
                Actively involve community groups and those with subject matter
                expertise in the decision-making process.
              </li>
              <li>
                Ensure that the relationships and conversations between
                community members, the local government staff and community
                partners remain respectful, participatory, and productive.
              </li>
              <li>
                Provide an environment where people are free from discrimination
                or harassment.
              </li>
            </ol>
          </Box>
          <p>
            Event organizers reserve the right to take action, up to and
            including expulsion, in response to violations of these policies.
          </p>
          <Heading pt={8}>Anti-harassment policy</Heading>
          <p>
            All Open Austin events and their staff, presenters, and participants
            are held to an anti-harassment policy, included below.
          </p>
          <p>
            In addition to governing our own events by this policy, Open Austin
            will only lend our name and fund groups that offer an
            anti-harassment policy to their attendees. For information on how to
            offer an anti-harassment policy to your group, see&nbsp;
            <a href="https://docs.google.com/a/codeforamerica.org/document/d/1Zg2FDt7awgfCmdcbzMwKHMb1A7KDOhs_z7ibCb3TLLQ/edit">
              this guide
            </a>
            .
          </p>
          <p>
            Open Austin is dedicated to providing a harassment-free experience
            for everyone regardless of gender, gender identity and expression,
            sexual orientation, disability, physical appearance, body size,
            race, nationality, age, or religion. We do not tolerate harassment
            of staff, presenters, and participants in any form. Sexual language
            and imagery is not appropriate for any Open Austin event or network
            activity, including talks. Anyone in violation of these policies may
            be expelled from Open Austin events or network activities, at the
            discretion of the event organizers.
          </p>
          <p>
            Harassment includes but is not limited to: offensive verbal or
            written comments related to gender, gender identity and expression,
            sexual orientation, disability, physical appearance, body size,
            race, religion; sexual images in public spaces; deliberate
            intimidation; stalking; following; harassing photography or
            recording; sustained disruption of talks or other events;
            inappropriate physical contact; unwelcome sexual attention;
            unwarranted exclusion; and patronizing language or action.
          </p>
          <p>
            If a participant engages in harassing behavior, the event organizers
            may take any action they deem appropriate, including warning the
            offender or expulsion from Open Austin events and network
            activities.
          </p>
          <p>
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of
            Open Austin leadership immediately.&nbsp; You may email{' '}
            <a href="mailto:info@open-austin.org">info@open-austin.org</a>, or
            submit the anonymous form at the bottom of this page.
          </p>
          <p>
            Our leadership and event staff will help participants contact venue
            security or local law enforcement, provide escorts, or otherwise
            assist those experiencing harassment to feel safe for the duration
            of the event.&nbsp; If you cannot reach an event organizer and/or it
            is an emergency, please call 911 and/or remove yourself from the
            situation.
          </p>
          <p>
            We value your attendance and hope that by communicating these
            expectations widely we can all enjoy a harassment-free environment.
          </p>
          <Heading pt={12}>Report an issue</Heading>
          <iframe
            className="lazyloaded"
            loading="lazy"
            width={800}
            height={800}
            data-src="https://docs.google.com/forms/d/e/1FAIpQLSf37fqeeBV7thNBiAvkY8Sd-pwxjUYSO1FMqUuaYh6d9D_94w/viewform?embedded=true"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf37fqeeBV7thNBiAvkY8Sd-pwxjUYSO1FMqUuaYh6d9D_94w/viewform?embedded=true"
            name="fitvid0"
          >
            Loading…
          </iframe>
          <Box pb={8} mb={8}>
            <Heading pb={2}>Credits</Heading>
            <Text pb={4}>
              This code of conduct and anti-harassment policy are based on&nbsp;
              <Link href="https://github.com/codeforamerica/codeofconduct">
                Code for America’s Code of Conduct
              </Link>
              , which in turn is based on the&nbsp;
              <Link href="https://geekfeminism.wikia.org/wiki/Conference_anti-harassment/Policy">
                Geek Feminism wiki
              </Link>
              .
            </Text>
            <Text fontSize={'lg'} pb={4}>
              Deep thanks to:
            </Text>
            <ul>
              <li>
                The Ohio LinuxFest anti-harassment policy, written by Esther
                Filderman and Beth Lynn Eicher
              </li>
              <li>Con Anti-Harassment Project</li>
              <li>
                Mary Gardiner, Valerie Aurora, Sarah Smith, and Donna Benjamin,
                who generalized the policies and added supporting material
              </li>
              <li>
                Many members of LinuxChix, Geek Feminism and other groups who
                contributed to this work
              </li>
            </ul>
            <p>
              This code of conduct was adopted by 11-0 vote of online
              participants, October 23, 2014.
            </p>
          </Box>
        </Stack>
      </Container>
    </DefaultLayout>
  )
}
