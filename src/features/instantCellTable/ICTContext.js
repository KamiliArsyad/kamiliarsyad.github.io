import { createContext, useContext, useReducer } from "react";
import { initialTableState, tableReducer } from "./ICTReducer";

export const ICTContext = createContext();

export const useICTContext = () => {
  return useContext(ICTContext);
};

export const ICTProvider = ({ children }) => {
  const [table, dispatch] = useReducer(tableReducer, initialTableState);

  return (
    <ICTContext.Provider value={{ table, dispatch }}>
      {children}
    </ICTContext.Provider>
  );
};