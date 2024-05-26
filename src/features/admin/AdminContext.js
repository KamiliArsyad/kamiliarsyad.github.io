import { createContext, useContext, useReducer } from "react";
import { initialUserState, userReducer } from "./AdminReducer";

export const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};

export const AdminProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <AdminContext.Provider value={{ userState, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
