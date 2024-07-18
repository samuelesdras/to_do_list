import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Input from ".";

describe("Input", () => {
  it("should render on DOM", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render with placeholder and label", () => {
    const placeholderText = "Placeholder test";
    const labelText = "Label's test";
    render(<Input placeholder={placeholderText} label={labelText} />);
    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(inputElement).toHaveValue("");
    fireEvent.change(inputElement, { target: { value: placeholderText } });
    expect(inputElement).toHaveValue(placeholderText);
    fireEvent.change(inputElement, { target: { value: "Texto digitado" } });
    expect(inputElement).toHaveValue("Texto digitado");
  });
});
