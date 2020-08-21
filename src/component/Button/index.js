import React, { useState } from "react";

// style
import "./ButtonStyle.css";

const Button = (props) => {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  return (
    <button className={`button button-${variant} button-${size}`}>
      {props.children}
    </button>
  );
};

export default Button;
