import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import {Link} from 'react-router-dom';

const Productkart = () => {
  const cartItems = useSelector(store=>store.cart.items);
  let itemCount = 0;
  let amount = 0;


cartItems.forEach((item) => {
  itemCount += item.quantity;
  amount += item.quantity * item.price;
});
  return (
    <div className='flex justify-evenly'>
<div>
{cartItems.map((cartItemProduct)=>(
    <CartProduct key={cartItemProduct.id} cartItem={cartItemProduct}/>)
    )}
</div>
<div className='w-40 h-24 m-4 p-2'>
  <h2 className='text-xl font-bold'>Item Count: {itemCount}</h2>
  <Link to="/checkout">
  <button className='text-xl font-bold text-white bg-cyan-600 rounded'>Pay Total Rs.{amount}</button>
  </Link>
</div>
    </div>
  )
}

export default Productkart;
