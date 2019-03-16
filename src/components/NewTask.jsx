import React, { Component } from "react";
import { Form, TextArea, Header, Button, Divider } from "semantic-ui-react";

class NewTask extends Component {
  constructor(props) {
    super(props);
    if (props.task !== undefined) {
      this.state = {
        ...props.task
      };
    } else {
      this.state = {
        id: Math.random() * 1000000,
        text: "",
        date: "",
        dayOfTheWeek: ""
      };
    }
  }

  setText = value => {
    this.setState({
      text: value
    });
  };

  clearText = () => {
    this.setState({ text: "" });
  };

  setDateTime = () => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.date = new Date().toLocaleDateString();
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.dayOfTheWeek = new Date().getDay(); // only to update state, not rendering
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.isEdited = false;
  };

  handleOnSubmit = () => {
    this.setDateTime();

    this.props.handleNewTask(this.state);
    this.clearText();
  };

  render() {
    const { text } = this.state;
    return (
      <Form className="padding-top-20">
        <Header as="h3" className="margin-top-10">
          {this.props.title}
        </Header>
        <Divider />
        <TextArea
          onChange={textarea => this.setText(textarea.target.value)}
          value={text}
          placeholder="Enter something interesting"
        />
        <div className="display-flex flex-end margin-top-10">
          <Button basic color="red" onClick={this.clearText}>
            Clear
          </Button>
          <Button basic color="green" onClick={this.handleOnSubmit}>
            Save
          </Button>
        </div>
      </Form>
    );
  }
}

export default NewTask;
