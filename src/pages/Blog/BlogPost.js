import { useNavigate, useParams } from "react-router-dom";
import { usePostContext } from "../../features/posts/PostContext";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  clearPostFocus,
  fetchPost,
  fetchPosts,
} from "../../features/posts/PostServices";
import Post from "../../components/Post";
import {
  Button,
  Flex,
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
      <Helmet>
        <title>{post.postFocus.title}</title>
        <meta name="description" content={post.postFocus.summary} />
        <meta property="og:title" content={post.postFocus.title} />
        <meta property="og:description" content={post.postFocus.summary} />
        <meta property="og:image" content={post.postFocus.imageURL} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:title" content={post.postFocus.title} />
        <meta name="twitter:description" content={post.postFocus.summary} />
        <meta name="twitter:image" content={post.postFocus.imageURL} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <SlideFade
        w="100%"
        in={!isDrawerOpen}
        transition={{ enter: { duration: 0.3 }, exit: { duration: 0.3 } }}
      >
        <Button w="100%" onClick={toggleDrawer} bgColor="#FFE5D1" _hover={{ bgColor: "#fff5ed" }}>
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
          paddingRight={isMobile ? 0 : 4}
        >
          <Button onClick={toggleDrawer} bgColor="#FFE5D1" _hover={{
            bgColor: "#fff5ed"
          }}>Toggle Drawer</Button>
          <BlogDrawer
            isOpen={isDrawerOpen}
            content={post.posts
              .filter((post) => post.slug !== postid)
              .slice(0, post.posts.length > 4 ? 4 : post.posts.length)
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
