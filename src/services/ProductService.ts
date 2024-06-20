import { CartItemProps, Product } from "../interfaces";
import { cartApi } from "./api";

export const getProducts = async () => {

  const response = await cartApi.get<Product[]>('/products');

  return response;
}
export const updateProducts = async (products: CartItemProps[]) => {
  const patchRequests = products.map(product => {
    const updatedAmount = product.amount - product.quantity;

    return cartApi.patch(`/products/${product.id}`, {
      amount: updatedAmount
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(`Error updating product ID ${product.id}:`, error);
        throw error;
      });
  });
  try {
    await Promise.all(patchRequests);
  } catch (error) {
    console.error('One or more updates failed:', error);
  }
}
export const addProduct = async (product: Product) => {
  try {
    const response = await cartApi.post('/products', product);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

