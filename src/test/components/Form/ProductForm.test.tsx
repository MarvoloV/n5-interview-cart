import { render,screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ProductForm } from "../../../components/Form/ProductForm";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Cart", () => {
  test("should render all input fields and submit button correctly", () => {

    render(
        <Router>
    <ProductForm  />

        </Router>
);
    expect(() => screen.getByLabelText('Nombre:')).not.toThrow();
    expect(() => screen.getByText('Agregar Producto')).not.toThrow();

    
  });
});
