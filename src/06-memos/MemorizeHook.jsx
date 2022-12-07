import React, { useMemo, useState } from "react";
import { useCounter } from "../hook";

const heavyStuff = (iterationNumber) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Lets go");
  }

  return `${iterationNumber}`;
};

export const MemorizeHook = () => {
  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);

  const messageMemoValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <h4>{messageMemoValue}</h4>

      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        Increment{" "}
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
