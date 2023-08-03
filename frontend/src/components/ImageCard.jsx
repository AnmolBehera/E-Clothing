import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const ImageCard = ({ imageUrl, text }) => {
  return (
    <Box
      overflow="hidden"
      position="relative"
      borderRadius="md"
      transition="transform 0.3s"
      _hover={{
        // Change the background color and arrow color on hover
        "& svg": {
          color: "white",
        },
        "& div": {
          bg: "black",
        },
      }}
    >
      <Image src={imageUrl} alt="Card Image" m="4.5%" ml="5%" borderRadius="md" _hover={{
        transform: 'scale(0.97)',
      }} />

      {/* "Sweatshirt" text positioned over the image */}
      <Text
        position="absolute"
        bottom={{ base: '20px', sm: '24px' }}
        left={{ base: '23px', sm: '27px' }}
        fontSize={{ base: 'lg', sm: 'xl' }}
        color="black"
        fontWeight="540"
      >
        {text}
      </Text>
      {/* Arrow icon as an anchor tag to navigate to another page */}
      <Link to={`/category/${text}`}>
        <Flex
          position="absolute"
          bottom={{ base: '18px', sm: '22px' }}
          right={{ base: '14px', sm: '18px' }}
          alignItems="center"
          justifyContent="center"
          bg="white"
          borderRadius="full"
          boxSize={{ base: '36px', sm: '40px' }}
          cursor="pointer"
          transition="background-color 0.3s, color 0.3s" /* Add transition for smooth effect */
        >
          <ArrowForwardIcon boxSize={{ base: 6, sm: 7 }} color="black.500" />
        </Flex>
      </Link>
    </Box>
  );
};

export default ImageCard;



