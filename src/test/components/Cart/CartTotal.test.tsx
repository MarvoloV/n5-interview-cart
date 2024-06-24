import { render,screen } from "@testing-library/react";
import {expect} from "vitest";
import { CartTotal } from "../../../components/Cart/CartTotal";

describe("CartTotal",()=>{

    it('should render correctly when total is positive', () => {
         render(<CartTotal total={100} />);
         expect(() => screen.getByText('Total: $100')).not.toThrow();
        
      });
})