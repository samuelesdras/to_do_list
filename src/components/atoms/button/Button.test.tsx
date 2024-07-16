import React from "react";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../button";

test("Button", () => {
  render(<Button children={"login"} variant={"primary"} />);
  const buttonElement = screen.getByRole("button", {
    name: /login/i,
  });
  expect(buttonElement).toBeTruthy();
  console.log(buttonElement.textContent);
  expect(buttonElement).contain(/login/i);
  expect(buttonElement.className).toContain("bg-cyan-700");
});
