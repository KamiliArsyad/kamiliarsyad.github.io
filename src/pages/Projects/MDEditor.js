import { Flex, Heading } from "@chakra-ui/react";
import TextInputMD from "../../components/TextInputMD";
import { useState } from "react";

export default function MDEditor() {
  let [text, setText] = useState();

  const handleChange = (e) => setText(e.target.value);

  return (
    <Flex h="100%" align="normal" w="100%" mx="auto" px={6} pt={6} direction="column">
      <Heading as="h1" size="lg" mb={4} textAlign="center">Online Markdown Editor</Heading>
      <TextInputMD text={text} handleChange={handleChange} />
    </Flex>
  );
}