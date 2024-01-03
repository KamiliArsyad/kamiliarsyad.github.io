import TextBox from "../../components/TextBox";
import { Container, Stack } from "@chakra-ui/react";

const FULL_TEXT = `
# Courses Taken
*Here is a list of courses I've taken so far in NUS sorted on each subsection by ascending level of complexity. Do read the note at the bottom first!*

## Current Courses
|Course Code|Title|
|--|--|
|[CS2103T](https://nusmods.com/courses/CS2103T/software-engineering)|Software Engineering |
|[CS4234](https://nusmods.com/courses/CS4234/optimisation-algorithms)|Optimisation Algorithms|
|[CS3210](https://nusmods.com/courses/CS3210/parallel-computing)|Parallel Computing|
|[GE3236](https://nusmods.com/courses/GE3236/transport-and-communications)|Transport and Communications|
|[CS2101](https://nusmods.com/courses/CS2101/effective-communication-for-computing-professionals)|Effective Communication for Computing Professionals|

## Computer Science and its Math Courses
|Course Code|Topic|
|--|--|
|[CS1101S](https://nusmods.com/courses/CS1101S/programming-methodology)|*Programming Methodology* ⭐|
|[CS1231S](https://nusmods.com/courses/CS1231S/discrete-structures)|Discrete Structures|
|[CS2030S](https://nusmods.com/courses/CS2030S/programming-methodology-ii) | *Programming Methodology II* ⭐|
|[CS2040S](https://nusmods.com/courses/CS2040S/data-structures-and-algorithms) | Data Structures and Algorithms |
|[CS2100](https://nusmods.com/courses/CS2100/computer-organisation)|*Computer Organization*⭐|
|[CS2102](https://nusmods.com/courses/CS2102/database-systems)|**Database Systems**|
|[CS2105](https://nusmods.com/courses/CS2105/introduction-to-computer-networks)|Computer Networks|
|[CS2109S](https://nusmods.com/courses/CS2109S/introduction-to-ai-and-machine-learning)|**AI and Machine Learning**|
|[CS2106](https://nusmods.com/courses/CS2106/introduction-to-operating-systems)|Operating Systems|
|[CS3230](https://nusmods.com/courses/CS3230/design-and-analysis-of-algorithms)|**Design and Analysis of Algorithm** ⭐|
|[CS3223](https://nusmods.com/courses/CS3223/database-systems-implementation)|**Database Systems Implementation**⭐|
|[CS4225](https://nusmods.com/courses/CS4225/big-data-systems-for-data-science)|**Big Data Systems for Data Science**⭐|

## Math, Applied Math, and other STEM Courses
|Course Code|Title|
|--|--|
|MA1521|Calculus for Computing|
|[QF1100](https://nusmods.com/courses/QF1100/introduction-to-quantitative-finance)|**Introduction to Quantitative Finance** ⭐|
|LSM1301|General Biology ⭐|
|MA2001|Linear Algebra I|
|ST2334|Probability and Statistics|
## Social Science
|Course Code|Title|
|--|--|
|GEC1030|**Metropolis: The City in World's History**⭐⭐|
|GESS1014|Islam and Contemporary Malay Society ⭐|
|[RE1701](https://nusmods.com/courses/RE1701/urban-land-use-and-development)|Urban Land Use and Development|
|[GE3204](https://nusmods.com/courses/GE3204/cities-and-regions-planning-for-change)|**Cities and Regions: Planning for Change**⭐⭐|
|||

## non-relevant
A list of courses that I deemed irrelevant but I have taken anyway
|Course Code| Title |
|--|--|
|IS1103|Ethics in Computing|
|GEA1000|Quantitative Reasoning with Data|


## Note
- Courses written in **bold** means they point out specific areas of expertise
- Courses written in *italic* means I have taught or am teaching the course
- Courses labelled ⭐ are courses where I did well and I am particularly confident in
- Courses labelled ⭐⭐ are courses where I did very well and I am particularly confident in
- Some courses have [links](/) because I think the description might be quite important
- These labels, however, might not necessarily reflect my grades :)
`;

export default function AcademicsMain() {
  return (
    <Stack spacing={8}>
      <Container
        maxW="container.md"
        marginTop="10"
        marginBottom="10"
        bg="white"
        boxShadow="xl"
        borderRadius="xl"
        padding="5"
        align="center"
      >
        <TextBox text={FULL_TEXT} />
      </Container>
    </Stack>
  );
}
