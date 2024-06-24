import { test, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import { Navbar } from "../../../../components/ui/Navbar/Navbar";

import { BrowserRouter as Router } from 'react-router-dom';
describe("Navbar", () => {


  test('should render logo and cart icon correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const logo = screen.getByAltText('logo');
    const cartIcon = screen.getByTestId('cart-icon');
    expect(logo).toBeTruthy();
    expect(cartIcon).toBeTruthy();
  });
})
