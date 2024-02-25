import { Outlet } from "react-router-dom";
import { ICTProvider } from "./ICTContext";

export const ICTRoute = () => {
  return (
    <ICTProvider>
      <Outlet />
    </ICTProvider>
  );
};
