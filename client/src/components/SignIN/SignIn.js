import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class SignIn extends React.Component {
  render() {
    return (
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
          <ReactBootstrap.Col sm={{ span: 10, offset: 2,margin:"10px" }}>
            <ReactBootstrap.Form.Check label='Remember me' />
          </ReactBootstrap.Col>
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Form.Group>
          <ReactBootstrap.Col sm={{ span: 10, offset: 2 }}>
            <ReactBootstrap.Button type='submit'>Sign in</ReactBootstrap.Button>
          </ReactBootstrap.Col>
        </ReactBootstrap.Form.Group>
      </ReactBootstrap.Form>
    );
  }
}
export default SignIn;
