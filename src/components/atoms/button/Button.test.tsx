import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../button";
import { describe, it, expect } from "vitest";

describe("Button", () => {
  it("renders on Dom", () => {
    render(<Button children={"login"} variant={"primary"} />);
    const buttonElement = screen.getByRole("button", {
      name: /login/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/login/i);
    expect(buttonElement.className).toContain("bg-cyan-700");
  });
});
