import React from "react";
import "./Nav.css";
import { Button } from "react-bootstrap";
import * as ReactBootstrap from 'react-bootstrap';

class Navbar extends React.Component {
  render() {
    return (
      // <header className="navbar">
      //   <div className="navbar__title navbar__item">Preferencias Videos</div>
      //   <div className="navbar__item">About Us</div>
      //   <div className="navbar__item">Contact</div>
      //   <div className="navbar__item">Help</div>
      //   <div className="search">
      //     <input type="text" placeholder="Search for video" />
      //     <button type="submit" className="srchbtn">Search</button>
      //   </div>
      // </header>
      <ReactBootstrap.Navbar sticky='top' bg='dark' variant='dark'>
        <ReactBootstrap.Navbar.Brand href='#home' style={{ color: '#b53a84' }}>
          PREFERENCIAS-VIDEOS
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Nav className='mr-auto'>
          <ReactBootstrap.Nav.Link href='/'>Home</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href='/SignIN'>
            Sign-in
          </ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>
        <ReactBootstrap.Form inline onSubmit={this.handleSubmit}>
          <ReactBootstrap.FormControl
            onChange={this.handleChange}
            type='text'
            placeholder='Search video'
            className='Searchbox'
          />
          <Button variant='outline-info'>Search</Button>
        </ReactBootstrap.Form>
      </ReactBootstrap.Navbar>
    );
  }
}
export default Navbar;
