import React from "react";
import { Button, Input, Header } from "semantic-ui-react";
import "../styles/Navigation.scss";
import "../styles/Flexbox.scss";

const Navigation = ({ title }) => (
  <div className="Navigation display-flex  content-center padding-top-10 padding-bottom-10 ">
    <div className="container display-flex  space-between items-center">
      <Header as="h3" className="title">{title}</Header>
      <Input icon='search' placeholder='Search...' />
    </div>
  </div>
);

export default Navigation;
