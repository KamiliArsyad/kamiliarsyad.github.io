import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Helmet } from "react-helmet";

// List of projects
const projects = [
  {
    title: "Online Markdown Editor",
    description:
      "An online markdown editor that allows you to write and preview markdown in real-time.",
    url: "/projects/online-markdown-editor",
    tags: ["React", "Chakra UI", "React-Markdown", "Web Development"],
  },
  {
    title: "Point Cloud Surface Reconstruction",
    description:
      "Parameterized 3D point cloud surface reconstruction and visualizer with intuitive GUI",
    url: "https://github.com/KamiliArsyad/point_cloud_surface_reconstruction",
    tags: ["C++", "CGAL", "Parallel Computing", "3D Visualization", "Pangolin"],
  },
  {
    title: "Remote ORB-SLAM3",
    description:
      "ORB-SLAM3 with separate remote asynchronous feature collection and mapping",
    url: "https://github.com/KamiliArsyad/ORB_SLAM3",
    tags: [
      "C++",
      "ORB-SLAM3",
      "Computer Vision",
      "Parallel Computing",
      "Socket Programming",
      "ZeroMQ",
      "Low-latency Software",
    ],
  },
  {
    title: "Archblog Backend",
    description:
      "Backend for my personal blog, Archblog, built with Express and MongoDB Atlas to serve RESTful API. The project is made to horizontally scale (for my blog's features) and to be easily maintainable.",
    url: "https://github.com/KamiliArsyad/_archblog-backend",
    tags: ["Node.js", "Express", "MongoDB", "RESTful API", "Web Development"],
  },
];

export const ProjectCard = ({ title, description, url, tags, date }) => {
  const isExternal = url.startsWith("http");
  const formattedDate = date
    ? new Date(date.split("-").reverse().join("-")).toLocaleDateString(
        "en-US",
        {
          month: "long",
          year: "numeric",
        }
      )
    : null;

  return (
    <Card
      maxW="md"
      boxShadow="md"
      rounded="md"
      transition="all 0.2s ease-in-out"
      _hover={{ boxShadow: "xl" }}
    >
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          {formattedDate && (
            <>
              <Text fontSize="sm" color="gray.500">
                {formattedDate}
              </Text>
              <Divider />
            </>
          )}
          <Text>{description}</Text>
          <Divider />
          <Wrap>
            {tags.map((tag, index) => (
              <Tag key={index} colorScheme="teal">
                {tag}
              </Tag>
            ))}
          </Wrap>
        </Stack>
      </CardBody>
      <CardFooter>
        <Link href={url} isExternal={isExternal}>
          <Button
            rightIcon={isExternal ? <ExternalLinkIcon /> : null}
            colorScheme="teal"
          >
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default function ProjectsMain() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="A list of projects I'm working on" />
      </Helmet>
      <Container maxW="container.lg" py={12}>
        <Wrap justify="center" spacing={4}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
              tags={project.tags}
            />
          ))}
        </Wrap>
      </Container>
    </>
  );
}
