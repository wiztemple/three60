import React, { useState } from "react";

// style
import "./ButtonStyle.css";

const Button = (props) => {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(true);
    if (props.onToggle) props.onToggle(showModal);
  };
  return (
    <button
      className={`button button-${variant} button-${size}`}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
