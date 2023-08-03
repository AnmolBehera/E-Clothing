import React, { useState } from 'react';
import { Box, Heading, Input, Flex, Container, Menu, MenuItem, MenuButton, MenuList, Button,Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody, DrawerCloseButton,DrawerHeader} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsPerson, BsSearch } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Mens_Image from './images/Mens_image.webp';
import womens_Image from './images/womens_image.webp';
import { useDisclosure,Tooltip} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const { isOpen: menu1, onOpen: menu1Open, onClose: menu1Close } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigateTo = useNavigate();
  const handleCartDrawerOpen = () => {
  setIsCartDrawerOpen(true);
};
  const GoTo = (path) => {
    console.log('path', path);
    navigateTo(path);
  };

    const handleSearch = () => {
    setIsDrawerOpen(true);
  };

function handleClick(){
  if(JSON.parse(localStorage.getItem("token"))!=null){
    GoTo('/profile');
  }else{
    GoTo('/signin');
  }
}  

if(JSON.parse(localStorage.getItem("token"))!=null){
  return (
    <>
      <div className='mainNavbar'>
        <div className='UpperNavbar'>
          <Flex justify={'space-between'} paddingRight={6} paddingLeft={40} padding={1}>
            <Container>
              <Flex alignItems={'center'} gap={3} marginLeft={'20px'}>
                <FaFacebookF />
                <p style={{ fontSize: '15px', lineHeight: '22px', fontWeight: '550', marginRight: '20px' }}>
                  1.8 M Followers
                </p>
                <BsInstagram />
                <p style={{ fontSize: '15px', lineHeight: '22px', fontWeight: '550' }}>682k followers</p>
              </Flex>
            </Container>
            <Container>
              <p style={{ fontWeight: '500', fontSize: '15px', lineHeight: '22px', padding: '5px',marginLeft:'2.5%', textAlign:'center'}}>
                Open doors to a world of fashion | Young and fresh
              </p>
            </Container>
            <Container display={'flex'} justifyContent={'flex-end'} marginRight={'2%'}>
              <p style={{ fontSize: '16px' }}> </p>
              {/* <BiChevronDown /> */}
            </Container>
          </Flex>
        </div>
        <div style={{ height: '1px', width: '100%', borderBottom: '1px solid grey', borderColor: '#EEEEEE', margin: '0' }}></div>
        <div className='LowerNavbar'>
          <Flex>
            <Container>
              <div style={{ marginLeft: '0%' }}>
                <Link to='/'>
                  <Heading style={{ paddingTop: '6px', paddingLeft: '2.8%',marginLeft:'2.3%' }}>Fashion Hub</Heading>
                </Link>
              </div>
            </Container>
            <Container>
              <Flex className='LowerNavCont'>
                <Menu isOpen={menu1}>
                  <MenuButton
                    variant='unstyled'
                    marginTop={'4%'}
                    padding={'6%'}
                    fontSize={'16px'}
                    fontWeight={'600'}
                    mx={1}
                    py={[1, 2, 2]}
                    px={4}
                    borderRadius={5}
                    aria-label='Courses'
                    onMouseEnter={menu1Open}
                    onMouseLeave={menu1Close}
                  >
                    Mens {menu1 ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList onMouseEnter={menu1Open} onMouseLeave={menu1Close} style={{ marginTop: '0', paddingTop: '0', paddingBottom: '0', borderRadius: '0' }}>
                    <Box style={{ width: '100vw', height: '100vh' }}>
                      <Flex>
                        <Box style={{ width: '70%' }}>
                          <Flex justify={'space-between'} style={{ padding: '10px' }}>
                            <Box style={{ fontSize: '12px', fontWeight: '800' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Clothing</MenuItem>
                              <Link to='/product'>
                                {/* <MenuItem>New In</MenuItem> */}
                                <MenuItem>View All</MenuItem>
                                <MenuItem>T-Shirts</MenuItem>
                                <MenuItem>Jackets & Coats</MenuItem>
                                <MenuItem>Hoodies & Sweatshirts</MenuItem>
                                <MenuItem>Sweatpants</MenuItem>
                                <MenuItem>Shorts</MenuItem>
                                <MenuItem>Co-ords sets</MenuItem>
                              </Link>
                            </Box>
                            <Box style={{ fontSize: '12px', fontWeight: '600' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Brand</MenuItem>
                              <MenuItem>Essentials by Fashion Hub</MenuItem>
                              <MenuItem>Nike</MenuItem>
                              <MenuItem>TigerBear</MenuItem>
                              <MenuItem>Bravesoul</MenuItem>
                              <MenuItem>Adidas</MenuItem>
                            </Box>
                            <Box style={{ fontSize: '12px', fontWeight: '600' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>
                                Fashion Hub Specials
                              </MenuItem>
                              <MenuItem>Manish Malhotra</MenuItem>
                              <MenuItem>Sabyasachchi</MenuItem>
                            </Box>
                          </Flex>
                        </Box>
                        <Box style={{ textAlign: 'center' }}>
                          <img src={Mens_Image} className='imageMens' alt='' />
                        </Box>
                      </Flex>
                    </Box>
                  </MenuList>
                </Menu>
                <Menu isOpen={isOpen}>
                  <MenuButton
                    variant='Ghost'
                    mx={1}
                    py={[1, 2, 2]}
                    px={4}
                    borderRadius={5}
                    aria-label='Courses'
                    marginTop={'4%'}
                    padding={'6%'}
                    fontSize={'16px'}
                    fontWeight={'600'}
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                  >
                    Womens {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} style={{ marginTop: '0', paddingTop: '0', paddingBottom: '0', borderRadius: '0' }}>
                    <Box style={{ width: '100vw', height: '100vh' }}>
                      <Flex>
                        <Box style={{ width: '70%' }}>
                          <Flex justify={'space-between'} style={{ padding: '10px' }}>
                            <Box style={{ fontSize: '12px', fontWeight: '800' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Clothing</MenuItem>
                              <Link to='/product'>
                                {/* <MenuItem>New In</MenuItem> */}
                                <MenuItem>View All</MenuItem>
                                <MenuItem>Lounge & Sleepwear</MenuItem>
                                <MenuItem>Lingerie & innerwear</MenuItem>
                                <MenuItem>Sweatshirts</MenuItem>
                                <MenuItem>Sports bra</MenuItem>
                                <MenuItem>Bodysuits</MenuItem>
                                <MenuItem>Outerwear</MenuItem>
                                <MenuItem>Jeans</MenuItem>
                                <MenuItem>Shorts</MenuItem>
                                <MenuItem>T-Shirts</MenuItem>
                                <MenuItem>Leggings</MenuItem>
                                <MenuItem>Pants</MenuItem>
                              </Link>
                            </Box>
                            <Box style={{ fontSize: '12px', fontWeight: '600' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Brand</MenuItem>
                              <MenuItem>Essentials by Fashion Hub</MenuItem>
                              <MenuItem>Nike</MenuItem>
                              <MenuItem>TigerBear</MenuItem>
                              <MenuItem>Bravesoul</MenuItem>
                              <MenuItem>Adidas</MenuItem>
                            </Box>
                            <Box style={{ fontSize: '12px', fontWeight: '600' }}>
                              {/* <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Shoes</MenuItem>
                              <MenuItem>New In</MenuItem>
                              <MenuItem>View All</MenuItem>
                              <MenuItem>Sneakers</MenuItem>
                              <MenuItem>Heels</MenuItem>
                              <MenuItem>Sliders & flip flops</MenuItem>
                              <MenuItem>Boots</MenuItem> */}
                            </Box>
                          </Flex>
                        </Box>
                        <Box style={{ textAlign: 'center' }}>
                          <img src={womens_Image} className='imageMens' alt='' />
                        </Box>
                      </Flex>
                    </Box>
                  </MenuList>
                </Menu>
              </Flex>
            </Container>
            <Container height='80%' m={'auto'}>
              <Flex justify={'space-between'} ml='45%' flex-wrap={"wrap"}>
                <Box>
                  <Tooltip label="Search">
                  <Button variant={'unstyled'} fontSize={'22px'} onClick={handleSearch}>
                    <BsSearch />
                    </Button>
                  </Tooltip>
                  <Tooltip label="Account">            
                  <Button onClick={handleClick} variant={'unstyled'} fontSize={'24px'} fontWeight={'500'}>
                      <BsPerson />
                    </Button>
                    </Tooltip>
                    <Tooltip label="Cart">
                    <Button
                      display={{ base: 'none', md: 'inline-flex' }}
                      textAlign='center'
                      fontWeight={'bold'}
                      gap={2}
                      variant={'unstyled'}
                      cursor='pointer'
                      fontSize={{ xl: '25px', lg: '16px', md: '13px', base: '10px' }}
                      onClick={handleCartDrawerOpen}
                      color={'black'}
                    >
                      <BiShoppingBag color={'black'} />
                      </Button>
                      </Tooltip>
                </Box>
              </Flex>
            </Container>
          </Flex>
        </div>
      </div>
       <Drawer placement="top" onClose={() => setIsDrawerOpen(false)} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent style={{ height: "100px" }}>
          <DrawerBody style={{ paddingTop: "1%" }}>
            <Flex alignItems="center">
              <Heading style={{ paddingTop: '6px', paddingLeft: '2.8%', marginLeft: '2.3%' ,marginRight:'5%'}}>Fashion Hub</Heading>
              <Input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Enter search query'
                border="1px solid black"
                borderRadius="md"
                mt="1%"
                py="2"
                px="3"
                mr="2"
                width="50%"
              />
              <Button
                variant="outline"
                colorScheme="black"
                mt="1%"
                onClick={handleSearch}
              >
                <BsSearch />
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Drawer placement="Right" onClose={() => setIsCartDrawerOpen(false)} isOpen={isCartDrawerOpen}size="md">
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton/>
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
      {/* Add your cart content here */}
    </DrawerBody>
  </DrawerContent>
</Drawer>
    </>
  );
}else{
  return(
    <>
      <div className='mainNavbar'>
        <div className='UpperNavbar'>
          <Flex justify={'space-between'} paddingRight={6} paddingLeft={40} padding={1}>
            <Container>
              <Flex alignItems={'center'} gap={3} marginLeft={'20px'}>
                <FaFacebookF />
                <p style={{ fontSize: '15px', lineHeight: '22px', fontWeight: '550', marginRight: '20px' }}>
                  1.8 M Followers
                </p>
                <BsInstagram />
                <p style={{ fontSize: '15px', lineHeight: '22px', fontWeight: '550' }}>682k followers</p>
              </Flex>
            </Container>
            <Container>
              <p style={{ fontWeight: '500', fontSize: '15px', lineHeight: '22px', padding: '5px',marginLeft:'2.5%', textAlign:'center'}}>
                Open doors to a world of fashion | Young and fresh
              </p>
            </Container>
            <Container display={'flex'} justifyContent={'flex-end'} marginRight={'2%'}>
              <p style={{ fontSize: '16px' }}> </p>
              {/* <BiChevronDown /> */}
            </Container>
          </Flex>
        </div>
        <div style={{ height: '1px', width: '100%', borderBottom: '1px solid grey', borderColor: '#EEEEEE', margin: '0' }}></div>
        <div className='LowerNavbar'>
          <Flex>
            <Container>
              <div style={{ marginLeft: '0%' }}>
                <Link to='/'>
                  <Heading style={{ paddingTop: '6px', paddingLeft: '2.8%',marginLeft:'2.3%' }}>Fashion Hub</Heading>
                </Link>
              </div>
            </Container>
            <Container>
              <Flex className='LowerNavCont'>
                <Menu isOpen={menu1}>
                  <MenuButton
                    variant='unstyled'
                    marginTop={'4%'}
                    padding={'6%'}
                    fontSize={'16px'}
                    fontWeight={'600'}
                    mx={1}
                    py={[1, 2, 2]}
                    px={4}
                    borderRadius={5}
                    aria-label='Courses'
                    onMouseEnter={menu1Open}
                    onMouseLeave={menu1Close}
                  >
                    Mens {menu1 ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList onMouseEnter={menu1Open} onMouseLeave={menu1Close} style={{ marginTop: '0', paddingTop: '0', paddingBottom: '0', borderRadius: '0' }}>
                    <Box style={{ width: '100vw', height: '100vh' }}>
                      <Flex>
                        <Box style={{ width: '70%' }}>
                          <Flex justify={'space-between'} style={{ padding: '10px' }}>
                            <Box style={{ fontSize: '12px', fontWeight: '800' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Clothing</MenuItem>
                              <Link to='/product'>
                                {/* <MenuItem>New In</MenuItem> */}
                                <MenuItem>View All</MenuItem>
                                <MenuItem>T-Shirts</MenuItem>
                                <MenuItem>Jackets & Coats</MenuItem>
                                <MenuItem>Hoodies & Sweatshirts</MenuItem>
                                <MenuItem>Sweatpants</MenuItem>
                                <MenuItem>Shorts</MenuItem>
                                <MenuItem>Co-ords sets</MenuItem>
                              </Link>
                            </Box>
                            <Box style={{ fontSize: '12px', fontWeight: '600' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Brand</MenuItem>
                              <MenuItem>Essentials by Fashion Hub</MenuItem>
                              <MenuItem>Nike</MenuItem>
                              <MenuItem>TigerBear</MenuItem>
                              <MenuItem>Bravesoul</MenuItem>
                              <MenuItem>Adidas</MenuItem>
                            </Box>
                            <Box style={{ fontSize: '12px', fontWeight: '600' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>
                                Fashion Hub Specials
                              </MenuItem>
                              <MenuItem>Manish Malhotra</MenuItem>
                              <MenuItem>Sabyasachchi</MenuItem>
                            </Box>
                          </Flex>
                        </Box>
                        <Box style={{ textAlign: 'center' }}>
                          <img src={Mens_Image} className='imageMens' alt='' />
                        </Box>
                      </Flex>
                    </Box>
                  </MenuList>
                </Menu>
                <Menu isOpen={isOpen}>
                  <MenuButton
                    variant='Ghost'
                    mx={1}
                    py={[1, 2, 2]}
                    px={4}
                    borderRadius={5}
                    aria-label='Courses'
                    marginTop={'4%'}
                    padding={'6%'}
                    fontSize={'16px'}
                    fontWeight={'600'}
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                  >
                    Womens {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} style={{ marginTop: '0', paddingTop: '0', paddingBottom: '0', borderRadius: '0' }}>
                    <Box style={{ width: '100vw', height: '100vh' }}>
                      <Flex>
                        <Box style={{ width: '70%' }}>
                          <Flex justify={'space-between'} style={{ padding: '10px' }}>
                            <Box style={{ fontSize: '12px', fontWeight: '800' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Clothing</MenuItem>
                              <Link to='/product'>
                                {/* <MenuItem>New In</MenuItem> */}
                                <MenuItem>View All</MenuItem>
                                <MenuItem>Lounge & Sleepwear</MenuItem>
                                <MenuItem>Lingerie & innerwear</MenuItem>
                                <MenuItem>Sweatshirts</MenuItem>
                                <MenuItem>Sports bra</MenuItem>
                                <MenuItem>Bodysuits</MenuItem>
                                <MenuItem>Outerwear</MenuItem>
                                <MenuItem>Jeans</MenuItem>
                                <MenuItem>Shorts</MenuItem>
                                <MenuItem>T-Shirts</MenuItem>
                                <MenuItem>Leggings</MenuItem>
                                <MenuItem>Pants</MenuItem>
                              </Link>
                            </Box>
                            <Box style={{ fontSize: '12px', fontWeight: '600' }}>
                              <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Brand</MenuItem>
                              <MenuItem>Essentials by Fashion Hub</MenuItem>
                              <MenuItem>Nike</MenuItem>
                              <MenuItem>TigerBear</MenuItem>
                              <MenuItem>Bravesoul</MenuItem>
                              <MenuItem>Adidas</MenuItem>
                            </Box>
                            <Box style={{ fontSize: '12px', fontWeight: '600' }}>
                              {/* <MenuItem style={{ fontSize: '18px', fontWeight: '600' }}>Shoes</MenuItem>
                              <MenuItem>New In</MenuItem>
                              <MenuItem>View All</MenuItem>
                              <MenuItem>Sneakers</MenuItem>
                              <MenuItem>Heels</MenuItem>
                              <MenuItem>Sliders & flip flops</MenuItem>
                              <MenuItem>Boots</MenuItem> */}
                            </Box>
                          </Flex>
                        </Box>
                        <Box style={{ textAlign: 'center' }}>
                          <img src={womens_Image} className='imageMens' alt='' />
                        </Box>
                      </Flex>
                    </Box>
                  </MenuList>
                </Menu>
              </Flex>
            </Container>
            <Container height='80%' m={'auto'}>
              <Flex justify={'space-between'} ml='45%' flex-wrap={"wrap"}>
                <Box>
                  <Tooltip label="Search">
                  <Button variant={'unstyled'} fontSize={'22px'} onClick={handleSearch}>
                    <BsSearch />
                    </Button>
                  </Tooltip>
                  <Tooltip label="Account">            
                  <Button onClick={handleClick} variant={'unstyled'} fontSize={'24px'} fontWeight={'500'}>
                      <BsPerson />
                    </Button>
                    </Tooltip>
                    {/* <Tooltip label="Cart" onload={cart} id="cart">
                    <Button
                      display={{ base: 'none', md: 'inline-flex' }}
                      textAlign='center'
                      fontWeight={'bold'}
                      gap={2}
                      variant={'unstyled'}
                      cursor='pointer'
                      fontSize={{ xl: '25px', lg: '16px', md: '13px', base: '10px' }}
                      // onClick={handleCartDrawerOpen}
                      color={'black'}
                    >
                      <BiShoppingBag color={'black'} />
                      </Button>
                      </Tooltip> */}
                </Box>
              </Flex>
            </Container>
          </Flex>
        </div>
      </div>
       <Drawer placement="top" onClose={() => setIsDrawerOpen(false)} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent style={{ height: "100px" }}>
          <DrawerBody style={{ paddingTop: "1%" }}>
            <Flex alignItems="center">
              <Heading style={{ paddingTop: '6px', paddingLeft: '2.8%', marginLeft: '2.3%' ,marginRight:'5%'}}>Fashion Hub</Heading>
              <Input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Enter search query'
                border="1px solid black"
                borderRadius="md"
                mt="1%"
                py="2"
                px="3"
                mr="2"
                width="50%"
              />
              <Button
                variant="outline"
                colorScheme="black"
                mt="1%"
                onClick={handleSearch}
              >
                <BsSearch />
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* <Drawer placement="Right" onClose={() => setIsCartDrawerOpen(false)} isOpen={isCartDrawerOpen}size="md">
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton/>
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody> */}
      {/* Add your cart content here */}
    {/* </DrawerBody>
  </DrawerContent>
</Drawer> */}
    </>
  );
}
};

export default Navbar;
