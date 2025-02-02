import {
  Box,
  Center,
  chakra,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function Thumbnail({ postListObject, onClick }) {
  const {
    title,
    author,
    summary,
    categories,
    timestamp,
    imageURL,
    wordCount,
    viewCount,
  } = postListObject;

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

  const { name, picture_url: avatar } = author;
  const date = new Date(timestamp).toLocaleDateString();
  const minutesToRead = Math.floor(wordCount / 200);
  const tags = Array.isArray(categories) ? categories : [categories];
  const mainCategory = tags[0];

  return (
    <Center py={6}>
      <Box
        maxW="380px"
        w="full"
        bg={bgBox}
        boxShadow="lg"
        rounded="md"
        p={6}
        overflow="hidden"
        transition="all 0.2s ease-in-out"
        _hover={{
          bg: bgBoxHover,
          color: "white",
          boxShadow: "dark-lg",
        }}
      >
        <Box
          h="210px"
          bg="gray.100"
          mt={-6}
          mx={-6}
          mb={6}
          pos="relative"
          overflow="hidden"
        >
          <Image
            src={imageURL}
            alt={title}
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
        <Stack>
          <Text
            color="green.500"
            textTransform="uppercase"
            fontWeight="800"
            fontSize="sm"
            letterSpacing="1.1px"
          >
            {mainCategory}
          </Text>
          <Box cursor="pointer" onClick={onClick}>
            <Heading color={headingColor} fontSize="xl" fontFamily="heading">
              {title}
            </Heading>
            <Text color="gray.500">{summary}</Text>
          </Box>
          {tags.length > 1 && (
            <Stack direction="row" spacing={3} mt={4}>
              {tags.map((tag, index) => (
                <chakra.span
                  key={index}
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.600"
                  _dark={{ color: "gray.400" }}
                  px={2}
                  py={1}
                  bg="gray.200"
                  rounded="lg"
                >
                  {tag}
                </chakra.span>
              ))}
            </Stack>
          )}
        </Stack>
        <Stack mt={6} direction="row" spacing={4} align="center">
          <Avatar src={avatar} alt={name} />
          <Stack direction="column" spacing={0} fontSize="sm">
            <Text color="gray.900" fontWeight="600">
              {name}
            </Text>
            <Text color="gray.500">
              {date} · {minutesToRead} min read · {viewCount} views
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
