import React from 'react'
import HomeBanner from "../component/home/HomeBanner";
import LatestProducts from '../component/home/LatestProducts';
import HomePageCategories from '../component/home/HomePageCategories';


const Homepage = () => {
  return (
    <>
      <div className='container mx-auto py-8  '>
        <HomeBanner/>
        <LatestProducts />
        <HomePageCategories />
      </div>
    </>
  )
}

export default Homepage