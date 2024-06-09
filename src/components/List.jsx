import React from 'react'
import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.jpg'
import { SiApachespark } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa";
import { SiApachesolr } from "react-icons/si";
import { SiAppium } from "react-icons/si";
import { SiArcgis } from "react-icons/si";
import { SiBigbluebutton } from "react-icons/si";

const List = () => {
  return (
    <div className='py-12 px-6 bg-white'>
      <h1 className=' text-center text-3xl font-bold text-black mb-8'>Creed Secrets Master Your Scents</h1>
    <div className='flex justify-between'>
      <div className='w-3/12'>
        <img src={p1} alt="" className='w-full transform rotate-45' />
      </div>

      <div className='w-4/12'>
        <div className='flex flex-col gap-2'>

          <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
            <SiApachespark/>
            <span className='px-2'>Our Heritage</span>
            <FaAngleDown className='ml-auto'/>
          </div>

          <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
            <SiAppium/>
            <span className='px-2'>Our Ingredients</span>
            <FaAngleDown className='ml-auto'/>
          </div>

          <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
            <SiApachesolr/>
            <span className='px-2'>Craftmanship</span>
            <FaAngleDown className='ml-auto'/>
          </div>

          <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
            <SiArcgis/>
            <span className='px-2'>Maintenance</span>
            <FaAngleDown className='ml-auto'/>
          </div>

          <div className='flex items-center justify-between text-white bg-black px-4 py-2 rounded-md'>
            <SiBigbluebutton/>
            <span className='px-2'>Visit Us</span>
            <FaAngleDown className='ml-auto'/>
          </div>
      
      </div>
      </div>

      <div className='w-3/12'>
        <img src={p2} alt="" className='w-full transform -rotate-45' />
      </div>
    </div>
    </div>
  )
}
export default List