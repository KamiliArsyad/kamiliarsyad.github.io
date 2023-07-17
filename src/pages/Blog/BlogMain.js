import { useEffect } from "react";
import { usePostContext } from "../../features/posts/PostContext";
import { fetchPosts } from "../../features/posts/PostServices";
import { Divider, Grid, Heading, Stack } from "@chakra-ui/react";
import Thumbnail from "../../components/Thumbnail";

export default function BlogMain() {
  const { post, dispatch: postDispatch } = usePostContext();

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
      <Heading marginBottom="2rem"> Blog Posts </Heading>
      <Divider />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {post.posts.map((post) => (
          <Thumbnail postListObject={post} />
        ))}
      </Grid>
    </Stack>
  );
}
