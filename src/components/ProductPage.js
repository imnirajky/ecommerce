import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      setAllProducts(products);
      setFilteredProducts(products);
      console.log(products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap justify-between p-8'>
      {
      filteredProducts.map((productItem) => (
        <ProductCard productDetail = {productItem}/>
      ))
      }
    </div>
  );
};

export default ProductPage;
