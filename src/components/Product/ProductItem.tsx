import { FC } from 'react'
import { Product } from '../../interfaces/'
import './ProductItem.scss'
import { useQuantity } from '../../hooks/';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

interface Props {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
}

export const ProductItem: FC<Props> = ({ product, addToCart }) => {
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity({ maxStock: product.amount });
  const addCart = () => {
    if (product.amount > 0) {

      addToCart(product, quantity)
    }

  }
  return (
    <div className="product-item">
      <img src="assets/products/leche.jpeg" className="product-item__image" />
      <div className="product-item__details">
        <h2 className="product-item__name">{product.name}
          <span className='product-item__stock'>
            (stock: {product.amount})
          </span>
        </h2>
        <p className="product-item__price"> ${product.price}</p>
        <div className="product-item__quantity-controls">
          <button className="product-item__quantity-control" onClick={decreaseQuantity}>
            < AiOutlineMinusCircle size={24} />
          </button>
          <p className="product-item__quantity-text">{quantity}</p>
          <button className="product-item__quantity-control" onClick={increaseQuantity}>
            < AiOutlinePlusCircle size={24} />
          </button>
        </div>
        <button className="product-item__add-to-cart" onClick={addCart}>
          Agregar al carrito
        </button>
      </div>
    </div>

  );
}

