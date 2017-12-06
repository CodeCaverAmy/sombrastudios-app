import React from 'react';
import {
  Grid,
  Navbar, Nav, NavItem
} from 'react-bootstrap';

import CartCount from './CartCount';

const TopNav = () =>
  <Grid>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Sombra Studios</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#"><CartCount /></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Grid>

export default TopNav;
