import React, { useState } from "react";

// input style
import "./InputStyle.css";

const Input = (props) => {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  };
  return (
    <>
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        className={`input input-${variant} input-${size}`}
      />
    </>
  );
};
export default Input;
