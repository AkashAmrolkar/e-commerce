
import { useState } from 'react';
import { BiCart, BiStar } from 'react-icons/bi'
import { Link } from 'react-router-dom';
// import ImageGallery from "react-image-gallery";

const SingleProduct = ({product}) => {
  const [value, setvalue] = useState(1);
  const [disable, setDisable] = useState(false);
    
  const valDec = () => {
    
      if((value > 1) && (value <= product.stock)){
        setvalue(value-1);
      }
  }

  const valInc = () => {
      if(value < product.stock){
        setvalue(value+1)
      }

  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-4'>
        <div className="flex justify-center">
          {/* <ImageGallery items={product.images} /> */}
          <img src={product.thumbnail} />
        </div>
        <div className='flex flex-col gap-5'>
          <p className=" text-3xl font-semibold ">{product.title}</p>
          <div className='flex justify-start items-center'>
            <BiStar fill=' orange' /><BiStar fill=' orange' /><BiStar fill=' orange' /><BiStar fill=' orange' /><BiStar fill=' orange' />({product.rating})
          </div>
          <div>
            <span className='text-2xl font-bold'><b>$</b>{product.price} </span> 
            <span className='text-lg'> ({product.discountPercentage}% Off)</span>
          </div>
          
          <p className="text-xl font-normal text-gray-600">{product.description}</p>
          <div className='flex justify-normal items-center'>
            <p className='text-lg uppercase font-semibold min-w-[150px]'> Availability:</p>
            <p className='text-md capitalize text-gray-600 font-semibold'> {(product.stock) > 0 ? `In Stock (${product.stock})` : 'Out Of Stock'} </p>
          </div>
          <div className='flex justify-normal items-center'>
            <p className='text-lg uppercase font-semibold min-w-[150px]'> category:</p>
            <Link to={`/products/category/${product.category}`}>
              <p className='text-md capitalize text-gray-600 font-semibold'> {product.category} </p>
            </Link>
            
          </div>
          <div>
            <div className='text-lg uppercase font-semibold mb-4'>Qunanty: </div>
            <div className='flex flex-wrap gap-5'>
              <div className='flex justify-center items-center'>
                <button onClick={valDec} className='border-2 px-3 border-gray-500 text-lg'>-</button>
                <p className='px-4'>{value}</p>
                <button onClick={valInc} className='border-2 px-3 border-gray-500 text-lg'>+</button>
              </div>
              <div className='bg-orange-600 rounded-lg flex-1 text-center justify-center flex'>
                <button className='flex justify-center items-center w-full text-xl font-medium py-3 text-white gap-5'><BiCart size={30} /> Add to cart</button>
              </div>
            </div>
          </div>
          </div>
    </div>
  );
};

export default SingleProduct
