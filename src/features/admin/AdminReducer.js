export const initialUserState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...state,
        isLoading: true,
        message: "loading ...",
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoading: false,
        isSuccess: true,
        message: "",
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.error,
      };
    case "LOGOUT":
      // Specifically clear the user object from localStorage
      localStorage.removeItem("user");
       
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    case "LOAD_USER":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "RESET_ERROR":
      return {
        ...state,
        isError: false,
        message: "",
      };
    default:
      return state;
  }
};
