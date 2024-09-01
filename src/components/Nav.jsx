import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';

const Nav = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-4/5 bg-white p-4 z-10 transition-all ${hasScrolled ? 'drop-shadow-md' : ''}`}>
            <div className='flex items-center justify-between'>
                {/* Left side for large screens, hidden on small screens */}
                <div className='hidden md:flex items-center space-x-4'>
                    <ul className='flex space-x-4'>
                        <li><a href="#" className='text-black text-sm font-semibold'>HOME</a></li>
                        <li><a href="#" className='text-black text-sm font-semibold'>EXPLORE</a></li>
                        <li><a href="#" className='text-black text-sm font-semibold'>FAQ</a></li>
                    </ul>
                </div>

                {/* Logo centered on all screens */}
                <div className='flex items-center justify-center'>
                    <a href="#">
                        <img className='w-30 h-10' src={logo} alt="logo" />
                    </a>
                </div>

                {/* Right side icons for large screens, button and sign-in on small screens */}
                <div className='flex items-center space-x-4'>
                    <FaShoppingCart className="hidden md:block text-black" />
                    <button className="text-black md:hidden" onClick={toggleMenu}>
                        <FaBars />
                    </button>
                    <FaUser className="text-black" />
                </div>
            </div>

            {/* Dropdown Menu for small screens */}
            <div className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg px-2 md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
                <ul className='flex flex-col space-y-2'>
                    <li><a href="#" className='text-black text-sm font-semibold'>HOME</a></li>
                    <li><a href="#" className='text-black text-sm font-semibold'>EXPLORE</a></li>
                    <li><a href="#" className='text-black text-sm font-semibold'>FAQ</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
