import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoItem from "../TodoItem";

describe("TodoItem", () => {
  const mockToggleChecked = vi.fn();
  const mockDelete = vi.fn();
  const mockEdit = vi.fn();

  const task = "Teste de tarefa";
  const index = 0;
  const isChecked = false;

  beforeEach(() => {
    mockToggleChecked.mockClear();
    mockDelete.mockClear();
    mockEdit.mockClear();
  });

  it("should render the task", () => {
    render(
      <TodoItem
        task={task}
        index={index}
        isChecked={isChecked}
        onToggleChecked={mockToggleChecked}
        onDelete={mockDelete}
        onEdit={mockEdit}
      />
    );

    const taskElement = screen.getByText(task);
    expect(taskElement).toBeInTheDocument();
  });

  it("should toggle task completion state", () => {
    render(
      <TodoItem
        task={task}
        index={index}
        isChecked={isChecked}
        onToggleChecked={mockToggleChecked}
        onDelete={mockDelete}
        onEdit={mockEdit}
      />
    );

    const checkButton = screen.getByLabelText("check");
    fireEvent.click(checkButton);

    expect(mockToggleChecked).toHaveBeenCalledWith(index);
  });

  it("should edit the task", () => {
    render(
      <TodoItem
        task={task}
        index={index}
        isChecked={isChecked}
        onToggleChecked={mockToggleChecked}
        onDelete={mockDelete}
        onEdit={mockEdit}
      />
    );

    const taskElement = screen.getByText(task);
    fireEvent.click(taskElement);

    const inputElement = screen.getByPlaceholderText("Edite o nome da tarefa.");
    fireEvent.change(inputElement, { target: { value: "Nova tarefa" } });
    fireEvent.blur(inputElement);

    expect(mockEdit).toHaveBeenCalledWith(index, "Nova tarefa");
  });

  it("should delete the task", () => {
    render(
      <TodoItem
        task={task}
        index={index}
        isChecked={isChecked}
        onToggleChecked={mockToggleChecked}
        onDelete={mockDelete}
        onEdit={mockEdit}
      />
    );

    const deleteButton = screen.getByLabelText("delete");
    fireEvent.click(deleteButton);

    expect(mockDelete).toHaveBeenCalledWith(index);
  });
});
