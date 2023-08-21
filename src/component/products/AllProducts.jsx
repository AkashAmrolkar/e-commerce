import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductLayout from '../products/ProductLayout';
import { Link } from 'react-router-dom';
const AllProducts = () => {
  const [products, setProducts] = useState([]);
    useEffect(()=>{
       axios.get('https://dummyjson.com/products').then((res)=> setProducts(res.data.products))
    },[])
    console.log(products);

  return (
    <>
        <h2 className='text-center font-bold text-3xl py-8'>Our Products</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-16 px-4'>
            {
                products.map((product, index) => {
                    return(
                        <ProductLayout prdData= {product} key={index} />
                    )
                })
            }
        </div>
    </>
    
  )
}

export default AllProducts