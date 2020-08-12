import React from "react";

// style
import "./TodoTabsStyle.css";

const TodoTabs = () => {
  return (
    <div className="todo-tab">
      <button className="todomenu-button">
        <span className="block-span">All Todos</span>
        <div className="items-length all-todos">3</div>
      </button>
      <button className="todomenu-button">
        <span className="block-span">Backlog</span>
        <div className="items-length backlog">3</div>
      </button>
      <button className="todomenu-button">
        <span className="block-span">In Progress</span>
        <div className="items-length in-progress">3</div>
      </button>
      <button className="todomenu-button">
        <span className="block-span">Finished</span>
        <div className="items-length finished">3</div>
      </button>
      <button className="todomenu-button">
        <span className="block-span">Overdue</span>
        <div className="items-length overdue">3</div>
      </button>
      <button className="todomenu-button">
        <span className="block-span">Trash</span>
        <div className="items-length trash">3</div>
      </button>
    </div>
  );
};

export default TodoTabs;
