import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHock = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((valueToIncrement) => {
    setCounter((value) => value + valueToIncrement);
  }, []);

  return (
    <>
      ``
      <h1>Use callback hook : {counter}</h1>
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
