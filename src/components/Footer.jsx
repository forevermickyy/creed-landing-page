import React from 'react'
import appplay from '../assets/images/appplay.jpg'
const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto flex  lg:flex-row lg:justify-between'>

        <div className='w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-8'>
          <h3 className='text-lg font-semibold mb-4'>Adresses</h3>
        <ul>
          <li>222 Miotso St, Accra</li>
          <li>432 Santa St, Odorkor</li>
          <li>433 Kasoa St, Weija</li>
        </ul>
        </div>

        <div className='w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-8'>
          <h3 className='text-lg font-semibold mb-4'>Adresses</h3>
        <ul>
          <li>222 Miotso St, Accra</li>
          <li>432 Santa St, Odorkor</li>
          <li>433 Kasoa St, Weija</li>
        </ul>
        </div>

        <div className='w-full lg:w-1/3'>
          <div className='mb-4 lg:mb-0'>
            <img src={appplay} alt="" className='mb-2' />
            <img src="" alt="" />
          </div>
        </div>
        <div>
       
        </div>
        
      </div>
      <p className='text-center text-sm'>&copy; meeee 2006</p>
    </footer>
  )
}

export default Footer