import { useEffect, useMemo, useState } from "react";
import { usePostContext } from "../../features/posts/PostContext";
import { fetchPosts } from "../../features/posts/PostServices";
import {
  Box,
  Container,
  Divider,
  Fade,
  Flex,
  Grid,
  GridItem,
  Heading,
  Select,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Thumbnail from "../../components/Thumbnail";
import { useNavigate } from "react-router-dom";
import CategoryFilter from "../../components/CategoryFilter";
import { colors } from "../../theme/styles";

export default function BlogDashboard() {
  const { post, dispatch: postDispatch } = usePostContext();
  const navigate = useNavigate();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [showControls, setShowControls] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowControls(false);
      } else {
        setShowControls(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const categories = useMemo(() => {
    const allCats = post.posts.flatMap((p) =>
      Array.isArray(p.categories) ? p.categories : [p.categories]
    );
    return Array.from(new Set(allCats));
  }, [post.posts]);

  const sortedPosts = useMemo(() => {
    const postsCopy = [...post.posts];
    return postsCopy.sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.timestamp) - new Date(a.timestamp);
      }
      if (sortOrder === "oldest") {
        return new Date(a.timestamp) - new Date(b.timestamp);
      }
      return (b.viewCount ?? 0) - (a.viewCount ?? 0);
    });
  }, [post.posts, sortOrder]);

  const filteredPosts = useMemo(() => {
    if (selectedCategories.length === 0) return sortedPosts;
    return sortedPosts.filter((p) => {
      const tags = Array.isArray(p.categories) ? p.categories : [p.categories];
      return selectedCategories.some((cat) => tags.includes(cat));
    });
  }, [sortedPosts, selectedCategories]);

  const controlBg = useColorModeValue(colors.lightest, "gray.900");

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
        <Box
          position="sticky"
          top={0}
          zIndex={10}
          bg={controlBg}
          boxShadow="md"
          transform={showControls ? "translateY(0)" : "translateY(-100%)"}
          transition="transform 0.3s"
        >
          <Text color="gray.600" fontSize="sm" align={"center"} p={4}>
            Showing {filteredPosts.length} post
            {filteredPosts.length !== 1 ? "s" : ""}
            {selectedCategories.length ? " matching selected categories" : ""}
          </Text>
          <Flex p={4} gap={4} justify="center" flexWrap="wrap">
            <CategoryFilter
              categories={categories}
              selectedCategories={selectedCategories}
              onChange={setSelectedCategories}
            />
            <Select
              w="200px"
              bg={useColorModeValue("gray.100", "gray.700")}
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest to Oldest</option>
              <option value="oldest">Oldest to Newest</option>
              <option value="popular">Most Popular</option>
            </Select>
          </Flex>
        </Box>
        <Container maxW="container.xl" py={8}>
          <Stack align="center" spacing={4}>
            <Heading mt={8} mb={8}>Blog Posts</Heading>
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
                {filteredPosts.map((p, index) => (
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
