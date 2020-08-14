import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TodoTabs from "./component/TodoTabs";
import Todos from "./component/Todos";
import TodoDetails from "./component/TodoDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <div class="columns">
          <div class="lg-col-1 lg-pl-32">
            <TodoTabs />
          </div>
          <div className="lg-col-8 lg-px-40">
            <Todos />
          </div>
          <div className="lg-col-3">
            <TodoDetails />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
