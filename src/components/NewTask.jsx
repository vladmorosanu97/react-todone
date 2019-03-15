import React, { Component } from "react";
import { Form, TextArea, Header, Button } from "semantic-ui-react";

class NewTask extends Component {
  state = {};
  render() {
    return (
      <Form className="margin-top-20">
        <Header as="h3" className="margin-top-10">
          Add task
        </Header>
        <TextArea placeholder="Enter something interesting" />
        <div className="display-flex flex-end margin-top-10">
          <Button basic color="red">
            Clear
          </Button>
          <Button basic color="green">
            Save
          </Button>
        </div>
      </Form>
    );
  }
}

export default NewTask;
