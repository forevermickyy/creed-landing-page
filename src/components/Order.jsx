import React, { useState } from 'react';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';

const Order = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='flex flex-col items-center py-4 px-6 bg-white'>
      <h1 className='text-center text-3xl font-bold text-gray-800 mb-4'>
        Complete Your Order With Confidence
      </h1>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:w-9/12 w-full'>
        
        {/* Image Section */}
        <div className='w-full lg:w-1/2 p-6'>
          <img src={p3} alt="Main Product" className='w-full rounded-lg mb-4' />
          <div className='flex overflow-x-auto space-x-2'>
            <img src={p3} alt="Thumbnail 1" className='w-20 rounded-2xl' />
            <img src={p4} alt="Thumbnail 2" className='w-20 rounded-2xl' />
            <img src={p5} alt="Thumbnail 3" className='w-20 rounded-2xl' />
          </div>
        </div>

        {/* Details Section */}
        <div className='w-full lg:w-1/2 p-6'>
          <h1 className='text-2xl font-bold mb-2'>
            Creed: Green Irish Tweed
            <br />
            <small className='text-sm font-thin'>The Irishman's Love</small>
          </h1>
          <p className='text-sm mb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime voluptate eaque ab, voluptatibus nulla repellat itaque odit, soluta libero recusandae iure, qui nemo? Placeat, dicta tenetur.
          </p>
          <button className='bg-black text-white p-2 rounded-lg mb-4'>
            <small>The Price In Ghana Cedis Is</small>
            <br />
            <p className='font-semibold text-2xl'>GHS 1,500</p>
          </button>
          <p className='mb-2'><small>Quantity</small></p>
          <div className='flex items-center space-x-2 mb-4'>
            <button className='bg-gray-300 text-white px-2.5 py-0.5 rounded-3xl' onClick={decreaseQuantity}>-</button>
            <span className='py-1 px-3 bg-white border rounded-3xl'>{quantity}</span>
            <button className='bg-gray-300 text-white px-2.5 py-0.5 rounded-3xl' onClick={increaseQuantity}>+</button>
          </div>
          <div className='space-y-2'>
            <button className='bg-black text-white py-1 px-5 rounded-3xl text-sm w-72'>
              Add To Cart
            </button>
            <button className='bg-black text-white py-1 px-5 rounded-3xl text-sm w-72'>
              Pay with G Pay
            </button>
            <p className='text-sm'><small>Use other platforms</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
