import React from 'react';
import { Box, Container, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate=useNavigate();
  navigate("/homepage");
  return (
    <Box>
      <Container maxW={"100%"} py={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Contact Us
        </Text>
        <Text>
          If you have any questions or inquiries, feel free to reach out to us. We're here to assist you!
        </Text>
        <Text mt={4}>
          You can contact us via phone or email:
        </Text>
        <Text mt={2}>
          Phone: +91 7011263423
        </Text>
        <Text>
          Email: care@koovs.com
        </Text>
        <Image
          src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/customer-care.png?v=1668332773&width=165"
          alt="Customer Care"
          height="150px"
          mt={4}
        />
      </Container>
    </Box>
  );
};

export default Contact;
