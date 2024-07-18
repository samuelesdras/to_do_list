import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "../Header";

describe("Header", () => {
  it("should render the header with the provided title", () => {
    const title = "Minha Lista de Tarefas";

    render(<Header title={title} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
  });

  it("should apply the correct styles", () => {
    const title = "Estilos do Cabeçalho";

    const { container } = render(<Header title={title} />);
    const headerElement = container.querySelector("header");

    expect(headerElement).toHaveClass("p-10");
    expect(headerElement).toHaveClass("text-3xl");
  });
});
