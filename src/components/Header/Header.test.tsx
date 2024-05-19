import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter, Router } from "react-router-dom";

describe("header test", () => {
  it("should be in the page", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const headerNav = screen.getByTestId("header-nav");
    expect(headerNav).toBeInTheDocument();
  });
});