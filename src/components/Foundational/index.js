import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Alert } from "./Alert";
import { useEffect } from "react";
import { Stack, useDisclosure } from "@chakra-ui/react";

function Foundational() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Stack spacing={0}>
      <Alert isOpen={isOpen} onClose={onClose} />
      <Header />
      <Outlet />
      <Footer />
    </Stack>
  );
}

export default Foundational;
