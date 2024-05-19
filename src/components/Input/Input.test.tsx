import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("correct placeholder", () => {
  it("should be correct placeholder in input", () => {
    const testPlaceholder = "test placeholder";
    render(<Input placeholder={testPlaceholder} />);

    expect(screen.getByPlaceholderText(testPlaceholder)).toBeInTheDocument();
  });
});