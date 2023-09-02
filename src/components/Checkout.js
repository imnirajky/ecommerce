import React from 'react';

const Checkout = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Shipping Information</h3>
                <div className="mt-2">
                    <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
                    <input id="name" name="name" type="text" className="border rounded-md px-2 py-1 w-full" placeholder="Enter Name" />
                </div>
                <div className="mt-2">
                    <label htmlFor="mobile" className="block text-gray-700 font-semibold">Mobile number:</label>
                    <input id="mobile" name="mobile" type="text" className="border rounded-md px-2 py-1 w-full" placeholder="Enter Phone Number " />
                </div>
                <div className="mt-2">
                    <label htmlFor="address" className="block text-gray-700 font-semibold">Address:</label>
                    <input id="address" name="address" type="text" className="border rounded-md px-2 py-1 w-full" placeholder="123 Main St" />
                </div>
                <div className="mt-2">
                    <label htmlFor="pincode" className="block text-gray-700 font-semibold">Pincode:</label>
                    <input id="pincode" name="pincode" type="text" className="border rounded-md px-2 py-1 w-full" placeholder="12345" />
                </div>
                <div className="mt-2">
                    <label htmlFor="state" className="block text-gray-700 font-semibold">State:</label>
                    <input id="state" name="state" type="text" className="border rounded-md px-2 py-1 w-full" placeholder="Bihar" />
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Payment Information</h3>
                <div className="mt-2">
                    <label htmlFor="cardNumber" className="block text-gray-700 font-semibold">Card Number:</label>
                    <input id="cardNumber" name="cardNumber" type="text" className="border rounded-md px-2 py-1 w-full" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="mt-2">
                    <label htmlFor="cardAddress" className="block text-gray-700 font-semibold">Billing Address:</label>
                    <input id="cardAddress" name="cardAddress" type="text" className="border rounded-md px-2 py-1 w-full" placeholder="Billing Address" />
                </div>
                <div className="mt-2">
                    <label htmlFor="cvv" className="block text-gray-700 font-semibold">CVV:</label>
                    <input id="cvv" name="cvv" type="password" className="border rounded-md px-2 py-1 w-full" placeholder="123" />
                </div>
            </div>
            <button className="bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600">Place Order</button>
        </div>
    );
}

export default Checkout;
