import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-hospital-primary">
          <i className="fas fa-hospital-alt me-2"></i>
          HisCure Hospital
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#emergency">Emergency Care</NavDropdown.Item>
              <NavDropdown.Item href="#surgery">Surgery</NavDropdown.Item>
              <NavDropdown.Item href="#cardiology">Cardiology</NavDropdown.Item>
              <NavDropdown.Item href="#pediatrics">Pediatrics</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Departments" id="departments-dropdown">
              <NavDropdown.Item href="#internal-medicine">Internal Medicine</NavDropdown.Item>
              <NavDropdown.Item href="#orthopedics">Orthopedics</NavDropdown.Item>
              <NavDropdown.Item href="#neurology">Neurology</NavDropdown.Item>
              <NavDropdown.Item href="#radiology">Radiology</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown title="Patient Portal" id="patient-dropdown">
              <NavDropdown.Item as={Link} to="/patient/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/patient/register">
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/patient-portal">
                Dashboard
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/staff/login" className="btn btn-primary text-white ms-2 px-3">
              Staff Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
