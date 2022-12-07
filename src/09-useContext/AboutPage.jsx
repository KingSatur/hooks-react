import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const AboutPage = () => {
  const algo = useContext(UserContext);

  return (
    <>
      <h1>AboutPage</h1>
      <p>{JSON.stringify(algo)}</p>
    </>
  );
};
