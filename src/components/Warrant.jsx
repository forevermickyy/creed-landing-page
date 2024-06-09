import React from 'react'

import { HiCheckBadge } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidLeaf } from "react-icons/bi";


const Warrant = () => {
  return (
    <div className='py-12 px-6 bg-white'>
      <div className='flex justify-between'>

        <div className='w-1/3 bg-gray-200 rounded-lg overflow-hidden'>
          <div className='p-4 flex flex-col items-center'>
            <HiCheckBadge className=' text-5xl text-black mb-4'/>
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>Satisfaction Guaranteed</h2>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className='w-1/3 bg-gray-200 rounded-lg overflow-hidden mx-4'>
          <div className='p-4 flex flex-col items-center'>
            <TbTruckDelivery className=' text-5xl text-black mb-4'/>
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>Free Shipping</h2>
            <p className='text-gray-600'> Dignissimos natus numquam inventore rem vel ducimus.</p>
          </div>
        </div>

        <div className='w-1/3 bg-gray-200 rounded-lg overflow-hidden'>
          <div className='p-4 flex flex-col items-center'>
            <BiSolidLeaf className=' text-5xl text-black mb-4'/>
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>Naturally Awesome</h2>
            <p className='text-gray-600'>est, quia porro eest, consequuntur quidem quam.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Warrant