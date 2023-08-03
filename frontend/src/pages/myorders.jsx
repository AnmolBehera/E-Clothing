import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Box,
} from '@chakra-ui/react';

const MyOrders = () => {
  // Static data for demonstration purposes (replace this with actual data)
  const orders = [
    {
      order_id: 1,
      user_id: 101,
      total_price: 1500,
      payment: 'Credit Card',
      delivery: 'Delivered',
      user: {
        email: 'user1@example.com',
      },
      phno: '1234567890',
      address: '123, Main Street',
      landmark: 'Near Park',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
    // Add more orders here...
  ];

  return (
    <Container p={4}>
      <Box as="h3" textAlign="center" color="primary.500" fontSize="xl" fontWeight="bold">
        My Orders
      </Box>
      <Table variant="striped" mt={3}>
        <Thead bg="primary.500" color="white">
          <Tr>
            <Th scope="col">Serial No.</Th>
            <Th scope="col">Order No.</Th>
            <Th scope="col">Total Price</Th>
            <Th scope="col">Payment Type</Th>
            <Th scope="col">Delivery Status</Th>
            <Th scope="col">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order, index) => (
            <React.Fragment key={`order-${order.order_id}`}>
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{`U-${order.user_id}-Or-${order.order_id}`}</Td>
                <Td>{`Rs. ${order.total_price}`}</Td>
                <Td>{order.payment}</Td>
                <Td>{order.delivery}</Td>
                <Td>
                  <Button colorScheme="blue">Details</Button>
                  {order.total_price > 0 && order.delivery === 'Not Delivered' ? (
                    <Button colorScheme="red">Cancel</Button>
                  ) : (
                    <Button colorScheme="red" disabled>
                      Cancel
                    </Button>
                  )}
                </Td>
              </Tr>
              <Accordion mt={4} mb={8} defaultIndex={0}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <span>User Info</span>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Table variant="unstyled">
                      <Tbody>
                        <Tr>
                          <Td>Email</Td>
                          <Td>{order.user.email}</Td>
                        </Tr>
                        <Tr>
                          <Td>Phone no.</Td>
                          <Td>{order.phno}</Td>
                        </Tr>
                        <Tr>
                          <Td>Address</Td>
                          <Td>{order.address}</Td>
                        </Tr>
                        <Tr>
                          <Td>Landmark</Td>
                          <Td>{order.landmark}</Td>
                        </Tr>
                        <Tr>
                          <Td>City</Td>
                          <Td>{order.city}</Td>
                        </Tr>
                        <Tr>
                          <Td>State</Td>
                          <Td>{order.state}</Td>
                        </Tr>
                        <Tr>
                          <Td>Zip</Td>
                          <Td>{order.zip}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default MyOrders;