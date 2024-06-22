import React from 'react';
import InputField from './InputField';
import "./productForm.scss"
import { useProductForm } from '../../hooks';

export const ProductForm: React.FC = () => {
  const { product, handleInputChange, handleSubmit } = useProductForm();

  return (
    <form onSubmit={handleSubmit} className='form'>

      <InputField label="Nombre:" type="text" id="nombre" className="my-custom-class" value={product.name}

        onChange={(value) => handleInputChange('name', value)}
      />
      <InputField label="Precio:" type="number" id="precio"

        value={product.price}
        onChange={(value) => handleInputChange('price', value)}
      />
      <InputField label="Stock:" type="number" id="stock"
        value={product.amount}
        onChange={(value) => handleInputChange('amount', value)}

      />
      <button type="submit" className='form__button'>Agregar Producto</button>
    </form>
  );
};


