import React from 'react';
import { Box, Container, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ReturnExchange = () => {
    const navigate=useNavigate();
    navigate("/homepage");
  return (
    <Box>
      <Container maxW={"100%"} py={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Return & Exchange Policy
        </Text>
        <Text>
          We want you to be fully satisfied with your purchase. If you are not happy with your order, we offer easy returns and exchanges.
        </Text>
        <Text mt={4}>
          Return Eligibility:
        </Text>
        <Text>
          - Items must be in new and unused condition.
        </Text>
        <Text>
          - Original tags and packaging must be intact.
        </Text>
        <Text mt={4}>
          Exchange Process:
        </Text>
        <Text>
          - Contact our customer support team to initiate an exchange.
        </Text>
        <Text>
          - Ship the item back to us, and we'll process the exchange once we receive it.
        </Text>
        <Text mt={4}>
          Return Process:
        </Text>
        <Text>
          - Contact our customer support team to initiate a return.
        </Text>
        <Text>
          - Ship the item back to us, and we'll issue a refund once we receive it.
        </Text>
        <Image
          src="https://www.returnlogic.com/wp-content/uploads/2022/09/AdobeStock_379120023-1-1024x683.webp"
          alt="Return & Exchange"
          height="450px"
          mt={4}
        />
      </Container>
    </Box>
  );
};

export default ReturnExchange;