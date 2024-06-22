import { useState } from 'react';
import { Product } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../services/ProductService';


interface UseProductForm {
  product: Product;
  handleInputChange: (key: keyof Product, value: string | number) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useProductForm = (): UseProductForm => {
  const [product, setProduct] = useState<Product>({
    name: '',
    price: 0,
    amount: 0,
    id: 0,
  });
  const navigate = useNavigate();
  const handleInputChange = (key: keyof Product, value: string | number) => {
    setProduct({
      ...product,
      [key]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Producto a agregar:', product);
    product.amount = Number(product.amount);
    product.price - Number(product.price);
    product.id = Date.now();
    addProduct(product)
    navigate("/")
  };

  return { product, handleInputChange, handleSubmit };
};

