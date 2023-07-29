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
import { Link /*,useNavigate*/} from "react-router-dom";


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
        <Heading as="h1" size="lg" mt={"20px"} mr={"5%"} fontWeight={"650"} p={"1"} className='hide'textAlign={"center"}>
        Fashion hub
      </Heading>   
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
              Men
            </Text>
            </Link>
            <Link to='/product'>
            <Text
              fontWeight="bold"
              color="gray.600"
              fontSize="xl"
              onClick={onClose}
            >
              Women
            </Text>
            </Link>
            <Text
              fontWeight="bold"
              color="gray.600"
              fontSize="xl"
              onClick={onClose}
            >
              About Us
            </Text>

            <Text
              fontWeight="bold"
              color="gray.600"
              fontSize="xl"
              onClick={onClose}
            >
              Contact Us
          </Text>
          <Button  size='md' color={'white'} bg={'black'}>
           Login
          </Button>
        </Stack>

      </Box>
    </>
  );
};

export default HamburgerMenu;
