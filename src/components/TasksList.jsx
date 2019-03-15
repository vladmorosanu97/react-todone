import React from "react";
import Task from "./Task";
import { Header } from "semantic-ui-react";

const TasksList = ({ tasks }) => {
  return (
    <div className="margin-top-20">
      <Header as="h3">Tasks</Header>
      <div className="border-top margin-bottom-20"></div>
      {tasks.map(title => (
        <Task key={title} />
      ))}
    </div>
  );
};

export default TasksList;
