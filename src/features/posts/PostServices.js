import { createPost, getPost, getPosts } from "../../APIs/PostAPI";
import { getUserFromLocalStorage } from "../admin/AdminServices";

/**
 * @description Fetches all posts from the API
 * @param {*} dispatch
 * @returns {Promise} Promise object represents the data returned from the API
 */
export const fetchPosts = async (dispatch) => {
  try {
    dispatch({ type: "REQUEST_POSTS" });

    const response = await getPosts();
    let data = await response.data;
    data = sortByDate(data);

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

/**
 * @description Fetches a single post from the API
 * @param {*} dispatch
 * @param {*} id
 * @returns {Promise} Promise object represents the data returned from the API
 */
export const fetchPost = async (dispatch, id) => {
  try {
    dispatch({ type: "REQUEST_POST" });

    const response = await getPost(id);
    const data = await response.data;

    if (response.status === 200) {
      dispatch({ type: "POST_SUCCESS", payload: data });
      return data;
    }

    dispatch({ type: "POST_ERROR", error: data.message });
  } catch (error) {
    dispatch({ type: "POST_ERROR", error: error.response.data.message });
    console.log(error.response.data.message);
  }
};

/**
 * @description Publishes a new post to the API
 * @param {import("./PostModel").PostModel} post
 * @returns {Promise} Contains the data returned from the API
 * @throws {Error} If the API request fails
 */
export const publishPost = async (post) => {
  try {
    const user = getUserFromLocalStorage();
    post.author = user._id;
    const response = await createPost(post, user.token);
    const data = await response.data;

    if (response.status === 201) {
      return data;
    }

    throw new Error(data.message);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * @description Clears the postFocus stat
 * @param {*} dispatch
 * @returns {void}
 */
export const clearPostFocus = (dispatch) => {
  dispatch({ type: "CLEAR_POST_FOCUS" });
};

/**
 * @description Output a new list of posts sorted by date
 * @param {*} posts
 * @returns {Array} Sorted array of posts
 */
const sortByDate = (posts) => {
  return posts.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
};
