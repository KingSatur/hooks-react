import React, { useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const Quote = ({ name }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current?.getBoundingClientRect();
    setBoxSize({
      height,
      width,
    });
  }, [name]);

  return (
    <blockquote className="blockquote text-right" style={{ display: "flex" }}>
      <p ref={pRef} className="mb-1">
        Hello world
      </p>
      <footer className="blockquote-footer">{name}</footer>
    </blockquote>
  );
};

Quote.propTypes = {
  name: PropTypes.string.isRequired,
};
