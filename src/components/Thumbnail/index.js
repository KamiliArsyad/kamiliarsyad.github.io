import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

export default function Thumbnail({ title, category, body, author, avatar, date }) {
  return (
    <Center py={6}>
      <Box
        maxW={"350px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow='lg'
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        _hover={{
          bg:useColorModeValue("gray.100", "gray.700"),
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
          overflow='hidden'
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"small"}
            letterSpacing={1.1}
          >
            {category || "Course Review"}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"xl"}
            fontFamily={"body"}
          >
            {title || "CS4225 Big Data Systems for Data Science"}
          </Heading>
          <Text color={"gray.500"}>
            {body || "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={avatar || "https://media.licdn.com/dms/image/C5603AQG12FNcv7ZSzQ/profile-displayphoto-shrink_400_400/0/1637668817669?e=1690416000&v=beta&t=ZUgmx6pm_nRmjfoRG8uP_RNRbgFEKPZ9xI5-R8zkadE"}
            alt={"Author"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text color={"gray.900"} fontWeight={600}>{author || "Arsyad Kamili"}</Text>
            <Text color={"gray.500"}> {date || "Feb 08, 2021"} · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
