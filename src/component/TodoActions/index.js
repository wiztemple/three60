import React from "react";

// style
import "./TodoActionsStyle.css";

const TodoActions = () => {
  return (
    <div className="todo-actions">
      <div className="todo-action">
        <img src="" alt="icon" />
        <span>Mark as complete</span>
      </div>
      <div className="todo-action">
        <svg
          width="197"
          height="172"
          viewBox="0 0 197 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <rect x="4" y="3" width="189" height="164" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="197"
              height="172"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <span>Edit</span>
      </div>
      <div className="todo-action">
        <svg
          width="197"
          height="172"
          viewBox="0 0 197 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <rect x="4" y="3" width="189" height="164" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="197"
              height="172"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <span>Delete</span>
      </div>
    </div>
  );
};

export default TodoActions;
