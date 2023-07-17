import { createContext, useContext, useReducer } from "react";
import { initialPostState, postReducer } from "./PostReducer";

export const PostContext = createContext();

export const usePostContext = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [post, dispatch] = useReducer(postReducer, initialPostState);

  return (
    <PostContext.Provider value={{ post, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
