import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import TextInputMD from "../components/TextInputMD";

// Blank page for development
export default function Dev() {
  return (
    <Flex h="80vh" align={"center"} flex="1" w="100%" mx="auto" px={6}>
      <TextInputMD />
    </Flex>
  );
}
