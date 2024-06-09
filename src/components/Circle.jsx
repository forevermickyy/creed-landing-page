import React from 'react'
import p6 from '../assets/images/p6.jpg'
import p5 from '../assets/images/p5.jpg'
import p4 from '../assets/images/p4.jpg'
import p3 from '../assets/images/p3.jpg'

const Circle = () => {
  return (
    <div className='p-4 flex justify-between mb-8'>
      <div className='text-center'>
      <div className='w-16 h-16 bg-gray rounded-full overflow-hidden mx-auto mb-2 flex items-center justify-center border-4 border-double border-black'>
      <img src={p5} alt="p6" className='w-full h-full object-cover' />
      </div>
      <p>Seasonal Scents</p>
      </div>
      <div className='text-center'>
      <div className='w-16 h-16 bg-gray rounded-full overflow-hidden mx-auto mb-2 flex items-center justify-center border-4 border-double border-black'>
      <img src={p4} alt="p6" className='w-full h-full object-cover' />
      </div>
      <p>Travel With Creed</p>
      </div>
      <div className='text-center'>
      <div className='w-16 h-16 bg-gray rounded-full overflow-hidden mx-auto mb-2 flex items-center justify-center border-4 border-double border-black'>
      <img src={p6} alt="p6" className='w-full h-full object-cover' />
      </div>
      <p>24/7 Support</p>
      </div>
      <div className='text-center'>
      <div className='w-16 h-16 bg-gray rounded-full overflow-hidden mx-auto mb-2 flex items-center justify-center border-4 border-double border-black'>
      <img src={p3} alt="p6" className='w-full h-full object-cover' />
      </div>
      <p>One Spray Wonder</p>
      </div>
    </div>
    
  )
}

export default Circle