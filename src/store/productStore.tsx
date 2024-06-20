import { StateCreator } from 'zustand';
import { Product } from '../interfaces';
import { getProducts } from '../services/ProductService';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const createProductSlice: StateCreator<ProductState, [["zustand/devtools", never]]> = (set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true,error:null }, false, "Loading");
    try {
      const response = await getProducts();
      set({ products: response.data, loading: false }, false, 'Get products');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
});

