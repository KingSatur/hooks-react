import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("TodoItem tests", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    done: false,
  };

  const onDelete = jest.fn();
  const onToggle = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it("Should show pending todo", () => {
    render(<TodoItem {...todo} onToggleTodo={onToggle} remove={onDelete} />);

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const span = screen.getByLabelText("todo-desc");
    expect(span.className).toContain("align-self-center");
  });

  it("Should show finished todo", () => {
    todo.done = true;
    render(<TodoItem {...todo} onToggleTodo={onToggle} remove={onDelete} />);

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const span = screen.getByLabelText("todo-desc");
    expect(span.className).toContain(
      "align-self-center text-decoration-line-through"
    );
  });

  it("Should call toggle todo", () => {
    render(<TodoItem {...todo} onToggleTodo={onToggle} remove={onDelete} />);
    const span = screen.getByLabelText("todo-desc");
    fireEvent.click(span);

    expect(onToggle).toHaveBeenCalledWith(todo.id);
  });

  it("Should call remove todo", () => {
    render(<TodoItem {...todo} onToggleTodo={onToggle} remove={onDelete} />);
    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith(todo.id);
  });
});
