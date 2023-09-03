import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      setAllProducts(products);
      // setFilteredProducts(products);
      console.log(products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  // function incPrice(){
  //   const newArray = allProducts.sort((a, b)=>{
  //     return a.price-b.price;
  //   });
  //   // console.log(allProducts);
  //   setAllProducts(newArray);
  // }

  // function decPrice(){
  //   const newArray = allProducts.sort((a, b)=>{
  //     return b.price-a.price;
  //   });    
  //   // console.log(allProducts);
  //   setAllProducts(newArray);
  // }

  function incPrice() {
    const sortedProducts = [...allProducts].sort((a, b) => a.price - b.price);
    console.log(sortedProducts);
    setAllProducts(sortedProducts);
  }
  
  function decPrice() {
    const sortedProducts = [...allProducts].sort((a, b) => b.price - a.price);
    console.log(sortedProducts);
    setAllProducts(sortedProducts);
  }
  


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='flex p-2'>
        <button className='bg-sky-500 rounded w-auto text-white m-2' onClick={()=>incPrice()}>Sort By Price Low to High</button>
        <button className='bg-sky-500 rounded w-auto text-white m-2' onClick={()=>decPrice()}>Sort By Price High to Low</button>
      </div>
      <div className='flex flex-wrap justify-between p-8'>
      {
      allProducts.map((productItem) => (
        <ProductCard productDetail = {productItem}/>
      ))
      }
    </div>
    </div>
  );
};

export default ProductPage;
