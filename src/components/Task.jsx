import React, { Component } from 'react';
import { Message } from "semantic-ui-react";

class Task extends Component {
  state = {};
  render() {
    return (
      <Message
        header="Changes in Service"
        content="We updated our privacy policy here to better service our customers. We recommend reviewing the changes."
      />
    );
  }
}

export default Task;
