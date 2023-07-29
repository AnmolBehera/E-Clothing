import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, InputGroup, InputRightElement, useToast, Spinner } from "@chakra-ui/react";
import React,{ useState } from "react";


export default function Signin() {
  const toast = useToast();

 const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignin = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            pass,
          }),
        }
      );
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.token));
        alert(res.msg);
        window.location.href = "/Profile";
       // customToast("green", "Login Success, Redirecting...");
      } else {
        const err = await response.json();
       // customToast("red", "Login Error...");
        throw new Error(err);
      }
    } catch (error) {
      alert(error.msg);
    }
  };


  const customToast = (color, text) => {
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg={`${color}.500`}>
          {text}
        </Box>
      ),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Your login logic here (e.g., API calls, validation, etc.)
    handleSignin();
    setTimeout(() => {
      setLoading(false);
     // customToast("green", "Login Success, Redirecting...");
      // Redirect the user after successful login
      // window.location.href = "/";
    }, 100);
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bgColor={"gray.50"}>
      <Stack spacing={8} mx={"auto"} maxW={"md"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Create New Account
            <Link ml={3} href="/signup" color={"blue.400"}>
              Register Here
            </Link>
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box rounded={"lg"} bgColor={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input name="email" type="email" required autoComplete="email"  value={email}
        onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input name="password" required  type={showPassword ? "text" : "password"}  value={pass}
        onChange={(e) => setPass(e.target.value)} />
                  <InputRightElement>
                    <Button variant={"ghost"} onClick={handleSignin}>
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
                  {/* <Checkbox>Remember me</Checkbox>
                  <Link href="#" color={"blue.400"}>
                    Forgot password?
                  </Link> */}
                </Stack>
                <Button
                  type="submit"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  transition={"700ms"}
                  _hover={{
                    bgColor: "black",
                  }}
                  isDisabled={loading}
                  bgColor={"blue.500"}
                >
                  {!loading ? "Login" : <Spinner />}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}