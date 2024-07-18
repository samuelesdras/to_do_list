import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoList from "../TodoList";

describe("TodoList", () => {
  const tasks = ["Tarefa 1", "Tarefa 2"];
  const checkedTasks = [false, true];
  const mockToggleChecked = vi.fn();
  const mockDeleteTask = vi.fn();
  const mockEditTask = vi.fn();

  beforeEach(() => {
    mockToggleChecked.mockClear();
    mockDeleteTask.mockClear();
    mockEditTask.mockClear();
  });

  it("should render the list of tasks", () => {
    render(
      <TodoList
        tasks={tasks}
        checkedTasks={checkedTasks}
        onToggleChecked={mockToggleChecked}
        onDeleteTask={mockDeleteTask}
        onEditTask={mockEditTask}
      />
    );

    tasks.forEach((task) => {
      const taskElement = screen.getByText(task);
      expect(taskElement).toBeInTheDocument();
    });
  });

  it("should toggle task completion state", () => {
    render(
      <TodoList
        tasks={tasks}
        checkedTasks={checkedTasks}
        onToggleChecked={mockToggleChecked}
        onDeleteTask={mockDeleteTask}
        onEditTask={mockEditTask}
      />
    );

    const checkButtons = screen.getAllByLabelText("check");
    fireEvent.click(checkButtons[0]);

    expect(mockToggleChecked).toHaveBeenCalledWith(0);
  });

  it("should delete a task", () => {
    render(
      <TodoList
        tasks={tasks}
        checkedTasks={checkedTasks}
        onToggleChecked={mockToggleChecked}
        onDeleteTask={mockDeleteTask}
        onEditTask={mockEditTask}
      />
    );

    const deleteButtons = screen.getAllByLabelText("delete");
    fireEvent.click(deleteButtons[0]);

    expect(mockDeleteTask).toHaveBeenCalledWith(0);
  });

  it("should edit a task", () => {
    render(
      <TodoList
        tasks={tasks}
        checkedTasks={checkedTasks}
        onToggleChecked={mockToggleChecked}
        onDeleteTask={mockDeleteTask}
        onEditTask={mockEditTask}
      />
    );

    const taskElement = screen.getByText("Tarefa 1");
    fireEvent.click(taskElement);

    const inputElement = screen.getByPlaceholderText("Edite o nome da tarefa.");
    fireEvent.change(inputElement, { target: { value: "Nova Tarefa 1" } });
    fireEvent.blur(inputElement);

    expect(mockEditTask).toHaveBeenCalledWith(0, "Nova Tarefa 1");
  });
});
