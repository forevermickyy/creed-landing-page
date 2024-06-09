import React from 'react'
import p4 from '../assets/images/p4.jpg'
import p5 from '../assets/images/p5.jpg'
import p3 from '../assets/images/p3.jpg'
const Explore = () => {
  return (
    <div className='py-4 px-6 bg-white'>
      <h1 className='text-center text-3xl font-bold text-gray-800 ml-8 mb-8'>Everyday Elegance Get The Most Out Of Your Creed</h1>
      <div className='flex justify-between items-center mb-8'>

        <div className='flex-1 mr-4'>
          <div className='bg-black rounded-lg overflow-hidden'>
            <img src={p4} alt="p4" className='w-full h-64 object-cover'/>
          <div className='p-4'>
            <h2 className='text-xl font-semibold text-white mb-2'>Experience Creed</h2>
            <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          </div>
        </div>

        <div className='flex-1 mx-2'>
          <div className='bg-black rounded-lg overflow-hidden'>
            <img src={p5} alt="p4" className='w-full h-64 object-cover'/>
          <div className='p-4'>
            <h2 className='text-xl font-semibold text-white mb-2'>Explore Our Collections</h2>
            <p className='text-gray-400 text-sm'> Similique repellendus asperiores unde. </p>
          </div>
          </div>
        </div>

        <div className='flex-1 ml-4'>
          <div className='bg-black rounded-lg overflow-hidden'>
            <img src={p3} alt="p4" className='w-full h-64 object-cover'/>
          <div className='p-4'>
            <h2 className='text-xl font-semibold text-white mb-2'>Understand Our Craft</h2>
            <p className='text-gray-400 text-sm'>repellat eveniet ratione quisquam placeat.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore