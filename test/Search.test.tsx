import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "../app/components/Search";

jest.mock("@remix-run/react", () => ({
  Form: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("Search component", () => {
  it("renders the input element with the correct attributes", () => {
    render(<Search />);

    const inputElement = screen.getByPlaceholderText("Type a title");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("name", "title");
    expect(inputElement).toHaveClass(
      "border",
      "border-teal-700",
      "rounded-md",
      "py-2",
      "px-3"
    );
  });
});
