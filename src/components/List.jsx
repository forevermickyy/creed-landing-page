import React from 'react';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import { SiApachespark, SiApachesolr, SiAppium, SiArcgis, SiBigbluebutton } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa";

const List = () => {
  return (
    <div className='py-12 px-6 bg-white'>
      <h1 className='text-center text-3xl font-bold text-black mb-8'>
        Creed Secrets: Master Your Scents
      </h1>
      
      <div className='flex flex-col lg:flex-row lg:justify-between lg:w-9/12 w-full mx-auto'>
        
        {/* Left Image */}
        <div className='w-full lg:w-3/12 mb-8 lg:mb-0 flex justify-center lg:justify-start'>
          <img src={p1} alt="Left Image" className='w-full lg:w-4/5 transform lg:rotate-45' />
        </div>
        
        {/* Info Section */}
        <div className='w-full lg:w-4/12 mb-8 lg:mb-0'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
              <SiApachespark />
              <span className='px-2 text-center flex-1'>Our Heritage</span>
              <FaAngleDown className='ml-auto' />
            </div>

            <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
              <SiAppium />
              <span className='px-2 text-center flex-1'>Our Ingredients</span>
              <FaAngleDown className='ml-auto' />
            </div>

            <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
              <SiApachesolr />
              <span className='px-2 text-center flex-1'>Craftsmanship</span>
              <FaAngleDown className='ml-auto' />
            </div>

            <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
              <SiArcgis />
              <span className='px-2 text-center flex-1'>Maintenance</span>
              <FaAngleDown className='ml-auto' />
            </div>

            <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
              <SiBigbluebutton />
              <span className='px-2 text-center flex-1'>Visit Us</span>
              <FaAngleDown className='ml-auto' />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className='w-full lg:w-3/12 mb-8 lg:mb-0 flex justify-center lg:justify-end'>
          <img src={p2} alt="Right Image" className='w-full lg:w-4/5 transform lg:-rotate-45' />
        </div>
      </div>
    </div>
  );
};

export default List;
