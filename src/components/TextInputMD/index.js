// Components it depends on: TextBox

import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import TextBox from "../TextBox";
import { useState } from "react";

export default function TextInputMD() {
  let [text, setText] = useState("## Hello!");

  const handleChange = (e) => setText(e.target.value);

  return (
    <Stack w="100%" h="90%" spacing={2} mx="auto" px={2}>
      <Heading fontSize="3xl">Online Markdown Editor</Heading>
      <Divider />
      <Flex
        align={"center"}
        flex="1"
        w="100%"
        spacing={8}
        mx="auto"
        marginTop="5vh"
        px={6}
      >
        <Box h="100%" w="50%" flex="1">
          <Textarea
            placeholder={text}
            resize="none"
            h="70vh"
            onChange={handleChange}
          />
        </Box>
        <Box w="2%" />
        <Box
          h="100%"
          flex="1"
          w="50%"
          overflowY="scroll"
          border="1px"
          borderColor="gray.200"
          px={3}
        >
          <TextBox text={text} />
        </Box>
      </Flex>
    </Stack>
  );
}
