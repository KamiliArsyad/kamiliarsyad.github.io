export const initialPostState = {
  posts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  postFocus: {}, // This is the post that the user clicked on. Don't forget to clear this when the user navigates away from the post.
  isPostFocusLoading: false,
  message: "",
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_POSTS":
      return {
        ...state,
        isLoading: true,
        message: "loading ...",
      };
    case "POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        isSuccess: true,
        message: "",
      };
    case "POSTS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.error,
      };
    case "REQUEST_POST":
      return {
        ...state,
        isPostFocusLoading: true,
        message: "loading ...",
      };
    case "POST_SUCCESS":
      return {
        ...state,
        postFocus: action.payload,
        isPostFocusLoading: false,
        isSuccess: true,
        message: "",
      };
    case "POST_ERROR":
      return {
        ...state,
        isPostFocusLoading: false,
        isError: true,
        isSuccess: false,
        message: action.error,
      };
    case "CLEAR_POST_FOCUS":
      return {
        ...state,
        postFocus: {},
      };
    default:
      throw new Error(`No matching action for ${action.type}`);
  }
};
