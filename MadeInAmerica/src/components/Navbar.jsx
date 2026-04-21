import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function SiteNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Made In America
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/lineup">Lineup</Nav.Link>
            <Nav.Link as={NavLink} to="/schedule">Schedule</Nav.Link>
            <Nav.Link as={NavLink} to="/map">Map</Nav.Link>
            <Nav.Link as={NavLink} to="/planner">Planner</Nav.Link>
            <Nav.Link as={NavLink} to="/tickets">Tickets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;