import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = 
            window.pageYOffset;

            if (scrollTop > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

            return () => {

                window.removeEventListener("scroll", handleScroll);
            };
            }, []);

  return (
    <nav className='flex items-center justify-between bg-white p-2 ${handleScrolled ? "shadow-md" : ""}'>
        <div className='flex items-center space-x-4'>
            <ul className='flex space-x-4'>
                <li><a href="#" className='text-black text-sm font-semibold'>HOME</a></li>
                <li><a href="#" className='text-black text-sm font-semibold'>EXPLORE</a></li>
                <li><a href="#" className='text-black text-sm font-semibold'>FAQ</a></li>
            </ul>
        </div>
        <div className='flex items-center justify-center'>
            <a href="#"><img className='w-30 h-10' src={logo} alt="logo" /></a>
        </div>
        <div className='flex items-center space-x-4'>
        <FaUser />
        <FaShoppingCart />
        </div>
    </nav>
  )
}

export default Nav
