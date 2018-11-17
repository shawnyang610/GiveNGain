import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomeNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">GiveNGain</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            {/* <NavItem eventKey ={1} compoentClass = {Link} href="/" tp="/">
            Home
          </NavItem>
          <NavItem eventKey ={2} compoentClass = {Link} href="/about" tp="/about">
            Need Help 
          </NavItem>
          <NavItem eventKey ={3} compoentClass = {Link} href="/news" tp="/news">
            Help
          </NavItem> */}
            <NavDropdown eventKey={3} title="Hi John!" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Profile</MenuItem>
              <MenuItem eventKey={3.2}>History</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Sign Out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
