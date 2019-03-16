import React, { Component } from "react";
import "../styles/App.scss";
import Navigation from "./Navigation";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import { Divider } from "semantic-ui-react";

class App extends Component {
  state = {
    title: "todone",
    tasks: [
      {
        id: 2,
        text: "Azi merge 2",
        date: new Date().toLocaleDateString(),
        dayOfTheWeek: new Date().getDay(),
        isComplete: false,
        isEdited: false
      },
      {
        id: 3,
        text: "Azi merge 3",
        date: new Date().toLocaleDateString(),
        dayOfTheWeek: new Date().getDay(),
        isComplete: false,
        isEdited: false
      },
      {
        id: 4,
        text: "Azi merge 2",
        date: new Date().toLocaleDateString(),
        dayOfTheWeek: new Date().getDay(),
        isComplete: false,
        isEdited: false
      }
    ],
    completedTasks: [
      {
        id: 1,
        text: "Azi merge",
        date: new Date().toLocaleDateString(),
        dayOfTheWeek: new Date().getDay(),
        isComplete: true,
        isEdited: false
      }
    ]
  };

  handleNewTask = task => {
    this.setState((prevState, props) => ({
      tasks: [...prevState.tasks, task]
    }));
  };

  handleCompletedTask = taskId => {
    console.log(this.state.tasks.filter(el => el.id !== taskId));
    this.state.tasks.filter(el => el.id === taskId)[0].isComplete = true;
    this.setState((prevState, props) => ({
      completedTasks: [
        ...prevState.completedTasks,
        prevState.tasks.filter(el => el.id === taskId)[0]
      ],
      tasks: prevState.tasks.filter(el => el.id !== taskId)
    }));
  };

  handleDeleteCompleteTasks = () => {
    this.setState({
      completedTasks: []
    });
  };

  handleEditTask = (taskId) => {
    debugger
    const { tasks } = this.state;
    tasks.filter(el => el.id === taskId)[0].isEdited = true;
    this.setState((prevState, props) => ({
      tasks: tasks
    }));
  }

  render() {
    const { title, tasks, completedTasks } = this.state;
    return (
      <div className="">
        <Navigation title={title} />
        <div className="container margin-left-auto margin-right-auto">
          <TasksList
            handleCompletedTask={this.handleCompletedTask}
            completedList={false}
            handleEditTask={this.handleEditTask}
            title="Active Tasks"
            tasks={tasks}
            handleNewTask={this.handleNewTask}
          />
          <TasksList
            handleDeleteCompleteTasks={this.handleDeleteCompleteTasks}
            handleCompletedTask={this.handleCompletedTask}
            completedList={true}
            handleNewTask={this.handleNewTask}
            title="Completed Tasks"
            tasks={completedTasks}
          />
          <NewTask title={"New task"} handleNewTask={this.handleNewTask} />
        </div>
      </div>
    );
  }
}

export default App;
