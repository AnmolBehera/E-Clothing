import { Box, Container, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate=useNavigate();
  navigate("/homepage");
  return (
    <Box>
      <Container maxW={"100%"} py={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          About Us
        </Text>
        <Text>
          Welcome to our online store! We are dedicated to providing our
          customers with the latest and trendiest fashion collections. Our
          mission is to make high-quality fashion accessible to everyone. With a
          wide range of products and flexible payment options, shopping with us
          is a breeze.
        </Text>
        <Text mt={4}>
          Our team works tirelessly to curate the best fashion items, ensuring
          that you stay ahead in the style game. We offer free shipping for
          orders above INR 1500 and provide a money-back guarantee within 30
          days for exchanges. Our customer support team is available online
          from 10 AM to 6 PM, Monday to Saturday, to assist you with any
          queries or concerns.
        </Text>
        <Text mt={4}>
          Subscribe to our newsletter to be the first to know about new
          collections and product launches. Just enter your email below and
          stay updated with the latest fashion trends.
        </Text>
        <Image
          src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/delivery-truck.png?v=1668332734&width=165"
          alt="Delivery Truck"
          height="100px"
          mt={4}
        />
      </Container>
    </Box>
  );
};

export default About;