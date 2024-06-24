import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";

describe("NotFoundPage", () => {
  test('should render the main heading with correct text', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(() => screen.getByText('Página no encontrada')).not.toThrow();
  });
});
