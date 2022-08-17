import {
  Box,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Container,
  Center,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Container maxW="container.md" className="coc-container">
      <Stack spacing={4} direction="column">
        <Center>
          <Heading as="h1" size={"2xl"} mt={6} justifyContent="center">
            About Open Austin
          </Heading>
        </Center>
        <Box pb={8} mb={8}>
          <Stack>
            <Heading as="h2" size="md">
              What is Open Austin?
            </Heading>
            <Text fontSize={"xl"}>
              We believe that 21st-century government should work for the
              people, by the people.
            </Text>
            <Text fontSize={"xl"}>
              Open Austin is a volunteer civic technology community consisting
              of developers, designers, data nerds, policy wonks, resident
              activists, and countless others. We use technology creatively to
              address local civic and social challenges, and improve all our
              neighbors’ quality of life.
            </Text>
            <Text fontSize={"xl"}>
              We are affiliated with{" "}
              <Link href="https://brigade.codeforamerica.org/" isExternal>
                Code for America’s Brigade Network.
              </Link>
            </Text>
          </Stack>
        </Box>
        <Box pb={8} mb={8}>
          <Stack>
            <Heading as="h2" size="md">
              What is Civic Technology?
            </Heading>
            <Text fontSize={"xl"}>
              The definition of civic tech can be quite unclear sometimes – here
              is a great starting point:{" "}
              <Link
                href="https://medium.com/civic-makers/civictech-primer-what-is-civic-tech-7ea788e766d3#.lr9joeu39"
                isExternal
              >
                #CivicTech Primer: What is “civic tech”?
              </Link>
            </Text>
            <Text fontSize={"xl"}>
              The gist: Civic tech is using technology in a creative way to help
              better the lives of individuals in our communities, whether
              through person-to-person or person-to-government interactions.
            </Text>
          </Stack>
        </Box>
        <Box pb={8} mb={8}>
          <Stack>
            <Heading as="h2" size="md">
              How We Work
            </Heading>
            <Text fontSize={"xl"}>
              We host{" "}
              <Link href="https://www.meetup.com/Open-Austin/" isExternal>
                Community Action Nights (CANs) on the second and fourth
                Wednesday of each month
              </Link>{" "}
              to work on technology and design projects that positively impact
              public policy and our communities. We amplify the initiatives of
              other Austin-based civic organizations, and we collaborate with
              other chapters of the{" "}
              <Link href="https://brigade.codeforamerica.org/" isExternal>
                Code for America Brigade Network
              </Link>{" "}
              and the broader civic tech community via our{" "}
              <Link href="https://github.com/open-austin" isExternal>
                GitHub organization
              </Link>
              .
            </Text>
          </Stack>
        </Box>
        <Box pb={8} mb={8}>
          <Stack>
            <Heading as="h2" size="md">
              Open Austin Leadership
            </Heading>
            <Text fontSize={"xl"}>
              Here are our{" "}
              <Link
                href="https://docs.google.com/document/d/1hRG_yf0XWz4b-PwQ265R0TaIXtuuQ516N-kkBKDg1k8/edit#heading=h.gucmfp1zup8l"
                isExternal
              >
                {" "}
                bylaws{" "}
              </Link>{" "}
              and{" "}
              <Link
                href="https://drive.google.com/drive/folders/163C2dsaa-dYH45gUfy9t3Uql5XUfTc4A"
                isExternal
              >
                board meeting minutes{" "}
              </Link>
              . Do you have more questions that this site does not answer? Email{" "}
              <Link href="mailto:info@open-austin.org" isExternal>
                info@open-austin.org
              </Link>
              .
            </Text>
            <Box pb={8} mb={8}>
              <Text fontSize={"xl"}>Our board consists of:</Text>
              <UnorderedList fontSize={"xl"}>
                <ListItem>
                  <Link href="https://www.meetup.com/Open-Austin/" isExternal>
                    Liani Lye
                  </Link>{" "}
                  – President
                </ListItem>
                <ListItem>Victoria O'Dell – Vice President</ListItem>
                <ListItem>
                  <Link href="https://www.meetup.com/Open-Austin/" isExternal>
                    Matt Carey
                  </Link>{" "}
                  – Treasurer
                </ListItem>
                <ListItem>
                  <Link href="https://www.meetup.com/Open-Austin/" isExternal>
                    Steve Harrison
                  </Link>{" "}
                  – Secretary
                </ListItem>
                <ListItem>Aaron Renaud – At-large Member</ListItem>
              </UnorderedList>
              <Text fontSize={"xl"}>Our advisory council consists of:</Text>
              <UnorderedList fontSize={"xl"}>
                <ListItem>Mateo Clarke</ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;
