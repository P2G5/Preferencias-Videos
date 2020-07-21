import React from "react";
import "./Nav.css";
import { Button } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      word: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.word);
  };

  render() {
    return (
      <ReactBootstrap.Navbar sticky="top" bg="dark" variant="dark">
        <ReactBootstrap.Navbar.Brand href="#home" style={{ color: "#b53a84" }}>
          PREFERENCIAS-VIDEOS
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Nav className="mr-auto">
          <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="/SignIN">
            Sign-in
          </ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>
        <ReactBootstrap.Form inline onSubmit={this.handleSubmit}>
          <ReactBootstrap.FormControl
            onChange={this.handleChange}
            type="text"
            placeholder="Search video"
            className="Searchbox"
            onChange={this.handleChange.bind(this)}
            value={this.state.word}
          />
          <Button onClick={this.handleSubmit.bind(this)} variant="outline-info">
            Search
          </Button>
        </ReactBootstrap.Form>
      </ReactBootstrap.Navbar>
    );
  }
}
export default Navbar;
