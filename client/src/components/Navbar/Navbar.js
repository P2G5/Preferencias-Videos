import React from 'react';
import '../Navbar/Nav.css';
import { Button } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';

class Navbar extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  render() {
    return (
      <ReactBootstrap.Navbar sticky='top' bg='dark' variant='dark'>
        <ReactBootstrap.Navbar.Brand href='#home' style={{ color: '#b53a84' }}>
          PREFERENCIAS-VIDEOS
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Nav className='mr-auto'>
          <ReactBootstrap.Nav.Link href='/'>Home</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href='/SignIN'>
            Sign-in
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href='/SignUp'>
            Sign-up
          </ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>
        <ReactBootstrap.Form inline onSubmit={this.handleSubmit}>
          <ReactBootstrap.FormControl
            onChange={this.handleChange}
            type='text'
            placeholder='Search video'
            className='mr-sm-2'
          />
          <Button variant='outline-info'>Search</Button>
        </ReactBootstrap.Form>
      </ReactBootstrap.Navbar>
    );
  }
}
export default Navbar;
