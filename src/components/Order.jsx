import React, { useState } from 'react'
import p3 from '../assets/images/p3.jpg'
import p4 from '../assets/images/p4.jpg'
import p5 from '../assets/images/p5.jpg'

const Order = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity +1);
  };
  const decreaseQuantity = () => {
    if(quantity> 0){
    setQuantity(quantity -1);
  }
  };

  return (
    <div>
       <h1 className='text-center text-3xl font-bold text-gray-800 ml-8 mb-4'>Complete Your Order With Confidence</h1>
    <div className='flex'>
      
      <div className='w-1/2 p-6'>
        <img src={p3} alt="" className='w-full rounded-lg' />
        <div className='flex py-2 px-2'>
        <img src={p3} alt="" className='px-2 w-20 rounded-2xl' />
        <img src={p4} alt="" className='px-2 w-20 rounded-2xl' />
        <img src={p5} alt="" className='px-2 w-20 rounded-2xl' />
        
        </div>
        
        
      </div>
      <div className='w-1/2 p-6'>
        <h1 className='text-2xl font-bold mt-4 mb-2'>Creed: Green Irish Tweed <br /><small className='text-sm font-thin '>The Irishman's Love </small></h1>
        <p className='text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime voluptate eaque ab, voluptatibus nulla repellat itaque odit, soluta libero recusandae iure, qui nemo? Placeat, dicta tenetur.</p>
        <button className='bg-black text-white p-2 rounded-lg'><small className=''>The Price In Ghana Cedis Is</small> <br /> <p className='font-semibold text-2xl '>GHS 1,500</p> </button>
        <p><small>Quantity</small></p>
        <button className='border-2 px-2 py-1 border-black rounded-3xl'>
        <button className='bg-gray-300 text-white px-2.5 py-0.5  rounded-3xl' onClick={decreaseQuantity}> - </button>
        <span className='py-1 px-3 bg-white'>{quantity}</span>
        <button className='bg-gray-300 text-white px-2.5 py-0.5 rounded-3xl' onClick={increaseQuantity}> + </button>
        </button>
        <div className='py-1 px-16'>
          <p><button className='bg-black text-white py-1 px-5 rounded-3xl  text-sm'>Add To Cart</button></p>
          <p className='py-1'><button className='bg-black text-white py-1 px-5 rounded-3xl text-sm'>Pay with G Pay</button></p>
          <p><small>Use other platforms</small></p>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Order
