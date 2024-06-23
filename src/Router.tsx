import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddProductPage } from './pages/AddProductPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CartPage } from './pages/CartPage';


export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

