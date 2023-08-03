import React, { useEffect } from 'react';
import { Text } from '@chakra-ui/react';

export default function LogOut() {
  useEffect(() => {
    localStorage.clear();

    setTimeout(() => {
      window.location.replace('/');
    }, 7000);
  }, []);

  return (
    <div style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Text fontSize={{ base: '20px', md: '36px' }} fontWeight="bold" mb="1rem">
        Successfully Logged Out!!
      </Text>
    </div>
  );
}