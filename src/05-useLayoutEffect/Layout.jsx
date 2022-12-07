import React from "react";
import { Loading, Quote } from "../components";
import { useCounter, useFetch } from "../hook";

export const Layout = () => {
  const { increment, counter } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  const { name } = data || false;

  return (
    <>
      <h1>Pokemon data</h1>
      {isLoading ? <Loading /> : <Quote name={name} />}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(5)}
      >
        Next pokemon
      </button>
    </>
  );
};
