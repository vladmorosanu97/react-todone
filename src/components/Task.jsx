import React from 'react';
import { Card, Image, Header, Button } from 'semantic-ui-react';

const Task = props => {
  const { id, text, date, dayOfTheWeek, isComplete } = props.task;
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return (
    <Card
      className="full-width"
      style={{
        backgroundColor: isComplete ? '#b7fbff' : 'white'
      }}
    >
      <Image />
      <Card.Content>
        <div className="display-flex space-between">
          <Header as="h5">{days[dayOfTheWeek]}</Header>
          <Card.Meta>
            <span className="date">{date}</span>
          </Card.Meta>
        </div>

        <Card.Description>{text}</Card.Description>
        {isComplete ? null : (
          <div className="display-flex space-between margin-top-10">
            <Button
              basic
              color="blue"
              onClick={() => props.handleChangeTaskToEdit(id)}
            >
              Modify
            </Button>
            <Button
              basic
              color="green"
              onClick={() => props.handleCompletedTask(id)}
            >
              Done
            </Button>
          </div>
        )}
      </Card.Content>
    </Card>
  );
};

export default Task;
