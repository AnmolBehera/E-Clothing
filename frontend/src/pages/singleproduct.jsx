import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"; // Import the arrow icons
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const params = useParams();
  const [arr, setArr] = useState([]);
  const [quantity, setQuantity] = useState(1);
  
  const getProductData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/products/sp/${params.id}`,
      { method: "GET" }
    );
    if (res.ok) {
      const data = await res.json();
      setArr(data);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const carouselImages = [arr.img1, arr.img2];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };
  return (
    <Box
      className="single-product-main-content"
      margin={{ base: "20px 0", md: "75px 0" }}
    >
      <Flex
        className="layout"
        maxW={{ base: "calc(100% - 20px)", md: "1200px" }}
        m="0 auto"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          className="left"
          width={{ base: "100%", md: "50%" }} // Adjust the width here
          height={{ base: "360px", md: "600px" }}
          position="relative"
        >
          {carouselImages.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              width="100%"
              height="100%"
              objectFit="contain"
              alt=""
              style={{
                display: index === currentImage ? "block" : "none",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: index === currentImage ? 1 : 0,
              }}
            />
          ))}
          <Button
            onClick={prevImage}
            position="absolute"
            left="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            variant="unstyled" // Remove default button styles
            _hover={{ color: "blueviolet" }} // Change color on hover
          >
            <ArrowBackIcon boxSize={6} />
          </Button>
          <Button
            onClick={nextImage}
            position="absolute"
            right="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            variant="unstyled" // Remove default button styles
            _hover={{ color: "blueviolet" }} // Change color on hover
          >
            <ArrowForwardIcon boxSize={6} />
          </Button>
        </Box>
        <Flex
          className="right"
          direction="column"
          padding={{ base: "20px", md: "0 35px" }}
          flexGrow="1"
          maxW={{ base: "100%", md: "50%" }} // Adjust the max width here
        >
          <Text className="name" fontSize="24px" lineHeight="32px" fontWeight="bold" mb="10px">
            {arr.title}
          </Text>
          <Text className="price" fontSize="20px" lineHeight="30px" color="blueviolet" fontWeight="bold" mb="10px">
            Rs.{arr.price}
          </Text>
          <Flex className="cart-buttons" alignItems="center" mb="20px">
            <Flex className="quantity-buttons" border="2px solid rgba(0, 0, 0, 0.2)" mr="10px" h="50px">
              <Text
                fontSize="18px"
                width="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                color="#6b6b6b"
                borderRight="2px solid rgba(0, 0, 0, 0.2)"
                onClick={handleDecreaseQuantity}
              >
                -
              </Text>
              <Text
                fontSize="18px"
                marginLeft="3.6%"
                marginRight="3.6%"
                width="60px"
                textAlign="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                color="#6b6b6b"
              >
                {quantity}
              </Text>
              <Text
                fontSize="18px"
                width="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                color="#6b6b6b"
                borderLeft="2px solid rgba(0, 0, 0, 0.2)"
                onClick={handleIncreaseQuantity}
              >
                +
              </Text>
            </Flex>
            <Button colorScheme='facebook' size='lg' style={{ backgroundColor: '' }}><FaCartPlus size={18} />Add to cart</Button>
          </Flex>
          <Box className="divider" margin="20px 0" height="1px" width="100%" bgColor="rgba(0, 0, 0, 0.1)" />
          <Flex className="info-item" direction="column">
            <Text className="text-bold" fontSize="18px" fontWeight="500" display="block" mb="10px">
              Category:
              <Text as="span" fontSize="16px" fontWeight="400" cursor="pointer" color="#6b6b6b">
                {arr.Category}
              </Text>
            </Text>
            <Box>
              <Text className="desc" fontSize="20px" lineHeight="28px" color="#6b6b6b" mb="20px">
                Product Description
              </Text>
              <Text fontSize="16px" width="100%" height="100px">
                {arr.desc}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
