import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider/Slider';
import ImageCard from '../components/ImageCard';
import ProductCard from '../components/ProductCard'
import { Box,Heading,SimpleGrid,Image} from '@chakra-ui/react';

const Homepage = () => {
  // Define the image paths for the ImageCard components
  const [arr, setArr] = useState([]);

  const getProductData = async()=>{
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/products`,{method:"GET"});
    //console.log(res);
    if(res.ok){
      const data = await res.json();
      setArr(data);
    }
  }
 //console.log(arr);
  useEffect(()=>{
    getProductData();
  });
   const imageCardsDataWomen = [
    {
      imageUrl: "https://www.koovs.com/cdn/shop/files/tops-01_copy.jpg?v=1667987961&width=327", 
      text: "Tops",
      
    },
    {
      imageUrl: "https://www.koovs.com/cdn/shop/files/Tee-01.jpg?v=1667898427&width=327",
      text: "TShirts",
       },
    {
      imageUrl: "https://www.koovs.com/cdn/shop/files/shorts_women-01.jpg?v=1667898316&width=327",
      text: "Shorts",
       },
    {
      imageUrl: "https://www.koovs.com/cdn/shop/files/leggings-01.jpg?v=1667899318&width=327",
      text: "Leggings",
     },
    
    ];
    const imageCardsDataMen = [
        {
      imageUrl: "https://www.koovs.com/cdn/shop/files/men_tshirts-01.webp?v=1689837185&width=327",
      text: "TShirts",
      },
      {
      imageUrl: "https://www.koovs.com/cdn/shop/files/CataloguetemplateKOOVS_1_-05_7c4feba8-8cb6-4952-9281-6523f7631d07.webp?v=1689838559&width=327",
      text: "Hoodies",
      },
      {
      imageUrl: "https://www.koovs.com/cdn/shop/files/pants-01.webp?v=1689838866&width=327",
      text: "Joggers",
      },
      {
      imageUrl: "https://www.koovs.com/cdn/shop/files/shortsn-01.jpg?v=1667897412&width=327",
      text: "Shorts",
      }, 
  ]

  return (
    <div>
          <Slider />
            <Box mt={['5%', '3%', '3%', '2%']}>
          <div style={{ marginLeft: '0%' }}>
            <Heading
              as="h1"
              fontSize={['xl', '2xl', '3xl', '4xl']}
              pt={['4px', '6px']}
              pl={['2%', '0.4%']}
              ml={['4%', '0.5%', '0.5%', '2.3%']}
              fontWeight="350"
            >
              Shop Items
            </Heading>
          </div>
        </Box>
        <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, max-content))",
      gridTemplateRows: "repeat(auto-fill)",
      justifyContent:"center",
      gridGap: "20px 5px",
        margin: "auto",
     }}
      >
        {imageCardsDataWomen.map((data, index) => (
          <ImageCard key={index} imageUrl={data.imageUrl} text={data.text} />
        ))}
        </div>
            <Box mt={['5%', '3%', '3%', '2%']}>
          <div style={{ marginLeft: '0%' }}>
            <Heading
              as="h1"
              fontSize={['xl', '2xl', '3xl', '4xl']}
              pt={['4px', '6px']}
              pl={['2%', '0.4%']}
              ml={['4%', '0.5%', '0.5%', '2.3%']}
              fontWeight="350"
            >
              
            </Heading>
          </div>
      </Box>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, max-content))",
      gridTemplateRows: "repeat(auto-fill)",
      justifyContent:"center",
      gridGap: "20px 5px",
      margin: "auto",
     }}
      >
        {imageCardsDataMen.map((data, index) => (
          <ImageCard key={index} imageUrl={data.imageUrl} text={data.text} />
        ))}
      </div>
         <Heading
              as="h1"
              fontSize={['xl', '2xl', '3xl', '4xl']}
              pt={['12px', '12px']}
              pl={['1%', '0.4%']}
        ml={['2.3%', '2.3%', '2.3%', '2.3%']}
        mt={ '3%'}
        mb={'2%'}
        textAlign={'center'}
              fontWeight="350"
            >
              Featured Products
      </Heading>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, max-content))",
      gridTemplateRows: "repeat(auto-fill)",
      justifyContent:"center",
      gridGap: "20px 0px",
      margin: "auto"
      
     }}
      >     
          {arr.slice(16, 22).map((data, index) => (
  <ProductCard key={index} product={data} />
))} 
        </div>   
      <Heading as="h3" size="lg" mt={"50px"} mb={"30px"} textAlign={"center"}>
        Brands on koovs
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 4, md: 6, lg: 8 }} px={"21px"} spacing={"21px"} mb={"2%"}>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs_logo_for_brand_page-03.jpg?v=1668331785&width=360" alt="koovs-brand-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/essentials_logo-02.jpg?v=1668331830&width=360" alt="essentials-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/kangol_logo-01.jpg?v=1668331868&width=360" alt="kangaroo-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-01.png?v=1668331907&width=360" alt="big-bazaar-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-02.png?v=1668331923&width=360" alt="5ive-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Ball_logo.jpg?v=1668332152&width=360" alt="ball-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-04.jpg?v=1668332188&width=360" alt="koma-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-02.jpg?v=1668332226&width=360" alt="public-desire-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-08.jpg?v=1668332439&width=360" alt="arkk-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-07.jpg?v=1668332432&width=360" alt="coffee-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-09.jpg?v=1668332464&width=360" alt="keen-logo" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_3951c2d8-141f-43a4-8065-9cca52dac9dd.jpg?v=1668332482&width=360" alt="koov-logo" />
        </Box>
      </SimpleGrid>
    </div>
  );
};
export default Homepage;