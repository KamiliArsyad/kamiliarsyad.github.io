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
    title: "CV ORB-ZMQ Stream",
    description:
      "Simple CUDA-enabled high performance one-to-one network stream for extracting and streaming ORB features from an edge device to a server",
    url: "https://github.com/KamiliArsyad/cvORB-zmq-stream",
    tags: [
      "C++",
      "CUDA",
      "ZeroMQ",
      "Computer Vision",
      "Parallel Computing",
      "High-troughput Software Development",
    ],
  },
  {
    title: "DigitalIT",
    description:
      "Empowering small business owners to digitalize their businesses",
    url: "https://github.com/florentianayuwono/DigitalIT",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Web Development"],
  },
];

const ProjectCard = ({ title, description, url, tags }) => {
  const isExternal = url.startsWith("http");

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
  );
}
