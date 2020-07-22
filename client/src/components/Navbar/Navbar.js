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
    if (localStorage.getItem("login")) {
      return (
        <div>
          <ReactBootstrap.Navbar sticky="top" bg="dark" variant="dark">
            <ReactBootstrap.Navbar.Brand
              href="/"
              style={{ color: "#b53a84" }}
            >
              PREFERENCIAS-VIDEOS
            </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/Profil">
                Welcome <a href="/Profil">{localStorage.getItem("name")}</a>
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/SignIN">
                <a
                  onClick={() => {
                    localStorage.clear();
                  }}
                  href="/"
                >
                  Logout
                </a>
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Form inline onSubmit={this.handleSubmit}>
              <ReactBootstrap.FormControl
                onChange={this.handleChange}
                type="text"
                placeholder="Search video"
                className="Searchbox"
                value={this.state.word}
              />
              <Button
                onClick={this.handleSubmit.bind(this)}
                variant="outline-info"
              >
                Search
              </Button>
            </ReactBootstrap.Form>
          </ReactBootstrap.Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <ReactBootstrap.Navbar sticky="top" bg="dark" variant="dark">
            <ReactBootstrap.Navbar.Brand
              href="/"
              style={{ color: "#b53a84" }}
            >
              PREFERENCIAS-VIDEOS
            </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/SignIN">
                Sign In
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Form inline onSubmit={this.handleSubmit}>
              <ReactBootstrap.FormControl
                onChange={this.handleChange}
                type="text"
                placeholder="Search video"
                className="Searchbox"
                value={this.state.word}
              />
              <Button
                onClick={this.handleSubmit.bind(this)}
                variant="outline-info"
              >
                Search
              </Button>
            </ReactBootstrap.Form>
          </ReactBootstrap.Navbar>
        </div>
      );
    }
  }
}
export default Navbar;
