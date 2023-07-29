import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { MdErrorOutline } from "react-icons/md";
import { SignUpValidate } from "./password";
export default function SignUp() {
  const toast = useToast();

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

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pass, setPass] = useState("");
  const [phoneno, setPhoneno] =useState("");


  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phoneno:"",
      pass: "",
    },
    validate: SignUpValidate,
    onSubmit: async (values) => {
      setLoading(true);
      handleSignup();
      // Simulating API call, replace this with actual API call
      // const res = await signUpAPI(values);
      // if (res.status === false) {
      //   setLoading(false);
      //   return customToast("red", res.error);
      // }
      customToast("green", "Sign up Success, Redirecting...");
      setTimeout(() => {
        // Redirect to login page after successful signup, replace this with actual navigation
        // myNav("/login");
        setLoading(false);
        //window.location.href = "/signin";
      }, 100);
    },
  });
  const handleSignup = async () => {
    try {
      console.log(1);
      const obj = {
             email: email,
              fname: fname,
              lname: lname,
              phoneno: phoneno,
              pass: pass,
      };
      console.log(obj);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      console.log(response);
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        alert(res.msg);
        window.location.href = "/signin";
      } else {
        const err = await response.json();
        throw new Error(err);
      }
    } catch (error) {
      alert(error.msg);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features
          </Text>
        </Stack>
        <form onSubmit={formik.handleSubmit}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                     // onChange={formik.handleChange}
                      name="firstname"
                      type="text"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                    //  onChange={formik.handleChange}
                      name="lastname"
                      type="text"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                //  onChange={formik.handleChange}
                  name="email"
                  autoComplete="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              {formik.errors.email ? (
                <Flex color={"red"} gap={2} alignItems={"center"}>
                  <MdErrorOutline />
                  <Text fontSize={"sm"} color={"red"}>
                    {formik.errors.email}
                  </Text>
                </Flex>
              ) : null}

                <FormControl >
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                  <Input
                  //  onChange={formik.handleChange}
                    name="phoneno"
                    autoComplete="phoneno"
                    type="number"
                    value={phoneno}
                    onChange={(e) => setPhoneno(e.target.value)}
                  />
                 
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    //onChange={formik.handleChange}
                    autoComplete="new-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                     value={pass}
                     onChange={(e) => setPass(e.target.value)}
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {formik.errors.pass ? (
                <Flex color={"red"} gap={2} alignItems={"center"}>
                  <MdErrorOutline />
                  <Text fontSize={"sm"} color={"red"}>
                    {formik.errors.pass}
                  </Text>
                </Flex>
              ) : null}

             

             

              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleSignup}
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  isDisabled={loading}
                  bg={"blue.400"}
                  color={"white"}
                  transition={"700ms"}
                  _hover={{
                    bgColor: "black",
                  }}
                  bgColor={"blue.500"}
                >
                  {!loading ? "Sign up" : <Spinner />}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="signin" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}