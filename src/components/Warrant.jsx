import React from 'react';
import { HiCheckBadge } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidLeaf } from "react-icons/bi";

const Warrant = () => {
  return (
    <div className='py-12 px-6 bg-white'>
      <div className='w-11/12 lg:w-4/5 mx-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          
          {/* Satisfaction Guaranteed */}
          <div className='w-full lg:w-1/3 bg-gray-200 rounded-lg overflow-hidden mb-4 lg:mb-0'>
            <div className='p-4 flex flex-col items-center'>
              <HiCheckBadge className='text-5xl text-black mb-4'/>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>Satisfaction Guaranteed</h2>
              <p className='text-gray-600 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          {/* Free Shipping */}
          <div className='w-full lg:w-1/3 bg-gray-200 rounded-lg overflow-hidden mb-4 lg:mb-0 lg:mx-4'>
            <div className='p-4 flex flex-col items-center'>
              <TbTruckDelivery className='text-5xl text-black mb-4'/>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>Free Shipping</h2>
              <p className='text-gray-600 text-center'>Dignissimos natus numquam inventore rem vel ducimus.</p>
            </div>
          </div>

          {/* Naturally Awesome */}
          <div className='w-full lg:w-1/3 bg-gray-200 rounded-lg overflow-hidden'>
            <div className='p-4 flex flex-col items-center'>
              <BiSolidLeaf className='text-5xl text-black mb-4'/>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>Naturally Awesome</h2>
              <p className='text-gray-600 text-center'>est, quia porro eest, consequuntur quidem quam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warrant;
