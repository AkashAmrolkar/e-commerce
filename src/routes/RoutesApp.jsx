import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductsPage from '../pages/ProductsPage';
import SingleProductPage from '../pages/SingleProductPage';
import ProductCatPage from '../pages/ProductCatPage';
import CategoriesPage from '../pages/CategoriesPage';
const RoutesApp = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/categories' element={<CategoriesPage />} />
            <Route path="/products/category/:categoryName" element={<ProductCatPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
        </Routes>
    </>
  )
}

export default RoutesApp