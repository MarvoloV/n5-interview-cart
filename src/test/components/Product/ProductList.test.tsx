import {test,expect} from "vitest";
import {render} from '@testing-library/react'
import { ProductList } from "../../../components/Product";
import * as store from "../../../store";
describe("ProductList",()=>{
    test("should fetch products on mount", async () => {
        const fetchProducts = vi.fn();
        const addToCart=vi.fn();
        
        vi.spyOn(store, "useStore").mockReturnValue({
          products: [],
          loading: false,
          error: null,
          fetchProducts,
          addToCart,
          cart:[],
          checkout:vi.fn(),
          clearCart:vi.fn(),
        });
    
        render(<ProductList />);
        
        expect(fetchProducts).toHaveBeenCalled();

      });
})