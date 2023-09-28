import TextBox from "../components/TextBox";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Milestones from "../components/Timeline";
import PageSpan from "../components/PageSpan";

// Markdown
const LANDING_TEXT = `
Undergraduate student at the National University of Singapore
- Majoring in Computer Science; specializing in Parallel Computing,
Algorithms, and Database Systems
- Minoring in Quantitative Finance and Urban Studies
`;

const LINKS = `
## Links
- [**LinkedIn**](https://www.linkedin.com/in/arsyad-kamili/)
- [**GitHub**](https://github.com/KamiliArsyad)
- [**YouTube**](https://youtube.com/c/ArsyadKamili)
`;

export default function Landing() {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Stack align="center">
      <PageSpan
        heading="Hi! I'm Arsyad Kamili"
        backgroundColor="black"
        brief={
          <Stack spacing="2">
            <Heading size="md" color="white">
            Undergraduate Computer Science student at the National University of Singapore
            </Heading>
            <Heading size="md" color="white">
            - Specializing in Parallel Computing, Algorithms, and Database Systems
            </Heading>
            <Heading size="md" color="white">
            - Minoring in Quantitative Finance and in Urban Studies
            </Heading>
          </Stack>
        }
        image="https://avatars.githubusercontent.com/u/22293969?v=4"
        isDesktop={isDesktop}
        redirect={{ relativepath: "https://github.com/kamiliarsyad", title: "My Work" }}
        popupContent={{ title: "What I do", content: "Popup content" }}
      />
      <Milestones />
      <Container maxW="container.sm" marginTop="10">
        <TextBox text={LINKS} />
      </Container>
    </Stack>
  );
}
