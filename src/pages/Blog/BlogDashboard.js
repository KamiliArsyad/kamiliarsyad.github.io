import { useEffect } from "react";
import { usePostContext } from "../../features/posts/PostContext";
import { fetchPosts } from "../../features/posts/PostServices";
import {
  Divider,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import Thumbnail from "../../components/Thumbnail";
import { useNavigate } from "react-router-dom";

export default function BlogDashboard() {
  const { post, dispatch: postDispatch } = usePostContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        await fetchPosts(postDispatch);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, []);

  return (
    <Stack direction="column" align="center" marginTop="2rem">
      <Heading marginBottom="2rem" marginTop="2rem">
        {" "}
        Blog Posts{" "}
      </Heading>
      <Divider />
      {post.isLoading && (
        <Spinner
          thickness="4px"
          speed="0.7s"
          emptyColor="gray.400"
          color="blue.500"
          size="xl"
        />
      )}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {post.posts.map((post) => (
          <GridItem>
            <Thumbnail
              postListObject={post}
              onClick={() => navigate(`/blog/${post.slug}`)}
            />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}
