import React, { useState } from "react";

//style
import "./TodoStyle.css";

const Todo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="todo">
      <div className="todo-item-desc">
        <a href="/" className="todo-title">
          Create an endpoint to get the list of users available in the database
        </a>
        <span className="todo-date-created">
          Created on 13 July 2019 at 08:33AM
        </span>
      </div>
      <div className="todo-status in-progress-pill">In Progress</div>
      <div>
        <svg
          width="23"
          height="23"
          onClick={() => setOpen(true)}
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4998 12.4583C12.0291 12.4583 12.4582 12.0293 12.4582 11.5C12.4582 10.9707 12.0291 10.5417 11.4998 10.5417C10.9706 10.5417 10.5415 10.9707 10.5415 11.5C10.5415 12.0293 10.9706 12.4583 11.4998 12.4583Z"
            stroke="#777777"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.2083 12.4583C18.7376 12.4583 19.1667 12.0293 19.1667 11.5C19.1667 10.9707 18.7376 10.5417 18.2083 10.5417C17.6791 10.5417 17.25 10.9707 17.25 11.5C17.25 12.0293 17.6791 12.4583 18.2083 12.4583Z"
            stroke="#777777"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.79183 12.4583C5.3211 12.4583 5.75016 12.0293 5.75016 11.5C5.75016 10.9707 5.3211 10.5417 4.79183 10.5417C4.26256 10.5417 3.8335 10.9707 3.8335 11.5C3.8335 12.0293 4.26256 12.4583 4.79183 12.4583Z"
            stroke="#777777"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Todo;
