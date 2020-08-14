import React from "react";

// components
import Todo from "../Todo";

const Todos = () => {
  return (
    <>
      <div>
        <h1 className="lg-pt-20">All Todos</h1>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </>
  );
};

export default Todos;
