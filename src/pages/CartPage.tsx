import React from 'react'
import { ProductList } from '../components/Product'
import { MainLayout } from '../layouts/MainLayout'
import { Link } from 'react-router-dom'
import "../styles/pages/CartPage.scss"
export const CartPage: React.FC = () => {
  return (
    <MainLayout>
      <div className='cart-header'>
        <h1 className='cart-title'>Lista de Productos:</h1>
        <Link to="/add-product" className='cart-link'>
          Añadir producto
        </Link>
      </div>
      <ProductList />
    </MainLayout >
  )
}

