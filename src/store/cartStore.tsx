import { StateCreator } from 'zustand';
import { CartItemProps, Product } from '../interfaces';
import { updateProducts } from '../services/ProductService';

export interface CartState {
  cart: CartItemProps[];
  addToCart: (product: Product, quantity: number) => void;
  clearCart: () => void;
  checkout: () => Promise<void>;
}

export const createCartSlice: StateCreator<CartState, [["zustand/devtools", never]]> = (set, get) => ({
  cart: [],
  addToCart: (product: Product, quantity: number) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: quantity } : item
          ),
        };
      }
      return {
        cart: [...state.cart, { ...product, quantity }],
      };
    });
  },
  clearCart: () => set({ cart: [] }),
  checkout: async () => {
    const currentState = get();  // Obtener el estado actual
    console.log('Estado actual antes del checkout:', currentState.cart);
    await updateProducts(currentState.cart);
    set({ cart: [] });

    console.log('Estado actual despues del checkout:', get());
  },
})

