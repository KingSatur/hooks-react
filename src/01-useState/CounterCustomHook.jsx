import React from "react";
import { useCounter } from "../hook/useCounter";

export const CounterCustomHook = () => {
  const { counter, decrement, increment, reset } = useCounter();

  return (
    <>
      <h1>Counter with custom hook {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(20)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(5)}>
        -1
      </button>
    </>
  );
};
