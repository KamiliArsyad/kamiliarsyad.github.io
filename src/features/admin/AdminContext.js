import { createContext, useContext, useEffect, useReducer } from "react";
import { initialUserState, userReducer } from "./AdminReducer";
import { loadUser } from "./AdminServices";

export const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};

export const AdminProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialUserState);
  
  useEffect(() => {
    loadUser(dispatch);
  }, []);

  return (
    <AdminContext.Provider value={{ userState, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
