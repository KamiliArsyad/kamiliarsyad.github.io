import { useEffect } from "react";
import { usePostContext } from "../../features/posts/PostContext";
import { fetchPosts } from "../../features/posts/PostServices";
import {
  Container,
  Divider,
  Fade,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Thumbnail from "../../components/Thumbnail";
import { useNavigate } from "react-router-dom";

export default function BlogDashboard() {
  const { post, dispatch: postDispatch } = usePostContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchPosts(postDispatch);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [postDispatch]);

  return (
    <>
      <Helmet>
        <title>Blog Posts</title>
        <meta
          name="description"
          content="A collection of blog, project, and course review posts by Arsyad Kamili"
        />
      </Helmet>
      <Fade in transition={{enter: { duration: 0.6 }}}>
        <Container maxW="container.xl" py={8}>
          <Stack align="center" spacing={4}>
            <Heading mt={8} mb={8}>
              Blog Posts
            </Heading>
            <Divider />
            {post.isLoading ? (
              <Fade
                in
                transition={{
                  enter: { duration: 0.6},
                  exit: { duration: 0.6},
                }}
              >
                <Spinner
                  thickness="4px"
                  speed="0.7s"
                  emptyColor="gray.400"
                  color="blue.500"
                  size="xl"
                />
              </Fade>
            ) : (
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={6}
                w="100%"
              >
                {post.posts.map((p, index) => (
                  <GridItem key={p.slug}>
                    <Fade
                      in
                      transition={{
                        enter: { duration: 0.6, delay: index * 0.1 },
                      }}
                    >
                      <Thumbnail
                        postListObject={p}
                        onClick={() => navigate(`/blog/${p.slug}`)}
                      />
                    </Fade>
                    {/* Invisible link for SEO */}
                    <a href={`/blog/${p.slug}`} style={{ display: "none" }} />
                  </GridItem>
                ))}
              </Grid>
            )}
          </Stack>
        </Container>
      </Fade>
    </>
  );
}
