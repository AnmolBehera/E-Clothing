import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import color from '../Images/color.png';
import { Box } from '@chakra-ui/react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ width: '100%', maxWidth: '315px', margin: 'auto', position: 'relative' }}>
      <Box
        w={['100%', '325px']}
        h="529px"
        overflow="hidden"
        textAlign="left"
        padding="10px"
        mx="auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={`/singleproduct/${product._id}`}>
          <div style={{ position: 'relative', transform: isHovered ? 'scale(0.9)' : 'scale(1)' }}>
            <img
              style={{
                width: '100%',
                height: '400px',
                margin: 'auto',
                opacity: isHovered ? '0.5' : '1',
                transition: 'transform 0.9s ease-in', // Smooth transition when scaling on hover
              }}
              src={product.img1}
              alt={product.title}
            />
            {isHovered && (
              <button
                style={{
                  position: 'absolute',
                  top: '90%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '12px 45px',
                  background: 'black',
                  borderRadius: '5px',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Select
              </button>
            )}
          </div>
        </Link>
        <small style={{ fontSize: '11px', color: 'grey' }}>{product.subhead}</small>
        <p
          style={{
            fontFamily: 'Helvetica',
            fontWeight: '600',
            fontSize: '12px',
            color: '#000000',
            lineHeight: '21px',
            paddingBottom: '5px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {product.title}
        </p>
        <p
          style={{
            fontWeight: '400',
            fontSize: '14px',
            color: '#000000',
            lineHeight: '21px',
            paddingBottom: '5px',
          }}
        >
          Rs. {product.price}
        </p>
        {/* <img style={{ cursor: 'pointer' }} src={color} alt="" /> */}
      </Box>
    </div>
  );
}
