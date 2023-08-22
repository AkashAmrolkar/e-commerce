import React, { useState } from 'react';
import logo from '../../assets/image001.gif'
import { Link } from 'react-router-dom';


import { BiMenu,  } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-bold">
              <Link to={'/'}>
                <img src={logo} alt='logo' height={50} width={50} />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link to={'/products'} className=' text-xl font-medium text-white capitalize hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-all active:text-orange-600'>Products </Link>
              <Link to={'/products/categories'} className=' text-xl text-white font-medium capitalize hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-all'>Categories </Link>
              <button className=' bg-orange-600 text-white caption-bottom font-medium border rounded-3xl px-6 py-3 hover:bg-transparent hover:text-orange-600 hover:border-orange-600 transition-all'>login</button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-xl"
            >
              {isOpen ? <MdClose /> : <BiMenu />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col gap-4">
            <Link to={'/products'} className=' text-xl text-white font-medium capitalize hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-all active:text-orange-600'>Products </Link>
            <Link to={'/products/categories'} className=' text-xl text-white font-medium capitalize hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-all'>Categories </Link>
            <button className='w-fit bg-orange-600 text-black caption-bottom font-medium border-transparent rounded-3xl hover:bg-transparent hover:text-orange-600 hover:border-orange-600 transition-all'>login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;