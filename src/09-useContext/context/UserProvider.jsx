import React, { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 123,
//   name: "Leo",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ hole: "Mundo", user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
