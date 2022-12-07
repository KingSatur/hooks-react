import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const algo = useContext(UserContext);

  return (
    <div>
      LoginPage <h2 aria-label="test-h2">{JSON.stringify(algo?.user)}</h2>
      <button
        onClick={() =>
          algo?.setUser({
            name: "matsi",
          })
        }
      >
        Set login
      </button>
    </div>
  );
};
