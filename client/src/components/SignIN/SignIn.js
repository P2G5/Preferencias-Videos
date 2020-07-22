import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import '../SignIN/Signin.css';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: '',
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  responseGoogle = (res) => {
    this.setState({ login: true });
    localStorage.setItem('login', this.state.login);
    localStorage.setItem('name', res.profileObj.name);
    console.log(res);
    console.log(res.profileObj);
    this.setState({ name: res.profileObj.name });
    console.log('name', this.state.name);
  };
  render() {
    return (
      <div>
        <ReactBootstrap.Form>
          <ReactBootstrap.Form.Group controlId='formHorizontalEmail'>
            <ReactBootstrap.Form.Label column sm={2}>
              Email
            </ReactBootstrap.Form.Label>
            <ReactBootstrap.Col sm={10}>
              <ReactBootstrap.Form.Control
                type='email'
                placeholder='Email'
                style={{ width: '50%' }}
              />
            </ReactBootstrap.Col>
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId='formHorizontalPassword'>
            <ReactBootstrap.Form.Label column sm={2}>
              Password
            </ReactBootstrap.Form.Label>
            <ReactBootstrap.Col sm={10}>
              <ReactBootstrap.Form.Control
                type='password'
                placeholder='Password'
                style={{ width: '50%' }}
              />
            </ReactBootstrap.Col>
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId='formHorizontalCheck'>
            <ReactBootstrap.Col sm={{ span: 10, offset: 2, margin: '10px' }}>
              <ReactBootstrap.Form.Check label='Remember me' />
            </ReactBootstrap.Col>
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group>
            <ReactBootstrap.Col sm={{ span: 10, offset: 2 }}>
              <ReactBootstrap.Button type='submit' Link href='/'>
                Sign in
              </ReactBootstrap.Button>
              <br />

              <label className='sigupLab'>
                If You Are New <a href='/SignUP'>Sign Up</a>
              </label>
              <br />
            </ReactBootstrap.Col>
          </ReactBootstrap.Form.Group>
          <GoogleLogin
            Link
            to='/'
            clientId='1012158432115-qkgnp14lnivitq2hhccncpe27oifptqq.apps.googleusercontent.com'
            buttonText='login'
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </ReactBootstrap.Form>
      </div>
    );
  }
}
export default SignIn;
