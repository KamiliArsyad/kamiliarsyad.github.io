// Drawer Item Object

import React, { ReactElement, useState } from "react";
import {
  Box,
  chakra,
  Flex,
  Image,
  Slide,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// Dictates what will be shown when the drawer item is hovered
interface DrawerItemPreview {
  details: any;
}

interface DrawerItemProps {
  title: string;
  tags: string[];
  image: string;
  navigation: any;
  onPress?: () => void;
  onHover?: () => void;
  // Hidden details that will be shown on hover
  preview?: DrawerItemPreview;
}

function DrawerItem(props: DrawerItemProps): ReactElement<DrawerItemProps> {
  const { title, tags, image, navigation, preview } = props;
  const [hovered, setHovered] = useState(false);
  const { bgBox, bgBoxHover, headingColor } = useColorModeValue(
    {
      bgBox: "white",
      bgBoxHover: "gray.50",
      headingColor: "gray.700",
    },
    {
      bgBox: "gray.900",
      bgBoxHover: "gray.700",
      headingColor: "white",
    }
  );

  const handleHover = (status: boolean) => {
    setHovered(status);
  };

  return (
    <>
      {/* 
        Slide is used to animate the preview box when the user hovers over the drawer item.
        The preview box will slide in from the bottom.
       */}
      <Slide direction="bottom" in={hovered} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {preview?.details}
        </Box>
      </Slide>

      <Flex
        maxW="xs"
        maxH="xs"
        mx="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        boxShadow="md"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        transition="0.2s ease-in-out"
        _hover={{
          bg: bgBoxHover,
          color: "white",
          boxShadow: "lg"
        }}
        rounded="lg"
        overflow="hidden"
        minW="xs"
      >
        <Box w={1 / 3}>
          <Image src={image} alt={title} h="full" w="full" objectFit="cover" />
        </Box>
        <Stack
          w={2 / 3}
          spacing={0}
          p={{
            base: 1,
            md: 2,
          }}
        >
          <chakra.h2
            fontSize="x-small"
            fontWeight="bold"
            color="gray.800"
            _dark={{
              color: "white",
            }}
          >
            {title}
          </chakra.h2>
          <Stack direction="column" spacing={1} mt={2}>
            <Stack direction="row" spacing={3} mt={4}>
              {tags.map((tag, index) => (
                <chakra.span
                  key={index}
                  fontSize="xx-small"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                  px={2}
                  py={1}
                  bg="gray.200"
                  rounded="lg"
                >
                  {tag}
                </chakra.span>
              ))}
            </Stack>
            <chakra.button
              px={2}
              py={1}
              bg="gray.100"
              fontSize="xx-small"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              _hover={{
                bg: "gray.200",
              }}
              onClick={navigation}
            >
              Read Post
            </chakra.button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

export { DrawerItem, DrawerItemProps };
