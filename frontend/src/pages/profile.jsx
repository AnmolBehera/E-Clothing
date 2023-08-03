import React, { useState , useEffect } from 'react';
import { Box, Flex, Text, Divider, Link, ChakraProvider, Container, VStack} from '@chakra-ui/react';

function Profile() {
  const [arr, setArr] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));

  const getProductData = async()=>{
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/profile`,{method:"GET",headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },});
    //console.log(res);
    if(res.ok){
      const data = await res.json();
      setArr(data);
    }
  }
 //console.log(arr);
 useEffect(()=>{
    getProductData();
  },[]);
  return (
    <Flex direction={{ base: 'column', md: 'row' }} height="100vh">
      {/* Flex for the left part (Side) */}
      <Flex direction="column" alignItems="center" p={{ base: '1rem', md: '5rem' }} bg="white">
        <ChakraProvider>
          <Container as={VStack} maxW={{ base: "100%", md: "320px" }} py={2} spacing={4}>
            <Link href={"/Profile"} color="#000" fontWeight="bold">
              Profile
            </Link>
            <Link href={"/myorders"} color="#000" fontWeight="bold">
              Orders
            </Link>
            <Link href={"/logout"} color="#000" fontWeight="bold">
              Log Out
            </Link>
          </Container>
        </ChakraProvider>
      </Flex>
      <Divider
        display={{ base: 'none', md: 'block' }}
        orientation="vertical"
        sx={{ height: "680px", borderColor: "gray.300" }}
      />
      {/* Flex for the center part (Box with text) */}
      <Flex alignItems="center" justifyContent="center" flex="1">
        <Box textAlign="center" bg="white" p={{ base: '1rem', md: '2rem' }}>
          <Text fontSize={{ base: '20px', md: '36px' }} fontWeight="bold" mb="1rem">
            Name: {arr.fname} {arr.lname}
          </Text>
          <Text fontSize={{ base: '16px', md: '24px' }}>
            Email: {arr.email}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Profile;