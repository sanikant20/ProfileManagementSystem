import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Main button aligned to the left */}
        <Navbar.Brand href="/">Profile Management System</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Navigation buttons aligned to the right */}
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/all-profiles">Profile List</NavLink>
            <NavLink className="nav-link" to="/add-profiles">Add Profile</NavLink>
            <NavLink className="nav-link" to="/manage-profiles">Manage Profile</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
