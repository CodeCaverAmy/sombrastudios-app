import React from 'react';
import {
  Grid,
  Navbar, Nav, NavItem,
  Glyphicon, Badge
} from 'react-bootstrap';

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
          <NavItem eventKey={2} href="#">Features</NavItem>
          <NavItem eventKey={3} href="#">Pricing</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#"><Glyphicon bsSize="lage" glyph="glyphicon glyphicon-shopping-cart" /> &nbsp; <Badge>42</Badge> </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Grid>

export default TopNav;
