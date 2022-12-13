import TextBox from "../../components/TextBox";
import { Container, Stack } from "@chakra-ui/react";

const InterestsText = `
# Research Interests
### Distributed Systems for Large Scale Financial Applications
In the age of modern banking and the rise of fintech, the need for efficient high frequency transaction
processing and analysis is increasingly important. For most applications, the bottleneck of such systems 
is the ability of the backend to asynchronously store and process the incoming data stream across a 
distributed system while ensuring the integrity of the data.

I am interested in research that aims to improve the efficiency of such systems by leveraging specific
implementations of database systems and distributed systems to create a scalable, fault-tolerant, and 
highly accessible system.  
`


export default function InterestsMain() {
  return (
  <div>
    <Stack spacing={8}>
      <Container maxW='container.sm' marginTop="10">
        <TextBox text={InterestsText} />
      </Container>
    </Stack>
  </div>)
}