
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';
import SingleProduct from '../component/singleproduct/SingleProduct';
import RelatedProduct from '../component/singleproduct/RelatedProduct';


const SingleProductPage = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

    useEffect(()=>{
       axios.get(`https://dummyjson.com/products/${id}`).then((res)=> setProducts(res.data))
    },[id])

    console.log("Products from single product page",products );

  return (
    <div className='container mx-auto py-10'>
      <SingleProduct product={products} />
      <RelatedProduct category = {products?.category} />
    </div>
  )
}

export default SingleProductPage