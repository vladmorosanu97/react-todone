import React, { Component } from 'react';
import { Form, TextArea, Header, Button, Divider } from 'semantic-ui-react';

class NewTask extends Component {
  state = {
    id: Math.random() * 1000000,
    text: '',
    date: '',
    dayOfTheWeek: ''
  };

  setText = value => {
    this.setState({
      text: value
    });
  };

  clearText = () => {
    this.setState({ text: '' });
  };

  handleOnSubmit = () => {
    let localTask = this.state;
    localTask.date = new Date().toLocaleDateString();
    localTask.dayOfTheWeek = new Date().getDay();
    localTask.isEdited = false;

    this.props.handleNewTask(localTask);
    this.clearText();
  };

  render() {
    const { text } = this.state;
    const { title } = this.props;
    return (
      <Form className="padding-top-20">
        <Header as="h3" className="margin-top-10">
          {title}
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
