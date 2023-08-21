import React from 'react'
import { Link } from 'react-router-dom'
import { BiCart, BiStar } from 'react-icons/bi'

const ProductLayout = ({prdData}) => {
  
  return (
    <div className='bg-white shadow-md rounded-s-lg flex flex-col gap-5'>
    <Link to={`/products/${prdData.id}`} className='hover:opacity-70'>
      <img src={prdData.thumbnail} alt={prdData.title} className=' object-fill h-[300px] w-full' />
      </Link>
      <div className='flex gap-4 flex-col'>
        <Link to={`/products/${prdData.id}`} className='hover:text-orange-600'>
          <p className=' font-semibold text-center text-2xl'>{prdData.title}</p>
          </Link>
          <div className='flex justify-center items-center'>
            <BiStar fill=' orange' /><BiStar fill=' orange' /><BiStar fill=' orange' /><BiStar fill=' orange' /><BiStar fill=' orange' />({prdData.rating})
          </div>
      </div>
      <div className='flex justify-between border-t border-gray-200 py-4'>
        <p className=' border-r border-gray-200 w-1/2 text-center text-2xl'><b>$</b>{prdData.price}</p>
        <div className='font-medium text-xl capitalize w-1/2 text-center flex justify-center items-center gap-3 hover:text-orange-600 hover:cursor-pointer'><BiCart size={30} />Add to cart</div>
      </div>
    
    </div>
  )
}

export default ProductLayout