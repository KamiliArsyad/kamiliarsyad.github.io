import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function Thumbnail({ postListObject, onClick }) {
  const { bgBox, bgBoxHover, headingColor } = useColorModeValue(
    {
      bgBox: "white",
      bgBoxHover: "gray.100",
      headingColor: "gray.700",
    },
    {
      bgBox: "gray.900",
      bgBoxHover: "gray.700",
      headingColor: "white",
    }
  );

  try {
    var { title, author, summary, categories, timestamp, imageURL, wordCount } =
      postListObject;
  } catch (error) {
    console.error(error);
    return null;
  }

  const { name, picture_url: avatar } = author;

  const date = new Date(timestamp).toLocaleDateString();
  const minutesToRead = Math.floor(wordCount / 200);

  return (
    <Center py={6}>
      <Box
        maxW={"350px"}
        w={"full"}
        bg={bgBox}
        boxShadow="lg"
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        _hover={{
          bg: bgBoxHover,
          color: "white",
          boxShadow: "dark-lg",
        }}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          overflow="hidden"
        >
          <Image src={imageURL} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"small"}
            letterSpacing={1.1}
          >
            {categories}
          </Text>
          <Box className="cursor-pointer" onClick={onClick}>
            <Heading color={headingColor} fontSize={"xl"} fontFamily={"body"}>
              {title}
            </Heading>
            <Text color={"gray.500"}>{summary}</Text>
          </Box>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={avatar} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text color={"gray.900"} fontWeight={600}>
              {name}
            </Text>
            <Text color={"gray.500"}>
              {" "}
              {date} · {minutesToRead} min read{" "}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
