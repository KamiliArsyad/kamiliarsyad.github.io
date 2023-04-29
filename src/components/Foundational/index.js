import Header from "./Header";
import Footer from "./Footer";
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
      <Footer />
    </div>
  );
}

export default Foundational;
