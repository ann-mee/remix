import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputField from "../app/components/form/InputField";
import { useField } from "./__mocks__/remix-validated-form";

jest.mock("remix-validated-form");

describe("InputField component", () => {
  it("renders the label and input", () => {
    render(<InputField label="Name:" name="name" />);

    const labelElement = screen.getByText("Name:");
    const inputElement = screen.getByRole("textbox", { name: "Name:" });

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("renders error message when there is an error", () => {
    const error = "Field is required";
    useField.mockReturnValueOnce({ error, touched: true });

    render(<InputField label="Name:" name="name" />);

    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });

  it("applies correct border color on error", () => {
    const error = "Field is required";
    useField.mockReturnValueOnce({ error, touched: true });

    render(<InputField label="Name:" name="name" />);

    const inputElement = screen.getByRole("textbox", { name: "Name:" });
    expect(inputElement).toHaveClass("border-red-700");
  });

  it("applies default border color when no error", () => {
    render(<InputField label="Name:" name="name" />);

    const inputElement = screen.getByRole("textbox", { name: "Name:" });
    expect(inputElement).toHaveClass("border-slate-400");
  });
});
