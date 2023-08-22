import React, {useState, useEffect} from 'react'
import axios from 'axios';

import Categories from '../component/categories/Categories'

const CategoriesPage = () => {
  const [cats, setcats] = useState([]);
  useEffect(()=>{
     axios.get(`https://dummyjson.com/products/categories`).then((res)=> setcats(res.data))
  },[])
  console.log(cats);

  return (
    <div className='mx-auto container py-10'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10 py-16 '>
          {
            cats.map((cat, index) => {
                  return(
                      <Categories prdData= {cat} key={index} />
                  )
              })
          }
      </div>
    </div>
  )
}

export default CategoriesPage