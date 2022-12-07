import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "drake",
    email: "drake@mail.com",
  });

  const { userName, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //Execute use effect only the first time
  useEffect(() => {
    // console.log("Use effect called");
  }, []);

  //Execute only when form change
  useEffect(() => {
    // console.log("Use effect called, form change");
  }, [formState]);

  //Execute only when email change
  useEffect(() => {
    // console.log("Use effect called, email change");
  }, [email]);

  return (
    <>
      <h1>Simple form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="userName"
        value={userName}
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
      {userName === "strider2" && <Message />}
    </>
  );
};
