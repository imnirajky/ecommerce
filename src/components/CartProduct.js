import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {removeItem, addQuantity, removeQuantity} from '../utils/cartSlice';

const CartProduct = (props) => {
const {title, price, images} = props.cartItem;
const [quantity, setQuantity] = useState(1);
console.log(props.cartItem);
// const cartItems = useSelector(store=>store.cart.items);
const dispatch = useDispatch();


function incQuantity(){
    const current = quantity+1;
    setQuantity(current);
    dispatch(addQuantity(props.cartItem));
}
function decQuantity(){
    const current = quantity-1;
    if(current>0)
    setQuantity(current);
    dispatch(removeQuantity(props.cartItem));
}
function removeProduct(){
    dispatch(removeItem(props.cartItem));
}
  return (
      <div className="flex bg-white border-2 border-green-400 m-2 rounded shadow-md p-4 w-auto justify-between">
      <div className="w-1/3 flex justify-center items-center">
        <img
          className="w-36 h-36 object-contain"
          src={images[0]}
          alt="product"
        />
         <div className="flex space-x-2">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="increase quantity"
              onClick={()=>incQuantity()}
            />
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/56/56889.png"
              alt="decrease quantity"
              onClick={()=>decQuantity()}
            />
            <img
              className="w-6 h-6"
              src="https://static.thenounproject.com/png/1144254-200.png"
              alt="remove product"
              onClick={()=>removeProduct()}
            />
          </div>
      </div>

      <div className="flex flex-col justify-between pl-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <h4 className="text-lg font-semibold">Price: Rs. {price}</h4>
        <h4 className="text-lg font-semibold">Quantity: {quantity}</h4>
      </div>
    </div>
  );
}

export default CartProduct;
