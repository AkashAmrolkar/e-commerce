
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductLayout from '../products/ProductLayout';


const RelatedProduct = ({category}) => {

  const [products, setProducts] = useState([]);
    useEffect(()=>{
       axios.get(`https://dummyjson.com/products/category/${category}`).then((res)=> setProducts(res.data.products))
    },[])
    console.log(products);

  return (
    <div>
      <h2 className='text-center font-bold text-3xl pt-8'>Related Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10 py-16 '>
        {
            products.map((product, index) => {
                return(
                    <ProductLayout prdData= {product} key={index} />
                )
            })
        }
    </div>
    </div>
  );
};

export default RelatedProduct;