import TextBox from "../components/TextBox";
import { Container, Divider, Stack } from "@chakra-ui/react";
import Milestones from "../components/Timeline";

// Markdown
const LANDING_TEXT = `
![github profile pic](https://avatars.githubusercontent.com/u/22293969?v=4)
# Hi! I'm Arsyad Kamili
- Undergraduate student at the National University of Singapore
- Majoring in Computer Science, Specialising in Networks and Distributed Systems, 
Algorithms and Theory, and Database Systems
- Minoring in Quantitative Finance and Urban Studies
`;

const LINKS = `
## Links
- [**LinkedIn**](https://www.linkedin.com/in/arsyad-kamili/)
- [**GitHub**](https://github.com/KamiliArsyad)
- [**YouTube**](https://youtube.com/c/ArsyadKamili)
`

export default function Landing() {
  return (
    <div>
      <Stack spacing={5} align="center">
        <Container maxW="container.sm" marginTop="10">
          <TextBox text={LANDING_TEXT} />
        </Container>
        <Container maxW="container.xl">
          <Divider colorScheme="black" borderWidth="3px" borderRadius='5' />
        </Container>
        <Milestones />
        <Container maxW="container.xl">
          <Divider colorScheme="black" borderWidth="3px" borderRadius='5' />
        </Container>
        <Container maxW="container.sm" marginTop="10">
          <TextBox text={LINKS} />
        </Container>
      </Stack>
    </div>
  );
}
