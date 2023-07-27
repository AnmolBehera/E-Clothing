import React from 'react';
import { Box, Container, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Shipment = () => {
  const navigate=useNavigate();
  navigate("/homepage");
  return (
    <Box>
      <Container maxW={"100%"} py={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Shipment & Delivery
        </Text>
        <Text>
          We offer reliable and timely shipment options to ensure your orders reach you as quickly as possible.
        </Text>
        <Text mt={4}>
          Shipping Methods:
        </Text>
        <Text>
          - Standard Shipping (3-5 business days)
        </Text>
        <Text>
          - Express Shipping (1-2 business days)
        </Text>
        <Text mt={4}>
          Order Tracking:
        </Text>
        <Text>
          - Once your order is shipped, you will receive a tracking number to monitor its status.
        </Text>
        <Text mt={4}>
          Shipping Costs:
        </Text>
        <Text>
          - Standard Shipping: Free for orders above INR 1500. Flat rate of INR 50 for orders below INR 1500.
        </Text>
        <Text>
          - Express Shipping: Additional charges apply. Calculated at checkout.
        </Text>
        <Image
          src="https://www.freeiconspng.com/uploads/free-shipping-boat-car-airplane-transparent-png-19.png"
          alt="Shipment & Delivery"
          height="450px"
          mt={4}
        />
      </Container>
    </Box>
  );
};

export default Shipment;
