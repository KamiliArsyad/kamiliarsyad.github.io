import TextBox from "../components/TextBox";
import { Container, Stack } from "@chakra-ui/react";


// Markdown
const LANDING_TEXT = `
# Hi! I'm Arsyad Kamili
- Undergraduate student at the National University of Singapore
- Majoring in Computer Science, Specialising in Networks and Distributed Systems, 
Algorithms and Theory, and Database Systems
- Minoring in Quantitative Finance and Urban Studies
`;


export default function Landing() {
  return (
    <div>
      <Stack spacing={8}>
        <Container maxW='container.sm' marginTop="10">
          <TextBox text={LANDING_TEXT} />
        </Container>
      </Stack>
    </div>
  );
}