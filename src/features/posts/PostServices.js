import { getPosts } from "../../APIs/PostAPI";

export const fetchPosts = async (dispatch) => {
  try {
    dispatch({ type: "REQUEST_POSTS" });

    const response = await getPosts();
    const data = await response.data;

    if (response.status === 200) {
      dispatch({ type: "POSTS_SUCCESS", payload: data });
      return data;
    }

    dispatch({ type: "POSTS_ERROR", error: data.message });
  } catch (error) {
    dispatch({ type: "POSTS_ERROR", error: error.response.data.message });
    console.log(error.response.data.message);
  }
};
