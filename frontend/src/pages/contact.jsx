import React from 'react';
import { Box, Container, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Careers = () => {
  const navigate=useNavigate();
  navigate("/homepage");
  return (
    <Box>
      <Container maxW={"100%"} py={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Careers
        </Text>
        <Text>
          Join our team and be a part of our exciting journey in the world of fashion. We are always looking for talented individuals who are passionate about making a difference in the fashion industry.
        </Text>
        <Text mt={4}>
          Current Job Openings:
        </Text>
        <ul>
          <li>1. Fashion Designer</li>
          <li>2. Marketing Specialist</li>
          <li>3. Customer Support Representative</li>
          {/* Add more job openings here */}
        </ul>
        <Text mt={4}>
          To apply for any of the positions above, please send your resume and cover letter to careers@koovs.com.
        </Text>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0bF1nheAHuHOUeBZSNTrpcJVmx-5kFXV5A&usqp=CAU"
          alt="Careers"
          height="150px"
          mt={4}
        />
      </Container>
    </Box>
  );
};

export default Careers;