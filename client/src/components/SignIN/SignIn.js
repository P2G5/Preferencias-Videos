import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import GoogleLogin from "react-google-login";
import "../SignIN/Signin.css";
import Navbar from "../Navbar/Navbar.js";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      singin: "",
      loginstate: null,
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/signin", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((result) => {
        console.log("result   ", result.data.name);
        this.setState({ singin: "sign in success " });
        localStorage.setItem("login", this.state.loginstate);
        localStorage.setItem("givenName", result.data.name);
        setTimeout(function() {
          window.location.href = "/";
        }, 2300);
      })
      .catch((err) => {
        console.log("ERROR FROM AXIOS ", err);
        this.setState({ singin: "Woring Email or Password " });
      });
  }
  responseGoogle = (res) => {
    this.setState({ login: true });
    localStorage.setItem("login", this.state.login);
    localStorage.setItem("name", res.profileObj.name);
    localStorage.setItem("givenName", res.profileObj.givenName);
    setTimeout(function() {
      window.location.href = "/";
    }, 2300);
  };
  render() {
    return (
      <div>
        <Navbar />
        <ReactBootstrap.Form>
          <h1>{this.state.singin}</h1>
          <ReactBootstrap.Form.Group controlId="formHorizontalEmail">
            <ReactBootstrap.Form.Label column sm={2}>
              Email
            </ReactBootstrap.Form.Label>
            <ReactBootstrap.Col sm={10}>
              <ReactBootstrap.Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange.bind(this)}
                style={{ width: "50%" }}
              />
            </ReactBootstrap.Col>
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="formHorizontalPassword">
            <ReactBootstrap.Form.Label column sm={2}>
              Password
            </ReactBootstrap.Form.Label>
            <ReactBootstrap.Col sm={10}>
              <ReactBootstrap.Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange.bind(this)}
                style={{ width: "50%" }}
              />
            </ReactBootstrap.Col>
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="formHorizontalCheck">
            <ReactBootstrap.Col sm={{ span: 10, offset: 2, margin: "10px" }}>
              <ReactBootstrap.Form.Check label="Remember me" />
            </ReactBootstrap.Col>
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group>
            <ReactBootstrap.Col sm={{ span: 10, offset: 2 }}>
              <ReactBootstrap.Button
                onClick={this.handleSubmit.bind(this)}
                Link
                href="/"
              >
                Sign in
              </ReactBootstrap.Button>
              <br />

              <label className="sigupLab">
                If You Are New <a href="/SignUP">Sign Up</a>
              </label>
              <br />
            </ReactBootstrap.Col>
          </ReactBootstrap.Form.Group>
          <GoogleLogin
            Link
            to="/"
            clientId="1012158432115-qkgnp14lnivitq2hhccncpe27oifptqq.apps.googleusercontent.com"
            buttonText="login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </ReactBootstrap.Form>
      </div>
    );
  }
}
export default SignIn;
