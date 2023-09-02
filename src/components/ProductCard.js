import React from 'react';
import { addItem, removeItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductCard = (props) => {
  const {title, price, images} = props.productDetail;
  const [added, setAdded] = useState(true);
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(addItem(props.productDetail));
    setAdded(false);
  }

  function handleRemoveItem(){
    dispatch(removeItem(props.productDetail));
    setAdded(true);
  }


  return (
    <div className="bg-white border rounded-md shadow-md hover:drop-shadow-xl m-4 p-4 w-72">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={images[1]}
          alt="product"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-lg text-gray-600">Price: Rs. {price}</p>
      </div>
      
      <div className="mt-4">
        {
        (added?
        (<button onClick={()=>handleAddItem()} className="px-4 py-2 bg-lime-500 text-white rounded-md hover:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-300">
          Add to Cart
        </button>):
        (<button onClick={()=>handleRemoveItem()} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-lime-300">
          Remove from Cart
        </button>))
        }
        
      </div>
    </div>
  );
};

export default ProductCard;
