import React from "react";
import Navbar from "../Navbar/Navbar.js";
import * as ReactBootstrap from "react-bootstrap";

import axios from "axios";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      SignUp: "",
    };
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`/createUsers`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then((result) => {
        console.log(result.data);
        this.setState({ SignUp: "Success Please Login" });
        setTimeout(function() {
          window.location.href = "/SignIN";
        }, 2300);
      })
      .catch((err) => {
        console.log("err", err);
        this.setState({ SignUp: "error please use other email address" });
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <ReactBootstrap.Form>
          <br />
          <br />
          <ReactBootstrap.InputGroup
            className="mb-3"
            style={{ width: "50%", margin: "10px" }}
            sm={10}
          >
            <h1>{this.state.SignUp}</h1>
            <ReactBootstrap.InputGroup.Prepend>
              <ReactBootstrap.InputGroup.Text>
                UserName
              </ReactBootstrap.InputGroup.Text>
            </ReactBootstrap.InputGroup.Prepend>
            <ReactBootstrap.FormControl
              name="name"
              type="text"
              placeholder="Enter Your User Name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
            />
          </ReactBootstrap.InputGroup>
          <br />
          <br />
          <ReactBootstrap.Form.Group controlId="formGroupEmail">
            <ReactBootstrap.Form.Label column sm={10}>
              Email address
            </ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              sm={10}
              style={{ width: "50%", margin: "10px" }}
            />
          </ReactBootstrap.Form.Group>
          <ReactBootstrap.Form.Group controlId="formGroupPassword">
            <ReactBootstrap.Form.Label column sm={10}>
              Password
            </ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              sm={10}
              style={{ width: "50%", margin: "10px" }}
            />
          </ReactBootstrap.Form.Group>
          <ReactBootstrap.Button onClick={this.handleSubmit.bind(this)}>
            Sign-UP
          </ReactBootstrap.Button>
        </ReactBootstrap.Form>
      </div>
    );
  }
}
export default SignUp;
