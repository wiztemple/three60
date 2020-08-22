import React, { useState } from "react";

// styles
import "./TextareaStyle.css";

const Textarea = (props) => {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");
  const [rows] = useState(props.rows);
  const [cols] = useState(props.cols);
  const [variant] = useState(props.variant);
  const [placeholder] = useState(props.placeholder);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  };
  return (
    <>
      <textarea
        type={inputType}
        value={inputValue}
        name="textarea"
        rows={rows}
        cols={cols}
        variant="inverted"
        onChange={handleChange}
        className={`textarea textarea-${variant}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default Textarea;
