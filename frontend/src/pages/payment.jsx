import React from 'react';
import { Box, Container, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Payments = () => {
  const navigate=useNavigate();
  navigate("/homepage");
  return (
    <Box>
      <Container maxW={"100%"} py={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Payments
        </Text>
        <Text>
          We offer flexible payment options to make your shopping experience convenient and secure.
        </Text>
        <Text mt={4}>
          Accepted Payment Methods:
        </Text>
        <ul>
          <li>Credit Cards (Visa, Mastercard, American Express)</li>
          <li>Debit Cards</li>
          <li>Net Banking</li>
          <li>PayPal</li>
          {/* Add more payment methods here */}
        </ul>
        <Text mt={4}>
          Secure Transactions:
        </Text>
        <Text>
          We use industry-standard encryption and security measures to protect your payment information during transactions.
        </Text>
        <Text mt={4}>
          Payment Verification:
        </Text>
        <Text>
          For your security, we may require additional verification for certain transactions. This may include providing proof of identity or billing information.
        </Text>
        <Image
          src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/credit-card.png?v=1668332788&width=165"
          alt="Payments"
          height="150px"
          mt={4}
        />
      </Container>
    </Box>
  );
};

export default Payments;