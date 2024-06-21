import { useEffect } from "react";
import { useStore } from '../../store/';
import { ProductItem } from "./ProductItem";
import "./productList.scss"
export const ProductList = () => {
  const { products, loading, error, fetchProducts, addToCart } = useStore(state => state);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos: {error}</div>;
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

