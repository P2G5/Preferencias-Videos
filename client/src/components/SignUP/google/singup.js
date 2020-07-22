import React, { Component } from "react";
import GoogleLogin from "react-google-login";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  responseGoogle = (res) => {
    this.setState({ login: true });
    console.log(res);
    console.log(res.profileObj);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="1012158432115-qkgnp14lnivitq2hhccncpe27oifptqq.apps.googleusercontent.com"
          buttonText="login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          
        />
      </div>
    );
  }
}
export default SignUp;
