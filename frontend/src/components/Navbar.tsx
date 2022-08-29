import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {


  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/login" as={NavLink}>
            Login
          </Nav.Link>
          <Nav.Link to="/register" as={NavLink}>
            Register
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  )
}