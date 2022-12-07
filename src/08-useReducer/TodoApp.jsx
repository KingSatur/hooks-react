import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import TodoList from "./TodoList";
import { useTodo } from "./useTodo";

export const TodoApp = () => {
  const { addTodo, onToggleTodo, removeTodo, todos } = useTodo();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>Todo app ({todos.length})</h1>
      <h1>Todo app pendings ({todos?.filter((m) => m.done)?.length})</h1>
      <div className="row">
        <TodoList
          todos={todos}
          deleteTodo={removeTodo}
          onToggleTodo={onToggleTodo}
        />
        <TodoAdd addTodo={addTodo} />
      </div>
    </>
  );
};
