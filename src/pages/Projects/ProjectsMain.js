import { Container, Stack } from "@chakra-ui/react";

export default function ProjectsMain() {
  return (
  <div>
    <Stack spacing={8}>
      <Container maxW='container.sm' marginTop="10" h="60vh">
        {/* Link to /projects/online-markdown-editor */}
        <a href="/projects/online-markdown-editor">Online Markdown Editor</a>
      </Container>
    </Stack>
  </div>)
}