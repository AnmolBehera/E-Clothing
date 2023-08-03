import { Button,useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerHeader, FormLabel, Checkbox, Select, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, RangeSliderThumb, Input } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import React, { useState } from 'react';

const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState([]);
  const [order, setOrder] = useState('');
  const btnRef = React.useRef();

  const handleChange = (e) => {
    let newCategory = [...category];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
    console.log(category);
  }

  const handleSort = (e) => {
    console.log(e.target.value);
    setOrder(e.target.value);
  }

  const handleVisible = () => {
    let slide = document.getElementById("slide");
    if (slide.style.visibility === "visible") {
      slide.style.visibility = "hidden";
      slide.style.display = "none";
    } else if (slide.style.visibility === "hidden") {
      slide.style.visibility = "visible";
      slide.style.display = "block";
    }
  }

  return (
    <div style={{ display: "flex",m:"10.2%"}}>
      <Button onClick={onOpen} bg='none' marginTop="0.2%" marginBottom="1.2%" fontSize='14px' variant='unstyled' display='flex'>Filter<BiChevronDown /></Button>
      <Drawer size={'sm'} isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent >
          <DrawerHeader fontSize={'26px'}>Filters</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody >
            <div>
              <Button onClick={handleVisible} width="100%" fontSize='14px' bg='none' variant='unstyled' gap="85%" display='flex' color={'#000000'}>Price <BiChevronDown /> </Button>
              <div id="slide" style={{ visibility: 'visible', margin: "20px 0px 20px 0px" }}>
                <RangeSlider aria-label='Price Range' defaultValue={[0, 100]} colorScheme='blackAlpha'>
                <RangeSliderTrack>
                <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
                </RangeSlider>
                <div style={{ display: "flex", gap: "10px", margin: "20px 0px 20px 0px" }}>
                  <Input placeholder='₹' /><span style={{ textAlign: "center", paddingTop: "10px" }}>To</span><Input placeholder='₹' />
                </div>
              </div>
            </div>
            <Button width="100%" bg='none' variant='unstyled' fontSize='14px' gap='73%' display='flex' color={'#000000'}>Product Type <BiChevronDown /> </Button>
            <div style={{ display: "flex", gap: "10px" }}>
              <Checkbox value="Shirt" onChange={handleChange} checked={category.includes("Shirt")} />
              <FormLabel color={'#000000'} fontWeight='400' paddingTop='8px'>Shirt</FormLabel>
            </div>

            {/* Other checkboxes for product types go here */}

            <div style={{ display: "flex", fontWeight: "600", gap: "85%", margin: "30px 0px 30px 0px", cursor: "pointer" }}>
              <p>Size</p>
              <BiChevronDown />
            </div>

            <div style={{ display: "flex", fontWeight: "600", gap: "81%", margin: "30px 0px 30px 0px", cursor: "pointer" }}>
              <p>Brand</p>
              <BiChevronDown />
            </div>

            <div style={{ display: "flex", fontWeight: "600", gap: "71%", margin: "30px 0px 30px 0px", cursor: "pointer" }}>
              <p>Availability</p>
              <BiChevronDown />
            </div>

            <div style={{ display: "flex", fontWeight: "600", gap: "78%", margin: "30px 0px 30px 0px", cursor: "pointer" }}>
              <p>Gender</p>
              <BiChevronDown />
            </div>

            <div style={{ cursor: "pointer" }}>
              <p style={{ fontWeight: "600" }}>
                Color
              </p>
              {/* Add image for color selection */}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <div style={{ padding: "7px", outline: "none", marginLeft: "7px", cursor: "pointer", border: "none" ,gap: "5px"}}>
        <Select onChange={handleSort} variant="unstyled" fontSize="14px" fontWeight={600} outline="none" border="none" cursor="pointer" gap="0%" appearance="none"> {/* Reduce the gap value to your desired spacing */}
          <option style={{ cursor: "pointer", fontWeight: "600", marginLeft: "8%" }} name="order" value={""} order={order === ""} outline="none">Best Selling</option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} name="order" value={"asc"} order={order === "asc"} outline="none">Price, Low to High</option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} name="order" value={"desc"} order={order === "desc"} outline="none">Price, High to Low</option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} value="">Alphabetically, A-Z</option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} value="">Alphabetically, Z-A</option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} value="">Date,Old to New</option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} value="">Date,New to Old</option>
        </Select>
      </div>
    </div>
  );
}

export default Filter;