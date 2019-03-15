import React, { Component } from "react";
import "../styles/App.scss";
import Navigation from "./Navigation";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

class App extends Component {
  state = {
    title: "todone",
    tasks: ["task1", "task2", "task3"]
  };
  render() {
    const { title, tasks } = this.state;
    return (
      <div>
        <Navigation title={title} />
        <div className="container margin-left-auto margin-right-auto">
          <TasksList tasks={tasks} />
          <NewTask />
        </div>
      </div>
    );
  }
}

export default App;
