import React from 'react';
import {
  Grid,
  Navbar
} from 'react-bootstrap';

const TopNav = () =>
  <Grid>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Sombra Studios</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  </Grid>

export default TopNav;
