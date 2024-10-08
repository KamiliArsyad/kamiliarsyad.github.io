import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  chakra,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Card } from "./Card";
import { LineWithDot } from "./LineWithDot";
import { EmptyCard } from "./EmptyCard";

const milestones = [
  {
    id: 1,
    date: "March 2021 - May 2021",
    title: "Finance Analyst Intern @ Undisclosed IT Firm",
    description: `Generated efficient finance analytics report pipeline for a saving and loan cooperative client handling over Rp. 400 billion of 
    asset by utilizing Oracle SQL and Python's Pandas library. The main outcome was to efficiently collect millions of rows of data scattered 
    across multiple databases to create a Markov Chain-based transition matrix to assess the probability of default of the loans.`,
  },
  {
    id: 2,
    date: "May 2021 - August 2021",
    title: "Trainer @ Undisclosed IT Firm",
    description: `Trained the employees fundamentals of asynchronous programming and FastAPI, functional programming paradigm, and React.JS to assist the company in 
          transitioning its tech stack to a set of new one heavily involving FastAPI in its backend and ReactJS for its frontend.`,
  },
  {
    id: 3,
    date: "May 2023 - August 2023",
    title: "Research Intern @ A*Star Institute of Infocomm Research",
    description: `Optimized, pipelined, and parallelized network flow and 
    data transfer algorithms across distributed computer vision and mapping systems in C++ 
    by utilizing the latest papers and publications pertaining to the topic to achieve more 
    spread-out and accurate point cloud data within a third of the processing time.`,
  },
  {
    id: 4,
    date: "August 2022 - November 2023",
    title: "Teaching Assistant @ National University of Singapore",
    description: `Named to NUS SoC's Honour List of Student Tutors (AY22/23).

    Facilitated tutorial and lab sessions, graded assignments, and provided consultations for 8 to 15 students in CS1101S (Programming Methodology) 
    and CS2030S (Programming Methodology 2), imparting fundamental computer science concepts and functional programming principles in CS1101S, while delving into object-oriented design and advanced functional programming techniques in Java for CS2030S.
    I also taught 50 students on CS2100 (Computer Organization) as a tutor; guided students in understanding the low-level details of computer architecture, C, assembly language, and cache management.`,
  },
  {
    id: 5,
    date: `December 2023 - Present (${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })})`,
    title: "Software Engineer Intern @ ShopBack",
    description: `Develop and maintain the company's Business Process system and platform.`
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
      <Accordion width="100%" allowMultiple borderColor="transparent">
        <AccordionItem>
          <AccordionButton borderRadius="xl" _focus={{ boxShadow: "none" }}>
            <Box as="span" flex="1">
              <chakra.h3
                fontSize="4xl"
                fontWeight="bold"
                mb={18}
                textAlign="center"
              >
                Experiences
              </chakra.h3>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {[...milestones].reverse().map((milestone) => (
              <Flex key={milestone.id} mb="10px">
                {/* Desktop view(left card) */}
                {isDesktop && milestone.id % 2 === 0 && (
                  <>
                    <EmptyCard />
                    <LineWithDot />
                    <Card {...milestone} />
                  </>
                )}

                {/* Mobile view */}
                {isMobile && (
                  <>
                    <LineWithDot />
                    <Card {...milestone} />
                  </>
                )}

                {/* Desktop view(right card) */}
                {isDesktop && milestone.id % 2 !== 0 && (
                  <>
                    <Card {...milestone} />

                    <LineWithDot />
                    <EmptyCard />
                  </>
                )}
              </Flex>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  );
};

export default Milestones;
