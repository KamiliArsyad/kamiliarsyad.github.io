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
  onPress: () => void;
  onHover?: () => void;
  // Hidden details that will be shown on hover
  preview?: DrawerItemPreview;
}

function DrawerItem(props: DrawerItemProps): ReactElement<DrawerItemProps> {
  const { title, tags, image, navigation, onPress, preview } = props;
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

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <>
      <Slide direction="bottom" in={hovered} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          The quick brown fox jumps over the lazy dog
          The quick brown fox jumps over the lazy dog
        </Box>
      </Slide>
      <Flex
        maxW="md"
        maxH="sm"
        mx="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        _hover={{
          bg: bgBoxHover,
          color: "white",
          boxShadow: "dark-lg",
        }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        minW="xs"
      >
        <Box w={1 / 3}>
          <Image src={image} alt={title} h="full" w="full" objectFit="cover" />
        </Box>
        <Box
          w={2 / 3}
          p={{
            base: 4,
            md: 4,
          }}
        >
          <chakra.h2
            fontSize="md"
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
                  fontSize="xs"
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
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              _hover={{
                bg: "gray.200",
              }}
              onClick={navigation}
            >
              Read
            </chakra.button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

export default DrawerItem;
