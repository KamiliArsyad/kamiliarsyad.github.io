import { useNavigate, useParams } from "react-router-dom";
import { usePostContext } from "../../features/posts/PostContext";
import { useEffect, useState } from "react";
import {
  clearPostFocus,
  fetchPost,
  fetchPosts,
} from "../../features/posts/PostServices";
import Post from "../../components/Post";
import {
  Box,
  Button,
  Collapse,
  Fade,
  Flex,
  Slide,
  SlideFade,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BlogDrawer } from "../../components/BlogDrawer";

export default function BlogPost() {
  const { post, dispatch: postDispatch } = usePostContext();
  const { postid } = useParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const fetch = async () => {
      try {
        await fetchPost(postDispatch, postid);

        if (post.posts.length === 0) await fetchPosts(postDispatch);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();

    /**
     * Clears the global post focus when the component unmounts
     */
    return () => {
      clearPostFocus(postDispatch);
    };
  }, [postid]);

  return (
    <>
      <SlideFade
        w="100%"
        in={!isDrawerOpen}
        unmountOnExit
        transition={{ enter: { duration: 0.3 }, exit: { duration: 0.3 } }}
      >
        <Button w="100%" onClick={toggleDrawer}>
          Toggle Drawer
        </Button>
      </SlideFade>

      <Flex direction={isMobile ? "column-reverse" : "row"}>
        <Post
          post={post.postFocus}
          isLoading={post.isPostFocusLoading}
          isError={post.isError}
        />

        {/* Drawer Items */}
        <Stack
          w={isDrawerOpen ? (isMobile ? "100%" : 1 / 4) : 0}
          h={isDrawerOpen ? "100%" : 0}
          animation="slideInRight"
          overflow="hidden"
          transition="width 0.3s ease-in-out"
        >
          <Button onClick={toggleDrawer}>Toggle Drawer</Button>
          <BlogDrawer
            isOpen={isDrawerOpen}
            content={post.posts
              .filter((post) => post.slug !== postid)
              .slice(0, post.posts.length > 3 ? 3 : post.posts.length)
              .map((post) => {
                return {
                  title: post.title,
                  tags: [post.categories],
                  image: post.imageURL,
                  navigation: () => {
                    navigate(`/blog/${post.slug}`);
                  },
                  preview: { details: post.summary + "..." },
                };
              })}
          />
        </Stack>
      </Flex>
    </>
  );
}
