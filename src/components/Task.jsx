import React, { Component } from "react";
import { Card, Icon, Image, Header, Button } from "semantic-ui-react";
class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.task
    };
  }

  render() {
    const { id, text, date, dayOfTheWeek, isComplete } = this.state;
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return (
      <Card
        className="full-width"
        style={{
          backgroundColor: isComplete ? "#b7fbff" : "white"
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
          {isComplete ? (
            null
          ) : (
            <div className="display-flex space-between margin-top-10">
              <Button basic color="blue" onClick={() => this.props.handleEditTask(id)}>
                Modify
              </Button>
              <Button basic color="green" onClick={() => this.props.handleCompletedTask(id)}>
                Done
              </Button>
            </div>
          )}
        </Card.Content>
      </Card>
    );
  }
}

export default Task;
