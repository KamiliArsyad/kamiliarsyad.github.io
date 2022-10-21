import Header from "./Header";
import { Outlet } from "react-router-dom";

function Foundational() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
} 

export default Foundational;