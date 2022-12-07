import { useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const initState = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initState);

  const addTodo = (todo) => {
    const action = {
      type: "ADD",
      payload: todo,
    };
    dispatch(action);
  };

  const removeTodo = (id) => {
    const action = {
      type: "REMOVE",
      payload: id,
    };
    dispatch(action);
  };

  const onToggleTodo = (id) => {
    const action = {
      type: "TOGGLE",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    onToggleTodo,
  };
};
