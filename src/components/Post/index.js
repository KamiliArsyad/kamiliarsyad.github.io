import { Container, Divider, Heading, Stack } from "@chakra-ui/react";
import TextBox from "../TextBox";

export default function Post({ post }) {
  return (
    <Container
      maxW={{ base: "container.sm", md: "container.md", lg: "container.md" }}
      py={6}
    >
      <Stack>
        <Heading>{post.title}</Heading>
        <Divider />
        <TextBox text={post.body} />
      </Stack>
    </Container>
  );
}
