export const initialPostState = {
  posts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
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
    default:
      throw new Error(`No matching action for ${action.type}`);
  }
};
