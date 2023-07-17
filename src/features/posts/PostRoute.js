import { Outlet } from "react-router-dom";
import { PostProvider } from "./PostContext";

export const PostRoute = () => {
  return (
    <PostProvider>
      <Outlet />
    </PostProvider>
  );
};
