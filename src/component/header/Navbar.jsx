import React from 'react'
import logo from '../../assets/image001.gif'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-white shadow py-4'>
      <div className='container flex justify-between mx-auto items-center'>
          <div className='logo'>
            <Link to={'/'}>
              <img src={logo} alt='logo' height={80} width={80} />
            </Link>
          </div>
          <div className='flex gap-5 items-center'>
            <Link to={'/products'} className=' text-xl font-medium capitalize hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-all active:text-orange-600'>Products </Link>
            <Link to={'/products/categories'} className=' text-xl font-medium capitalize hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-all'>Categories </Link>
            <button className=' bg-orange-600 text-black caption-bottom font-medium border rounded-3xl px-6 py-3 hover:bg-transparent hover:text-orange-600 hover:border-orange-600 transition-all'>login</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar