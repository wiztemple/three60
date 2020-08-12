import React from "react";

// style
import "./TodoDetailsStyle.css";

const TodoDetails = () => {
  return (
    <div className="todo-details lg-full-height-screen">
      <div className="todo-type-indicators">
        <div className="type-indicator">
          <div className="circle1">
            <div className="circle2">5</div>
          </div>
          <span> In Progress</span>
        </div>
        <div className="details-date">
          <div className="details-date-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 10C18.3332 5.39763 14.6022 1.66667 9.99984 1.66667C5.39746 1.66667 1.6665 5.39763 1.6665 10C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333Z"
                stroke="#777777"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 5V10L13.3333 11.6667"
                stroke="#777777"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span>24/07/2019</span>
        </div>
      </div>
      <h1>Create and endpoint to get the list of users</h1>
      <div className="todo-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
    </div>
  );
};

export default TodoDetails;
