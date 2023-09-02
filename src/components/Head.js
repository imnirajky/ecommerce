import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Head = () => {
  const cartItems = useSelector(store=>store.cart.items);
  return (
    <div className="h-20 bg-green-600 drop-shadow-2xl border-b-2 flex justify-between p-4">
      <div className="text-2xl text-white font-semibold">Kart.com</div>
      <div className="flex justify-between">
        <Link to="/cart">
        <h2 className="text-xl pt-2 text-red-500 font-bold">Cart-{cartItems.length}</h2>
        </Link>
        <img className="w-10 m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1kdAtECdPnjZIJGVUCKQXctDImLX0Kt1Xg&usqp=CAU" alt="kart" />
        <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user" />
        <h2 className="text-lg pt-2 text-white font-semibold">Niraj</h2>
      </div>
    </div>
  )
}

export default Head
