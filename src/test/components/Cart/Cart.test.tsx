import { render,screen } from "@testing-library/react";
import { describe, test, vi, expect } from "vitest";
import { Cart } from "../../../components/Cart/Cart";
import { CartItemProps } from "../../../interfaces";
import * as store from "../../../store";

describe("Cart", () => {
  test("should render all cart items correctly when cart is not empty", () => {
    const mockCart: CartItemProps[] = [
      { name: "Product 1", price: 10, quantity: 2, id: 1, amount: 2 },
      { name: "Product 2", price: 20, quantity: 1, id: 2, amount: 4 },
    ];

    vi.spyOn(store, "useStore").mockReturnValue({
      cart: mockCart,
      clearCart: vi.fn(),
      checkout: vi.fn(),
      fetchProducts: vi.fn(),
    });

    render(<Cart onClose={vi.fn()} />);
    expect(() => screen.getByText('Product 1')).not.toThrow();
    expect(() => screen.getByText('Product 2')).not.toThrow();

    
  });
});
