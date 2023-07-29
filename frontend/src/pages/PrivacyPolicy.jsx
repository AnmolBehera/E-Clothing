import React from 'react';
import { Box, Container, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const PrivacyPolicy = () => {
  const navigate=useNavigate();
  navigate("/homepage");
  return (
    <Box>
      <Container maxW={"100%"} py={4}>
        <ul>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Privacy Policy
        </Text>
        <Text>
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website.
        </Text>
        <Text mt={4}>
          Information We Collect:
        </Text>
        <Text>
          - Name, email address, and contact information when you create an account or place an order.
        </Text>
        <Text>
          - Payment information for processing transactions.
        </Text>
        <Text>
          - Non-personal information such as IP address and browsing activity for website analytics.
        </Text>
        <Text mt={4}>
          How We Use Your Information:
        </Text>
        <Text>
          - To process and fulfill your orders.
        </Text>
        <Text>
          - To send you marketing emails and updates (you can opt-out at any time).
        </Text>
        <Text>
          - To improve our website and customer experience.
        </Text>
        <Text mt={4}>
          Data Security:
        </Text>
        <Text>
          We take appropriate security measures to protect your personal information from unauthorized access and disclosure.
        </Text>
        <Text mt={4}>
          Changes to this Policy:
        </Text>
        <Text>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </Text>
        <Text mt={4}>
          Contact Us:
        </Text>
        <Text>
          If you have any questions or concerns about our Privacy Policy, please contact us at privacy@koovs.com.
        </Text>

        </ul>
        
        <Image
          src="https://codeskventure.in/wp-content/uploads/privacy_policy.jpg"
          alt="Privacy Policy"
          height="150px"
          mt={4}
        />
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;