import React, { useState } from "react";
import { useForm } from "../hook";

export const TodoAdd = ({ addTodo }) => {
  const {
    formState: { description },
    onInputChange,
    onReset,
  } = useForm({
    description: "",
  });

  const onSubmit = (e) => {
    e?.preventDefault();
    if (description?.length < 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    addTodo && addTodo(newTodo);
    onReset();
  };

  return (
    <div className="col-5">
      <h4>add todo</h4>
      <hr />
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          name="description"
          className="form-control"
          onChange={onInputChange}
          value={description}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Add
        </button>
      </form>
    </div>
  );
};
