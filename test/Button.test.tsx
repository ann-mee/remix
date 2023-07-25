import React from "react";
import Button from "../app/components/Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Button", () => {
  test("renders button with correct label", () => {
    const label = "Click me";
    render(<Button label={label} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(label);
  });
});
