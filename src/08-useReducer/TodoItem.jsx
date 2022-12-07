import React from "react";

export const TodoItem = ({ description, id, remove, done, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        aria-label="todo-desc"
        className={`align-self-center ${
          done && "text-decoration-line-through"
        }`}
        onClick={() => onToggleTodo(id)}
      >
        {description}
      </span>
      <button className="btn btn-danger" onClick={() => remove(id)}>
        Remove
      </button>
    </li>
  );
};
