import {test,expect} from "vitest";
import { render,screen } from "@testing-library/react";
import { CartButton } from "../../../components/Cart/CartButton";

describe("CartItem",()=>{
  test('should render correctly with required props', () => {
    render(<CartButton onClick={() => {}}>Click me</CartButton>);
    expect(() => screen.getByText('Click me')).not.toThrow();
    //expect(   getByText('Click me')).not.toThrow();
  });
})