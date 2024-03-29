import { useNavigate } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";


export default function InvalidLink() {
  const history = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {/* Add big 404 with emoji */}
      <Text fontSize="6xl" textAlign="center">
        404
        <br />
        Page Not Found

        <span role="img" aria-label="sad">
          😢
        </span>
      </Text>
      <Text fontSize="xl" textAlign="center">
        Sorry! This page either doesn't exist or is under development :(
        <br />
        We appreciate your patience!
      </Text>
      <Button
        mt={4}
        colorScheme="teal"
        _hover={{ bg: "teal.100", transform: "scale(1.1)", color: "black" }}
        transition="all 0.3s"
        onClick={() => history(-1)}
        boxShadow="lg"
      >
        Go Back
      </Button>
    </Box>
  );
}
