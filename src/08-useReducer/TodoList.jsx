import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

const TodoList = ({ todos, deleteTodo, onToggleTodo }) => {
  return (
    <div className="col-7">
      <ul className="list-group">
        {todos?.map((todoData) => (
          <TodoItem
            key={todoData?.id}
            {...todoData}
            remove={deleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
