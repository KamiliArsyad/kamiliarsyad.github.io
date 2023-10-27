import {
  Box,
  Button,
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
import { DrawerItem } from "../components/DrawerItem";
import { BlogDrawer } from "../components/BlogDrawer";
import { useState } from "react";
import Post from "../components/Post";

// Blank page for development
export default function Dev() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    // <Flex h="80vh" align={"center"} flex="1" w="100%" mx="auto" px={6}>
    //   <TextInputMD />
    // </Flex>
    <>
      {/* <DrawerItem
        title={`Feature Encoding and Overview of The "Binary Robust Independent Elementary Features (BRIEF)" Paper`}
        tags={["Test", "Test", "Test"]}
        image="https://bit.ly/2Z4KKcF"
        navigation={["Home", "Home", "Home"]}
        preview={{ details: "This is a preview of the article." }}
      /> */}
      <Button onClick={toggleDrawer}>Open Drawer</Button>
      <Flex direction="row">
        <Post post={{ title: "Test", body: "Test" }} />
        <Stack
          w={isOpen ? 1 / 4 : 0}
          animation="slideInRight"
          overflow="hidden"
          transition="width 0.3s ease-in-out"
          minH="xl"
        >
          <BlogDrawer
            isOpen={isOpen}
            content={[
              {
                title: `Feature Encoding and Overview of The "Binary Robust Independent Elementary Features (BRIEF)" Paper`,
                tags: ["Test", "Test", "Test"],
                image: "https://bit.ly/2Z4KKcF",
                navigation: ["Home", "Home", "Home"],
                preview: { details: "This is a preview of the article." },
              },
              {
                title: `Feature Encoding and Overview of The "Binary Robust Independent Elementary Features (BRIEF)" Paper`,
                tags: ["Test", "Test", "Test"],
                image: "https://bit.ly/2Z4KKcF",
                navigation: ["Home", "Home", "Home"],
                preview: { details: "This is a preview of the article." },
              },
            ]}
          />
        </Stack>
      </Flex>
    </>
  );
}
