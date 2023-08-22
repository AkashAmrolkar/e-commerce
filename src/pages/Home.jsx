import React from 'react'
import LatestProducts from '../component/home/LatestProducts';
import HomePageCategories from '../component/home/HomePageCategories';


const Homepage = () => {
  return (
    <>
      <div className='container mx-auto py-8  '>
        <LatestProducts />
        <HomePageCategories />
      </div>
    </>
  )
}

export default Homepage