import { CartItemProps, Product } from "../../interfaces";
import { getProducts, updateProducts } from "../../services/ProductService";
import { cartApi } from "../../services/api";

describe('ProductService',()=>{
    it('should return a list of products when API call is successful', async () => {
        const mockProducts: Product[] = [
          { id: 1, name: 'Product 1', price: 100, amount: 10 },
          { id: 2, name: 'Product 2', price: 200, amount: 20 },
        ];
    
        vi.spyOn(cartApi, 'get').mockResolvedValue({ data: mockProducts });
    
        const response = await getProducts();
    
        expect(response.data).toEqual(mockProducts);
      });
      it('should update all products successfully when given valid quantities', async () => {
        const mockProducts:CartItemProps[] = [
          {
              id: 1, amount: 10, quantity: 2,
              name: "Leche",
              price: 2
          },
          {
              id: 2, amount: 20, quantity: 5,
              name: "Avellana",
              price: 20
          }
        ];
  
        const mockResponse = { data: 'success' };
  
        vi.spyOn(cartApi, 'patch').mockResolvedValue(mockResponse);
  
        await updateProducts(mockProducts);
  
        expect(cartApi.patch).toHaveBeenCalledTimes(mockProducts.length);
        mockProducts.forEach(product => {
          expect(cartApi.patch).toHaveBeenCalledWith(`/products/${product.id}`, {
            amount: product.amount - product.quantity
          });
        });
      });
})