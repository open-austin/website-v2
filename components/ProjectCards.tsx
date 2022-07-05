import { default as projectData } from "../data/project_data";
import { Box, Badge, Image, Flex, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

type Projects = Array<{
  title: string;
  description: string;
  access_at?: string | null;
  project_at?: string | undefined | null;
  type: string;
  status: string;
  categories: Array<string>;
  contact: string | Array<string>;
  cfa_stage?: string;
  date: string;
  thumb?: string | null;
  stack?: Array<string>;
  published?: boolean;
  screenshot?: string;
  featured?: boolean;
  archived?: boolean;
  skipSize: number;
}>;

interface Props {
  currentCategory: Set<string>;
  currentStatus: Set<string>;
}

const ProjectCards = ({ currentCategory, currentStatus }: Props) => {
  const [projects, setProjects] = useState<Projects>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      setProjects(projectData);
      isMounted.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      // Handles multiselectors
      if (currentCategory.size > 0 || currentStatus.size > 0) {
        const searchedProjects = projectData.filter((p) => {
          let categories = new Set([...p.categories]);
          let superSet = new Set([...categories, ...currentCategory]);
          //   Selecting only for categories
          if (currentCategory.size > 0 && currentStatus.size === 0) {
            if (superSet.size < categories.size + currentCategory.size) {
              return p;
            }
          }
          //   Selecting only for statuses
          else if (currentStatus.size > 0 && currentCategory.size === 0) {
            if (currentStatus.has(p?.status)) return p;
          }
          //   Selecting for both categories and statuses
          else if (currentCategory.size > 0 && currentStatus.size > 0) {
            if (superSet.size < categories.size + currentCategory.size) {
              if (currentStatus.has(p?.status)) return p;
            }
          }
        });
        setProjects(searchedProjects);
      }
      // Handles clearing multiselectors
      else {
        setProjects(projectData);
      }
    }
  }, [currentCategory, currentStatus]);

  return (
    <Flex
      justifyContent="space-between"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="start"
      gap="3"
      w="50%"
      m="auto"
    >
      {projects.map((data) => (
        <Box
          maxW="45%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          key={data.title}
        >
          <Image
            src={`/assets/images/projects/screenshots/${data.screenshot}`}
            fallbackSrc={"/assets/logo/OpenAustin_Symbol_FullColor.jpg"}
            alt=""
            objectFit="cover"
          />
          <Box p="6">
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {data.title}
              </Box>
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {data.status}
                </Badge>
              </Box>
            </Flex>
            <Box>{data.description}</Box>
            <Flex flexDirection="row" justifyContent="start">
              <Text>Links: </Text>
              <Link
                href={`${data.project_at}`}
                color="red"
                paddingLeft="1%"
                isExternal
              >
                Github
              </Link>
              <Text>, </Text>
              <Link
                href={`${data.access_at}`}
                color="red"
                paddingLeft="1%"
                isExternal
              >
                Project
              </Link>
            </Flex>
            {data.stack && (
              <Box>
                Technologies:{" "}
                {data.stack?.map((tech, i) => {
                  if (i === data.stack.length - 1) {
                    return tech;
                  } else {
                    return `${tech}, `;
                  }
                })}
              </Box>
            )}
            <Box>
              Categories:{" "}
              {data.categories?.map((category, i) => {
                if (i === data.categories.length - 1) {
                  return category;
                } else {
                  return `${category}, `;
                }
              })}
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default ProjectCards;
