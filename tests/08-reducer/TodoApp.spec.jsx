import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/08-useReducer/useTodo";

jest.mock("../../src/08-useReducer/useTodo");

describe("TodoApp tests", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Should show todo app correctly", () => {
    useTodo.mockReturnValue({
      addTodo: jest.fn(),
      onToggleTodo: jest.fn(),
      removeTodo: jest.fn(),
      todos: [
        {
          id: 1,
          description: "Saludar",
          done: false,
        },
        {
          id: 2,
          description: "Saludar varias veces",
          done: false,
        },
      ],
    });

    render(<TodoApp />);

    expect(screen.getByText("Saludar"));
    expect(screen.getByText("Saludar varias veces"));
  });
});
