import { Outlet } from "react-router-dom";
import { AdminProvider } from "./AdminContext";

export const AdminRoute = () => {
  return (
    <AdminProvider>
      <Outlet />
    </AdminProvider>
  );
};