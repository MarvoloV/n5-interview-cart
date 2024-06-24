import {test,expect} from "vitest";
import {render, screen} from '@testing-library/react'
import { ProductItem } from "../../../components/Product";

describe("ProductItem",()=>{

    test('should render product details correctly when given a product', () => {
        const product = { name: 'Milk', price: 2.5, amount: 10,id:1 };
        const addToCart = vi.fn();
        
        render(<ProductItem product={product} addToCart={addToCart} />);
        expect(() => screen.getByText('Milk')).not.toThrow();
        expect(() => screen.getByText('$2.5')).not.toThrow();
        expect(() => screen.getByText('(stock: 10)')).not.toThrow();
      });
})