import {
  Box,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <Heading as="h1" size="lg">
        About Open Austin
      </Heading>
      <Box>
        <Stack>
          <Heading as="h2" size="md">
            What is Open Austin?
          </Heading>
          <Text fontSize="sm">
            We believe that 21st-century government should work for the people,
            by the people.
          </Text>
          <Text fontSize="sm">
            Open Austin is a volunteer civic technology community consisting of
            developers, designers, data nerds, policy wonks, resident activists,
            and countless others. We use technology creatively to address local
            civic and social challenges, and improve all our neighbors’ quality
            of life.
          </Text>
          <Text fontSize="sm">
            We are affiliated with{" "}
            <Link href="https://brigade.codeforamerica.org/" isExternal>
              Code for America’s Brigade Network.
            </Link>
          </Text>
        </Stack>
      </Box>
      <Box>
        <Stack>
          <Heading as="h2" size="md">
            What is Civic Technology?
          </Heading>
          <Text fontSize="sm">
            The definition of civic tech can be quite unclear sometimes – here
            is a great starting point:{" "}
            <Link
              href="https://medium.com/civic-makers/civictech-primer-what-is-civic-tech-7ea788e766d3#.lr9joeu39"
              isExternal
            >
              #CivicTech Primer: What is “civic tech”?
            </Link>
          </Text>
          <Text fontSize="sm">
            The gist: Civic tech is using technology in a creative way to help
            better the lives of individuals in our communities, whether through
            person-to-person or person-to-government interactions.
          </Text>
        </Stack>
      </Box>
      <Box>
        <Stack>
          <Heading as="h2" size="md">
            How We Work
          </Heading>
          <Text fontSize="sm">
            We host{" "}
            <Link href="https://www.meetup.com/Open-Austin/" isExternal>
              Community Action Nights (CANs) on the second and fourth Wednesday
              of each month
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
      <Box>
        <Stack>
          <Heading as="h2" size="md">
            Open Austin Leadership
          </Heading>
          <Text fontSize="sm">
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
          <Text fontSize="sm">
            Our board consists of:
            <UnorderedList>
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
          </Text>
          <Text fontSize="sm">
            Our advisory council consists of:
            <UnorderedList>
              <ListItem>Mateo Clarke</ListItem>
            </UnorderedList>
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default About;
