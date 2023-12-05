import { Flex } from "@chakra-ui/react";
import TextInputMD from "../../components/TextInputMD";

export default function MDEditor() {
  return (
    <Flex h="100%" align="normal" w="100%" mx="auto" px={6} pt={6}>
      <TextInputMD />
    </Flex>
  );
}