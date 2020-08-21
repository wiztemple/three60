import React, { useState } from "react";

// components
import Button from "../Button";
import Todo from "../Todo";
import Modal from "../Modal";

const Todos = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <h1 className="lg-pt-20">All Todos</h1>
        <Button variant="create" onClick={() => setShowModal(true)}>
          <span className="button-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 8V16"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="button-text">Create Task</span>
        </Button>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        {showModal ? (
          <Modal>
            <div>
              <p>This is a modal</p>
              <Button variant="create">cccc</Button>
              <button onClick={() => setShowModal(false)}>
                Cancel the modal
              </button>
            </div>
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default Todos;
