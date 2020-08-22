import React, { useState } from "react";

// components
import Button from "../Button";
import Todo from "../Todo";
import Modal from "../Modal";
import Input from "../Input";
import Textarea from "../Textarea";

const Todos = () => {
  const [showModal, setShowModal] = useState(false);

  const onToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div>
        <div className="space-between align-center">
          <h1 className="lg-pt-20">All Todos</h1>
          <Button variant="create" onToggle={onToggle}>
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
        </div>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        {showModal ? (
          <Modal>
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-header-text">Create Todo</span>
                <span onClick={onToggle}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.7066 0.293731C15.7997 0.386605 15.8735 0.496935 15.9239 0.618402C15.9743 0.73987 16.0003 0.870087 16.0003 1.0016C16.0003 1.13311 15.9743 1.26332 15.9239 1.38479C15.8735 1.50626 15.7997 1.61659 15.7066 1.70946L1.7094 15.7068C1.52167 15.8945 1.26704 16 1.00155 16C0.73605 16 0.481427 15.8945 0.293691 15.7068C0.105956 15.5191 0.000488283 15.2644 0.000488281 14.9989C0.000488279 14.7334 0.105956 14.4788 0.293691 14.2911L14.2908 0.293731C14.3837 0.200623 14.494 0.126751 14.6155 0.0763476C14.737 0.0259443 14.8672 0 14.9987 0C15.1302 0 15.2604 0.0259443 15.3819 0.0763476C15.5033 0.126751 15.6137 0.200623 15.7066 0.293731V0.293731Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.293728 0.293731C0.20062 0.386605 0.126749 0.496935 0.0763466 0.618402C0.0259439 0.73987 0 0.870087 0 1.0016C0 1.13311 0.0259439 1.26332 0.0763466 1.38479C0.126749 1.50626 0.20062 1.61659 0.293728 1.70946L14.2909 15.7068C14.4786 15.8945 14.7332 16 14.9987 16C15.2642 16 15.5189 15.8945 15.7066 15.7068C15.8943 15.5191 15.9998 15.2644 15.9998 14.9989C15.9998 14.7334 15.8943 14.4788 15.7066 14.2911L1.70944 0.293731C1.61657 0.200623 1.50624 0.126751 1.38477 0.0763476C1.26331 0.0259443 1.13309 0 1.00158 0C0.870076 0 0.73986 0.0259443 0.618394 0.0763476C0.496929 0.126751 0.3866 0.200623 0.293728 0.293731V0.293731Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
              <div className="modal-body">
                <div className="mb-10">
                  <Input
                    className="input mb-10"
                    variant="inverted"
                    type="text"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-10">
                  <Textarea
                    cols="5"
                    rows="5"
                    variant="inverted"
                    placeholder="description"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <div className="flex-end">
                  <div className="flex-start">
                    <div>
                      <Button variant="outline" onToggle={onToggle}>
                        Cancel
                      </Button>
                    </div>
                    <div className="lg-ml-32">
                      <Button variant="primary" size="wide">
                        Create
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default Todos;
