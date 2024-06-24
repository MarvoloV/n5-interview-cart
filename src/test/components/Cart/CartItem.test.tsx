import {test,expect} from "vitest";
import {render, screen} from '@testing-library/react'
import { CartItem } from "../../../components/Cart/CartItem";

describe("CartItem",()=>{
    test('should render correctly with valid item data', () => {
        const item = { name: 'Leche', price: 75000,amount:2, quantity: 2,id:1 };
        render(<CartItem item={item} />);
        expect(() => screen.getByText('Leche')).not.toThrow();
        expect(() => screen.getByText('Cantidad: 2')).not.toThrow();
        expect(() => screen.getByText('Subtotal: $150000')).not.toThrow();
      });
})