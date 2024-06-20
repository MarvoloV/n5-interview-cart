import { Product } from "./Product";

export interface CartItemProps extends Product {
  quantity: number;
}
