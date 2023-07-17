import { useParams } from "react-router-dom";
import { usePostContext } from "../../features/posts/PostContext";
import { useEffect } from "react";
import { clearPostFocus, fetchPost } from "../../features/posts/PostServices";
import Post from "../../components/Post";

export default function BlogPost() {
  const { post, dispatch: postDispatch } = usePostContext();
  const { postid } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        await fetchPost(postDispatch, postid);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();

    return () => {
      clearPostFocus(postDispatch);
    };
  }, []);

  return (
    <Post post={post.postFocus} isLoading={post.isLoading} isError={post.isError} />
  );
}
