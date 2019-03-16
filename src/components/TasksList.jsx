import React from "react";
import Task from "./Task";
import { Header, Button } from "semantic-ui-react";
import NewTask from "./NewTask";

const TasksList = ({
  title,
  tasks,
  isCompleted,
  handleCompletedTask,
  completedList,
  handleDeleteCompleteTasks,
  handleEditTask,
  handleNewTask
}) => {
  if (tasks.length > 0) {
    return (
      <div className="margin-top-20">
        <div className="display-flex space-between">
          <Header as="h3">{title}</Header>
          {completedList ? (
            <Button
              basic
              color="red"
              content="Delete completed tasks"
              onClick={handleDeleteCompleteTasks}
            />
          ) : null}
        </div>
        {tasks.map(task => {
          if (!task.isEdited) {
            return (
              <Task
                style={{
                  backgroundColor: isCompleted ? "#93FF96" : "white"
                }}
                key={task.id}
                task={task}
                handleCompletedTask={handleCompletedTask}
                handleEditTask={handleEditTask}
              />
            );
          } else {
            return <NewTask task={task} title={"Change task"} handleNewTask={handleNewTask} />;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default TasksList;
