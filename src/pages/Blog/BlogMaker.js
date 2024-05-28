import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import BeatLoader from "react-spinners/BeatLoader";
import TextInputMD from "../../components/TextInputMD";
import { createEmptyPost, PostType } from "../../features/posts/PostModel";
import { useReducer, useState } from "react";
import { publishPost } from "../../features/posts/PostServices";
import { useNavigate } from "react-router-dom";

const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_BODY":
      return { ...state, body: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_IMAGEURL":
      return { ...state, imageURL: action.payload };
    case "CLEAR_POST":
      return createInitialPost({});
    default:
      return state;
  }
};

const createInitialPost = ({ ...details }) => {
  const post = createEmptyPost();

  post.imageURL = details?.imageURL;
  post.title = details?.title;
  post.body = details?.body;

  return post;
};

export default function BlogMaker() {
  const [post, dispatch] = useReducer(postReducer, () => createInitialPost({}));
  const [loading, setLoading] = useState(false);
  const toast = useToast({ position: "top", isClosable: true });
  const nav = useNavigate();
  const postTypeKeys = Object.keys(PostType);

  const handleOnPublish = async () => {
    setLoading(() => true);
    const response = publishPost(post);

    toast.promise(response, {
      loading: { title: "Publishing post", description: "Please wait..." },
      success: (data) => {
        setLoading(false);
        dispatch({ type: "CLEAR_POST" });
        nav("/blog");
        return { title: "Post published", description: data.message };
      },
      error: (error) => {
        setLoading(false);
        return {
          title: "Failed to publish post",
          description: error.response?.data.message || error.message,
        };
      },
    }
  );
  };

  return (
    <Flex
      h="100%"
      align="normal"
      w="100%"
      mx="auto"
      px={6}
      pt={6}
      direction="column"
    >
      <Grid h="30%" templateColumns="1fr 1fr" gap={2} w="100%" px={6}>
        <Container
          bg="white"
          p={4}
          mb={4}
          borderRadius="md"
          alignSelf="center"
          boxShadow="lg"
          transition="all 0.2s ease-in-out"
          _hover={{
            boxShadow: "0 0 10px blue",
          }}
        >
          <FormControl>
            <Stack direction="column" spacing={2}>
              <Stack direction="column" spacing={0}>
                <FormLabel>Title</FormLabel>
                <Input
                  required={true}
                  value={post.title}
                  placeholder="Title"
                  onChange={(e) =>
                    dispatch({ type: "SET_TITLE", payload: e.target.value })
                  }
                />
              </Stack>
              <Stack direction="column" spacing={0}>
                <FormLabel>Category</FormLabel>
                <Select
                  required={true}
                  placeholder="Select category"
                  onChange={(e) =>
                    dispatch({
                      type: "SET_CATEGORIES",
                      payload: e.target.value,
                    })
                  }
                >
                  {postTypeKeys.map((key) => (
                    <option key={key} value={PostType[key]}>
                      {PostType[key]}
                    </option>
                  ))}
                </Select>
              </Stack>
              <Stack direction="column" spacing={0}>
                <FormLabel>Image URL</FormLabel>
                <Input
                  value={post.imageURL}
                  placeholder="Image URL"
                  onChange={(e) =>
                    dispatch({ type: "SET_IMAGEURL", payload: e.target.value })
                  }
                />
              </Stack>
              <Button
                colorScheme="blue"
                size="md"
                spinner={<BeatLoader size={8} color="white" />}
                isLoading={loading}
                onClick={handleOnPublish}
              >
                Publish
              </Button>
            </Stack>
          </FormControl>
        </Container>
        <Stack direction="column" spacing={2} margin="auto">
          <Heading as="h2" size="md">
            Image Preview
          </Heading>
          <Image
            src={post.imageURL || "https://http.cat/images/204.jpg"}
            maxW="300px"
            borderRadius="lg"
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "dark-lg",
            }}
          />
        </Stack>
      </Grid>
      <TextInputMD
        post={post}
        handleChange={(e) =>
          dispatch({ type: "SET_BODY", payload: e.target.value })
        }
      />
    </Flex>
  );
}
