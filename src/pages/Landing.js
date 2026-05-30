import TextBox from "../components/TextBox";
import {
  Container,
  Divider,
  Heading,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Milestones from "../components/Timeline";
import PageSpan from "../components/PageSpan";
import { Helmet } from "react-helmet";

const LANDING_TEXT = `
I design and build database systems and data/AI infrastructure. At TikTok (ByteDance) I work on large-scale OLAP query optimization, data lineage, and LLM-powered data tooling for the Live Data Platform.

I have extensive experience in centralized and distributed database design, and have optimized and hacked through RDBMS source code (SQLite, PostgreSQL, MySQL) for my own use and my research at [NUS' FOCS Lab](https://focs-lab.comp.nus.edu.sg) under Prof. Umang Mathur — building novel methods for automated testing of concurrent database transactions. (I found multiple concurrency bugs in MySQL!)

I mostly write Go and C++ these days — see [SmolDB](https://github.com/KamiliArsyad/smoldb), my from-scratch concurrent RDBMS.
`;

const LINKS = `
[**LinkedIn**](https://www.linkedin.com/in/arsyad-kamili/)

[**GitHub**](https://github.com/KamiliArsyad)

[**YouTube**](https://youtube.com/c/ArsyadKamili)
`;

function HeadComponent({ children, isDesktop }) {
  return (
    <Heading size={isDesktop ? "md" : "xs"} color="white">
      {children}
    </Heading>
  );
}

export default function Landing() {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Helmet>
        <title>Arsyad Kamili</title>
        <meta
          name="description"
          content="Arsyad Kamili's Personal Website and Portfolio"
        />
      </Helmet>
      <Stack align="center" spacing={0}>
        <PageSpan
          heading="Hi! I'm Arsyad Kamili"
          backgroundColor="black"
          brief={
            <Stack spacing={2}>
              <HeadComponent isDesktop={isDesktop}>
                Backend Engineer at TikTok (ByteDance), Singapore
              </HeadComponent>
              <HeadComponent isDesktop={isDesktop}>
                - Computer Science, National University of Singapore
              </HeadComponent>
              <HeadComponent isDesktop={isDesktop}>
                - Database Systems · Distributed Systems · Parallel Computing · Algorithms
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
          spacing={3}
          w="100%"
          p={5}
        >
          <Milestones />
          <Container
            maxW="container.sm"
            maxH="48"
            mt={10}
            w={isDesktop ? "30%" : "100%"}
            bg="white"
            borderRadius="xl"
            boxShadow="lg"
            p={3}
            textAlign="center"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Heading as="h3">Links</Heading>
            <Divider my={3} />
            <TextBox text={LINKS} />
          </Container>
        </Stack>
      </Stack>
      <a href="/blog-new" style={{ display: "none" }} />
      <a href="/projects/instant-cell" style={{ display: "none" }} />
    </>
  );
}
