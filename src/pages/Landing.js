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
I have extensive experience in both centralized and distributed database design, 
have optimized and hacked through RDBMS source codes (SQLite, PostgreSQL, MySQL) for personal uses and my research,
and is currently doing a research in [NUS' FOCS Lab](https://focs-lab.comp.nus.edu.sg) under Prof. Umang Mathur to create
novel methods for automated testing of concurrent database transaction execution.
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
                - Specializing in Database Systems (mostly), Parallel Computing, Distributed Systems, and Algorithms.
              </HeadComponent>
              <HeadComponent>
                - Minoring in Quantitative Finance and in Urban Studies
              </HeadComponent>
              <TextBox text={LANDING_TEXT} color="white" />
            </Stack>
          }
          image="https://raw.githubusercontent.com/KamiliArsyad/posts/main/Profile%20Pic.jpg"
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
      <a href="/blog-new" style={{ display: "none" }}></a>
      <a href="/projects/instant-cell" style={{ display: "none" }}></a>
    </>
  );
}
