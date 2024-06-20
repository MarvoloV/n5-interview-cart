
import { create } from 'zustand';
import { ProductState, createProductSlice, } from './productStore';
import { CartState, createCartSlice, } from './cartStore';
import { devtools, persist } from 'zustand/middleware';

type CombinedState = ProductState & CartState;
export const useStore = create<CombinedState>()(
  devtools(
    persist(
      (...a) => ({
        ...createCartSlice(...a),
        ...createProductSlice(...a),
      }), { name: "store" })
  )
);
