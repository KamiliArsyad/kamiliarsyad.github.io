import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";

import {
  loginUser,
  logoutUser,
  resetUserError,
} from "../../features/admin/AdminServices";

import { useAdminContext } from "../../features/admin/AdminContext";
import { useState } from "react";

/**
 * @description component to display when user is logged in
 * @param {*} param0 - object containing user object
 * @returns
 */
function LoggedInUserPage({ user }) {
  const toast = useToast();
  const { dispatch: userDispatch } = useAdminContext();

  const onLogout = () => {
    logoutUser(userDispatch);

    toast({
      title: "Logged out",
      description: "You have been logged out.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={
          user.picture_url
            ? user.picture_url
            : "https://http.cat/images/404.jpg"
        }
        alt={user.name}
      />

      <Stack>
        <CardBody>
          <Heading size="md">Welcome back, {user.name}!</Heading>

          <Text py="2">You are already logged in.</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="red" onClick={onLogout}>
            Logout
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

/**
 * @description component to display login form
 * @returns LoginForm component
 */
function LoginForm() {
  const toast = useToast();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { userState, dispatch: userDispatch } = useAdminContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onLogin = async () => {
    resetUserError(userDispatch);
    const dataPromise = loginUser(userDispatch, user);
    toast.promise(dataPromise, {
      loading: { title: "Logging in ...", description: "Please wait." },
      success: (data) => ({
        title: "Login Successful",
        description: data.message,
      }),
      error: (error) => ({
        title: "Login failed",
        description: error.message,
      }),
    });

    if (!userState.isLoggedIn) {
      return;
    }

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <VStack
      spacing={4}
      align="stretch"
      backgroundColor="white"
      width="400px"
      p={10}
      rounded={6}
    >
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
        />
      </FormControl>
      <Button
        colorScheme="blue"
        onClick={onLogin}
        isLoading={userState.loading}
      >
        Log In
      </Button>
    </VStack>
  );
}

export default function UserLogin() {
  const { userState } = useAdminContext();

  return (
    <Flex height="100vh" align="center" justify="center" p={4}>
      {userState.isLoggedIn || userState.user.email ? (
        <LoggedInUserPage user={userState.user} />
      ) : (
        <LoginForm />
      )}
    </Flex>
  );
}
