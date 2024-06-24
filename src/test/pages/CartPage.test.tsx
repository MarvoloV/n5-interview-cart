import { render, screen } from "@testing-library/react";
import { CartPage } from "../../pages/CartPage";

import { BrowserRouter as Router } from 'react-router-dom';
describe("CartPage", () => {

  it('should render without crashing', () => {

    render(
      <Router>
        <  CartPage />
      </Router>
    );
    expect(() => screen.getByText('Lista de Productos:')).not.toThrow();

  });
})
