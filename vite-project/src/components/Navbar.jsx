import React, { useEffect, useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navbarRef} className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="text-white text-2xl font-bold">
          MyPortfolio
        </div>

  
        <div className="text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

       
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 bg-gray-800 md:bg-transparent w-full md:w-auto absolute md:static top-16 left-0 md:top-0 p-4 md:p-0`}
        >
          <li className="my-2 md:my-0">
            <AnchorLink
              href="#home"
              offset={navbarHeight} 
              className="text-white hover:text-gray-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </AnchorLink>
          </li>
          <li className="my-2 md:my-0">
            <AnchorLink
              href="#about"
              offset={navbarHeight} 
              className="text-white hover:text-gray-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </AnchorLink>
          </li>
          <li className="my-2 md:my-0">
            <AnchorLink
              href="#work"
              offset={navbarHeight} 
              className="text-white hover:text-gray-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              My Work
            </AnchorLink>
          </li>
          <li className="my-2 md:my-0">
            <AnchorLink
              href="#footer"
              offset={navbarHeight} 
              className="text-white hover:text-gray-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;