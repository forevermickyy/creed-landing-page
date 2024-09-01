import React from 'react';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
import p3 from '../assets/images/p3.jpg';

const Explore = () => {
  return (
    <div className='py-4 px-6 bg-white'>
      <h1 className='text-center text-3xl font-bold text-gray-800 mb-8'>
        Everyday Elegance: Get The Most Out Of Your Creed
      </h1>
      
      {/* Container for responsive layout */}
      <div className='flex flex-col md:flex-row md:justify-between items-center md:space-x-4'>
        
        {/* First Image Block */}
        <div className='flex-1 mb-4 md:mb-0'>
          <div className='bg-black rounded-lg overflow-hidden'>
            <img src={p4} alt="Experience Creed" className='w-full h-64 object-cover'/>
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-white mb-2'>Experience Creed</h2>
              <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>

        {/* Second Image Block */}
        <div className='flex-1 mb-4 md:mb-0'>
          <div className='bg-black rounded-lg overflow-hidden'>
            <img src={p5} alt="Explore Our Collections" className='w-full h-64 object-cover'/>
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-white mb-2'>Explore Our Collections</h2>
              <p className='text-gray-400 text-sm'>Similique repellendus asperiores unde.</p>
            </div>
          </div>
        </div>

        {/* Third Image Block */}
        <div className='flex-1 mb-4 md:mb-0'>
          <div className='bg-black rounded-lg overflow-hidden'>
            <img src={p3} alt="Understand Our Craft" className='w-full h-64 object-cover'/>
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-white mb-2'>Understand Our Craft</h2>
              <p className='text-gray-400 text-sm'>Repellat eveniet ratione quisquam placeat.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Explore;
