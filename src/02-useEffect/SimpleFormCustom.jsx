import React from "react";
import { useForm } from "../hook";

export const SimpleCustomForm = () => {
  const { formState, onInputChange, onReset } = useForm({
    password: "drake",
    email: "drake@mail.com",
  });

  const { password, email } = formState;

  return (
    <>
      <h1>Simple custom form</h1>
      <hr />

      <input
        type="password"
        className="form-control"
        placeholder="username"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <hr />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <button className="btn btn-primary" onClick={onReset}>
        Reset
      </button>
    </>
  );
};
