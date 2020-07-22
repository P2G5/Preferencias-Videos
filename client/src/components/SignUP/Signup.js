import React from "react";
import Navbar from "../Navbar/Navbar.js";
import * as ReactBootstrap from "react-bootstrap";

class SignUp extends React.Component {
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
            <ReactBootstrap.InputGroup.Prepend>
              <ReactBootstrap.InputGroup.Text>
                UserName
              </ReactBootstrap.InputGroup.Text>
            </ReactBootstrap.InputGroup.Prepend>
            <ReactBootstrap.FormControl
              type="text"
              placeholder="Enter Your User Name"
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
              placeholder="Enter email"
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
              placeholder="Password"
              sm={10}
              style={{ width: "50%", margin: "10px" }}
            />
          </ReactBootstrap.Form.Group>
          <ReactBootstrap.Button variant="primary" type="submit">
            Sign-UP
          </ReactBootstrap.Button>
        </ReactBootstrap.Form>
      </div>
    );
  }
}
export default SignUp;
