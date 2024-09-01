import React from 'react';
import p2 from '../assets/images/p2.jpg';

const Heading = () => {
  return (
    <div className='w-4/5 mx-auto md:flex md:items-center md:space-x-6'>
      {/* Text and Button Section */}
      <div className='flex flex-col justify-center items-center text-center p-4 space-y-4 md:p-0 md:text-left md:w-1/2 md:order-1'>
        <h1 className='text-black text-5xl pt-32 md:text-5xl font-bold'>
          Discover Timeless Elegance with Creed
        </h1>
        <p className='text-black text-base pt-5 md:text-lg'>
          Elevate your essence with our signature collection of finely crafted fragrances
        </p>
        <div className='pt-8'>
        <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
          Buy Now
        </button>
        </div>
      </div>

      {/* Image Section */}
      <div className='md:w-1/2 md:order-2'>
        <img src={p2} alt="bp" className='w-full h-auto md:rounded-lg' />
      </div>
    </div>
  );
};

export default Heading;
