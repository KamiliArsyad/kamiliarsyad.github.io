import TextBox from "../components/TextBox";
import {
  Box,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Milestones from "../components/Timeline";
import PageSpan from "../components/PageSpan";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Markdown
const LANDING_TEXT = `
Undergraduate student at the National University of Singapore
- Majoring in Computer Science; specializing in Parallel Computing,
Algorithms, and Database Systems
- Minoring in Quantitative Finance and Urban Studies
`;

const LINKS = `
[**LinkedIn**](https://www.linkedin.com/in/arsyad-kamili/)

[**GitHub**](https://github.com/KamiliArsyad)

[**YouTube**](https://youtube.com/c/ArsyadKamili)
`;

export default function Landing() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const navigate = useNavigate();

  const HeadComponent = ({ children }) => (
    <Heading size={isDesktop ? "md" : "xs"} color="white">
      {children}
    </Heading>
  );

  return (
    <>
      <Helmet>
        <title>Arsyad Kamili</title>
        <meta name="description" content="Arsyad Kamili's Personal Website and Portfolio" />
      </Helmet>
      <Stack align="center" spacing="0">
        <PageSpan
          heading="Hi! I'm Arsyad Kamili"
          backgroundColor="black"
          brief={
            <Stack spacing="2">
              <HeadComponent>
                Undergraduate Computer Science student at the National
                University of Singapore
              </HeadComponent>
              <HeadComponent>
                - Specializing in Database Systems, Parallel Computing,
                Algorithms
              </HeadComponent>
              <HeadComponent>
                - Minoring in Quantitative Finance and in Urban Studies
              </HeadComponent>
            </Stack>
          }
          image="https://avatars.githubusercontent.com/u/22293969?v=4"
          isDesktop={isDesktop}
          redirect={{
            relativepath: "https://github.com/kamiliarsyad",
            title: "My Works",
          }}
        />
        <Stack
          direction={isDesktop ? "row" : "column"}
          spacing="3"
          width="100%"
          padding="5"
        >
          <Milestones />
          <Container
            maxW="container.sm"
            maxH="48"
            marginTop="10"
            width={isDesktop ? "30%" : "100%"}
            backgroundColor="white"
            borderRadius="xl"
            boxShadow="lg"
            padding="3"
            align="center"
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            <Heading as="h3">Links</Heading>
            <Divider marginTop="3" marginBottom="3" />
            <TextBox text={LINKS} />
          </Container>
        </Stack>
      </Stack>
    </>
  );
}
