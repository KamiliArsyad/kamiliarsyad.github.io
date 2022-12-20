import TextBox from "../../components/TextBox";
import { Container, Stack } from "@chakra-ui/react";

const FULL_TEXT = `
# Modules Taken
*Here is a list of modules I've taken so far in NUS sorted on each subsection by ascending level. Do read the note at the bottom first!*
## Computer Science and its Maths

|Module Code| Title|
|--|--|
|[CS1101S](https://nusmods.com/modules/CS1101S/programming-methodology)|Programming Methodology ⭐|
|[CS1231S](https://nusmods.com/modules/CS1231S/discrete-structures)|Discrete Structures|
| [CS2030S](https://nusmods.com/modules/CS2030S/programming-methodology-ii) | Programming Methodology II ⭐|
| [CS2040S](https://nusmods.com/modules/CS2040S/data-structures-and-algorithms) | Data Structures and Algorithms |
|[CS2100](https://nusmods.com/modules/CS2100/computer-organisation)|Computer Organization⭐|
|[CS2102](https://nusmods.com/modules/CS2102/database-systems)|**Database Systems**|
|[CS3230](https://nusmods.com/modules/CS3230/design-and-analysis-of-algorithms)|**Design and Analysis of Algorithm** ⭐|

## Math, Applied Math, and other STEM
|Module Code|Title
|--|--|
|MA1521|Calculus for Computing|
|[QF1100](https://nusmods.com/modules/QF1100/introduction-to-quantitative-finance)|**Introduction to Quantitative Finance** ⭐|
|LSM1301|General Biology ⭐|
|MA2001|Linear Algebra I|
|ST2334|Probability and Statistics|
## Social Science
|Module Code|Title|
|--|--|
|GEC1030|**Metropolis: The City in World's History**⭐⭐|
|GESS1014|Islam and Contemporary Malay Society ⭐|
|[GE3204](https://nusmods.com/modules/GE3204/cities-and-regions-planning-for-change)|**Cities and Regions: Planning for Change**⭐⭐|
|||

## non-relevant
A list of modules that I deemed irrelevant but I have taken anyway
|Module Code| Title |
|--|--|
|IS1103|Ethics in Computing|
|GEA1000|Quantitative Reasoning with Data|


## Note
- Modules written in **bold** means they point out specific areas of expertise
- Modules written in *italic* means I have taught or am teaching the module
- Modules labelled ⭐ are modules where I did well and I am particularly confident in
- Modules labelled ⭐⭐ are modules where I did very well and I am particularly confident in
- Some modules have [links](/) because I think the description might be quite important
- The labels, however, might not necessarily reflect my grades :)
`;

export default function AcademicsMain() {
  return (
    <div>
      <Stack spacing={8}>
        <Container maxW='container.sm' marginTop="10" marginBottom="10">
          <TextBox text={FULL_TEXT} />
        </Container>
      </Stack>
    </div>
  );
}