import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Alert } from "./Alert";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";

function Foundational() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <div>
      <Alert isOpen={isOpen} onClose={onClose} />
      <Header />
      <Outlet />
    </div>
  );
}

export default Foundational;
