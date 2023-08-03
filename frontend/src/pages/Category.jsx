import { Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
// import Navbar from '../Components/Navbar/Navbar'

export default function Category() {
  const params = useParams();
  const [arr, setArr] = useState([]);

  const getProductData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/products/pr/${params.category}`, { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        setArr(data);
      } else {
        console.log('Error fetching data');
      }
    } catch (error) {
      console.error('Error fetching data:',error);
    }
  };

  useEffect(() => {
    getProductData();
  }, [params.category]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = arr.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    // whole container
    <>
      {/* <Navbar/> */}
      <div>
        <Heading as="h2" size="lg" mt={"70px"} m={"30px"} textAlign={"center"} fontSize={"42px"} fontWeight={"500"} lineHeight={"38px"}>
          Items
        </Heading>
        <div style={{ fontWeight: '500', fontSize: '14px', margin: '-10px 0px 60px 0px', textAlign: 'center' }}>
          <Link to='/'>Home</Link> {">"} Items
        </div>
      </div>

      {/* sort and filter container */}
      {/* <div style={{ paddingLeft: '5%', width: '100%', display: 'flex', gap: '30px', marginBottom: '10px', marginTop: '10px' }}>
        <Filter />
      </div> */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, max-content))',
          gridTemplateRows: 'repeat(auto-fill)',
          justifyContent: 'center',
          gridGap: '20px 0px',
          margin: 'auto',
        }}
      >
        {currentProducts.map((data, index) => (
          <ProductCard key={index} product={data} />
        ))}
      </div>

      {/* Pagination controls */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {Array.from({ length: Math.ceil(arr.length / productsPerPage) }, (_, index) => (
          <button
            key={index}
            style={{
              margin: '5px',
              padding: '5px 10px',
              background: currentPage === index + 1 ? 'gray' : 'transparent',
              color: currentPage === index + 1 ? 'white' : 'black',
              border: '1px solid gray',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
