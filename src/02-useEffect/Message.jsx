import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };

    window.addEventListener("mousemove", onMouseMove);

    console.log("message mounted");

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      console.log("message unmounted");
    };
  }, []);

  return (
    <>
      <h3>User exists</h3>
    </>
  );
};
