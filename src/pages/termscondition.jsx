import React from 'react';
import { Box, Container, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const TermsAndConditions = () => {
  const navigate=useNavigate();
  navigate("/homepage");
  return (
    <Box>
      <Container maxW={"100%"} py={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Terms & Conditions
        </Text>
        <Text>
          By accessing and using our website, you agree to comply with the following terms and conditions. Please read them carefully before making a purchase or using our services.
        </Text>
        <Text mt={4}>
          Intellectual Property:
        </Text>
        <Text>
          - All content on this website, including text, images, logos, and trademarks, is the property of our company and protected by intellectual property laws.
        </Text>
        <Text mt={4}>
          Prohibited Activities:
        </Text>
        <Text>
          - You may not use our website for any unlawful or unauthorized purpose, or violate any applicable laws or regulations.
        </Text>
        <Text>
          - You may not attempt to gain unauthorized access to our website or interfere with its functionality.
        </Text>
        <Text mt={4}>
          Limitation of Liability:
        </Text>
        <Text>
          - We strive to provide accurate and up-to-date information, but we do not guarantee the completeness or accuracy of the content on our website.
        </Text>
        <Text>
          - We are not liable for any direct, indirect, or consequential damages arising from your use of our website or products.
        </Text>
        <Text mt={4}>
          Governing Law:
        </Text>
        <Text>
          - These terms and conditions are governed by the laws of [Your Country/Region]. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in [Your Country/Region].
        </Text>
        <Image
          src="https://static.vecteezy.com/system/resources/previews/007/942/040/original/two-business-people-are-finalizing-the-agreement-terms-and-conditions-free-vector.jpg"
          alt="Terms & Conditions"
          height="450px"
          mt={4}
        />
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
