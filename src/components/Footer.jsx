import React from 'react'
import logo from '../assets/images/images.png';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
       <div className='container mx-auto px-6'>
      <div className='flex flex-col md:flex-col lg:flex-row lg:justify-between'>
        
        {/* Address Column 1 */}
        <div className='w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mr-8'>
          <h3 className='text-lg font-semibold mb-4'>Addresses</h3>
          <ul>
            <li>222 Miotso St, Accra</li>
            <li>432 Santa St, Odorkor</li>
            <li>433 Kasoa St, Weija</li>
          </ul>
        </div>

        {/* Address Column 2 */}
        <div className='w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mr-8'>
          <h3 className='text-lg font-semibold mb-4'>Addresses</h3>
          <ul>
            <li>222 Miotso St, Accra</li>
            <li>432 Santa St, Odorkor</li>
            <li>433 Kasoa St, Weija</li>
          </ul>
        </div>

        {/* Image Column */}
        <div className='w-full lg:w-1/3'>
          <div className='mb-4 lg:mb-0 flex items-center justify-center'>
          <img className='' src={logo} alt="logo" />
          </div>
        </div>
        
      </div>
    </div>
      <p className='text-center text-sm'>&copy; MickyyDevs 2023</p>
    </footer>
  )
}

export default Footer