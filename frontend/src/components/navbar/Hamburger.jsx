import React  from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Heading,Button,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import "./Navbar.css";
import { Link } from "react-router-dom";


const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  /*const navigateTo = useNavigate();*/
  const toggleMenu = () => {
    isOpen ? onClose() : onOpen();
  };
  /*const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };*/
  if(JSON.parse(localStorage.getItem("token"))!=null){
    return (
      <>
          
          <Flex justify={'space-between'} bgColor="#ffffff" mb='15px'>
              <IconButton
            aria-label="Open Menu"
                  margin="2%"
                  size="lg"
                  icon={<HamburgerIcon />}
                  onClick={toggleMenu}
            display={{ base: 'block', md: 'none' }}/>
            <Link to="/">
          <Heading as="h1" size="md" mt={"20px"} mr={"0%"} fontWeight={"650"} p={"1"} className='hide'textAlign={"center"}>
          Fashion Hub
        </Heading>
        </Link>   
          </Flex>         
             
        <Box
          bg="#fff"
          px={2}
          py={4}
          pos="fixed"
          top={0}
          left={0}
          w="56%"
          h="100vh"
          zIndex={20}
          display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        >
          <Flex justify="space-between" textAlign={'left'} mb={4} >
            <Box>
              <Text fontSize="2xl" fontWeight="bold" p='10px'>Menu</Text>
            </Box>
            <IconButton
              aria-label="Close Menu"
              variant={'unstyled'}
              size="lg"
              icon={<CloseIcon />}
              onClick={onClose}
            />
          </Flex>
  
          <Stack spacing={3} textAlign={'left'} p='10px'>
              <Link to='/profile'>
              <Text
                fontWeight="bold"
                color="gray.600"
                fontSize="xl"
                onClick={onClose}
              >
                My Profile
              </Text>
              </Link>
              <Link to='/product'>
              <Text
                fontWeight="bold"
                color="gray.600"
                fontSize="xl"
                onClick={onClose}
              >
                All Items
              </Text>
              </Link>
              <Link to='/aboutus'>
              <Text
                fontWeight="bold"
                color="gray.600"
                fontSize="xl"
                onClick={onClose}
              >
                About Us
              </Text>
              </Link>
              <Link to='/contact'>
              <Text
                fontWeight="bold"
                color="gray.600"
                fontSize="xl"
                onClick={onClose}
              >
                Contact Us
              </Text>
              </Link>
              <Link to="/logout">
          <Button size='md'color={'white'} bg={'black'}>
           LogOut
          </Button></Link>
          </Stack>
  
        </Box>
      </>
    );
  }else{
  return (
    <>
        
        <Flex justify={'space-between'} bgColor="#ffffff" mb='15px'>
            <IconButton
          aria-label="Open Menu"
                margin="2%"
                size="lg"
                icon={<HamburgerIcon />}
                onClick={toggleMenu}
          display={{ base: 'block', md: 'none' }}/>
          <Link to="/">
        <Heading as="h1" size="md" mt={"20px"} mr={"0%"} fontWeight={"650"} p={"1"} className='hide'textAlign={"center"}>
        Fashion Hub
      </Heading>
      </Link>   
        </Flex>         
           
      <Box
        bg="#fff"
        px={2}
        py={4}
        pos="fixed"
        top={0}
        left={0}
        w="56%"
        h="100vh"
        zIndex={20}
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
      >
        <Flex justify="space-between" textAlign={'left'} mb={4} >
          <Box>
            <Text fontSize="2xl" fontWeight="bold" p='10px'>Menu</Text>
          </Box>
          <IconButton
            aria-label="Close Menu"
            variant={'unstyled'}
            size="lg"
            icon={<CloseIcon />}
            onClick={onClose}
          />
        </Flex>

        <Stack spacing={3} textAlign={'left'} p='10px'>
            <Link to='/product'>
            <Text
              fontWeight="bold"
              color="gray.600"
              fontSize="xl"
              onClick={onClose}
            >
              All Items
            </Text>
            </Link>
            {/* <Link to='/product'>
            <Text
              fontWeight="bold"
              color="gray.600"
              fontSize="xl"
              onClick={onClose}
            >
              Women
            </Text>
            </Link> */}
            <Link to="/aboutus">
            <Text
              fontWeight="bold"
              color="gray.600"
              fontSize="xl"
              onClick={onClose}
            >
              About Us
            </Text>
            </Link>
            <Link to="/contact">
            <Text
              fontWeight="bold"
              color="gray.600"
              fontSize="xl"
              onClick={onClose}
            >
              Contact Us
          </Text>
          </Link>
          <Link to="/signin">
          <Button size='md'color={'white'} bg={'black'}>
           Login
          </Button></Link>
        </Stack>

      </Box>
    </>
  );
};
}
export default HamburgerMenu;
