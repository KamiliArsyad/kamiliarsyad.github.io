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
  useBreakpointValue,
} from "@chakra-ui/react";
import TextInputMD from "../components/TextInputMD";
import DrawerItem from "../components/DrawerItem";

// Blank page for development
export default function Dev() {
  return (
    // <Flex h="80vh" align={"center"} flex="1" w="100%" mx="auto" px={6}>
    //   <TextInputMD />
    // </Flex>
    <DrawerItem
      title={`Feature Encoding and Overview of The "Binary Robust Independent Elementary Features (BRIEF)" Paper`}
      tags={["Test", "Test", "Test"]}
      image="https://bit.ly/2Z4KKcF"
      navigation={["Home", "Home", "Home"]}
      preview={{details: "This is a preview of the article."}}
    />
  );
}
