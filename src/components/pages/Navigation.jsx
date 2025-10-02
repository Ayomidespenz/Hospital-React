import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
  // Gradient text style for navigation items
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" style={gradientText} className="fw-bold">
          <i className="fas fa-hospital-alt me-2"></i>
          HisCure Hospital
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={gradientText}>Home</Nav.Link>
            <NavDropdown 
              title={<span style={gradientText}>Services</span>} 
              id="services-dropdown"
            >
              <NavDropdown.Item as={Link} to="/services/emergency-care" style={gradientText}>Emergency Care</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/surgery" style={gradientText}>Surgery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/gynecological-care" style={gradientText}>Gynecological Care</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/prenatal-postnatal-care" style={gradientText}>Prenatal & Postnatal Care</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown 
              title={<span style={gradientText}>Departments</span>} 
              id="departments-dropdown"
            >
              <NavDropdown.Item as={Link} to="/departments/internal-medicine" style={gradientText}>Internal Medicine</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/general-surgery" style={gradientText}>General Surgery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/pediatrics-surgery" style={gradientText}>Pediatrics Surgery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/geriatrics-surgery" style={gradientText}>Geriatrics Surgery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/orthopedics" style={gradientText}>Orthopedics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/neurology" style={gradientText}>Neurology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/radiology" style={gradientText}>Radiology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/ophthalmology" style={gradientText}>Ophthalmology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/gynecology-obstetrics" style={gradientText}>Gynecology and Obstetrics</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" style={gradientText}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={gradientText}>Contact</Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown 
              title={<span style={gradientText}>Patient Portal</span>} 
              id="patient-dropdown"
            >
              <NavDropdown.Item as={Link} to="/patient/login" style={gradientText}>Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/patient/register" style={gradientText}>Register</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/patient-portal" style={gradientText}>Dashboard</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link 
              as={Link} 
              to="/staff/login" 
              className="ms-2 px-3"
              style={{
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: '500'
              }}
            >
              Staff Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
