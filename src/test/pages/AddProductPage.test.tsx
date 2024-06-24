import { render,screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { AddProductPage } from "../../pages/AddProductPage";
import { BrowserRouter as Router } from 'react-router-dom';


describe("Cart", () => {
  test("should render MainLayout component correctly", () => {
    render(
        <Router>
<AddProductPage  />
        </Router>
);
    expect(() => screen.getByTestId('main-layout')).not.toThrow();

    
  });
});
