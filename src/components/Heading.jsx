import React from 'react'
import p2 from '../assets/images/p2.jpg'
const Heading = () => {
  return (
    <div className='flex justify-between items-center py-12 px-6 bg-white'>
      <div className='max-w-md'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Discover Timeless <br />Elegance with Creed</h1>
      <p className='text-gray-600 mb-4'>elevate your essence with our signature <br /> collection of finely crafted fragrances</p>
      
      <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Buy Now</button> 
      </div>
      <div>
        <img src={p2} alt="bp" className='rounded-lg'/>
      </div>
    </div>
  )
}

export default Heading;