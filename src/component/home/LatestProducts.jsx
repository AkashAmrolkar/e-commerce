import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductLayout from '../products/ProductLayout';
import { Link } from 'react-router-dom';

const LatestProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
       axios.get('https://dummyjson.com/products').then((res)=> setProducts(res.data.products))
    },[])
    console.log(products);
  return (
    <div className='my-10'>
        <div className=' md:w-[600px] mx-auto '>
            <h2 className='text-center font-medium text-3xl py-4 uppercase tracking-wide'>featured Products</h2>
            <div className='text-center text-md text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-16 px-4'>
            {
                products.slice(0, 8).map((product, index) => {
                    return(
                        <ProductLayout prdData= {product} key={index} />
                    )
                })
            }
        </div>
        <div className='  text-white font-bold text-lg text-center capitalize w-full'>
            <Link to={'/products'} className=' w-fit bg-orange-600 px-6 py-4 rounded-lg hover:bg-transparent hover:text-orange-600 hover:border-2 hover:border-orange-600 transition-all'>View more</Link>
        </div>
    </div>
    
  )
}

export default LatestProducts