import { Container, Row, Col, Card, Button } from "react-bootstrap"

const HomePage = () => {
  return (
    <div style={{ marginTop: "76px" }}>
      {/* Hero Section */}
      <section 
        className="hero-section position-relative" 
        style={{
          background: 'linear-gradient(45deg, #9f1f9f, #ff3399)',
          minHeight: '90vh',
          overflow: 'hidden'
        }}
      >
        <div 
          className="position-absolute w-100 h-100" 
          style={{
            backgroundImage: `url(../assets/modern-hospital-exterior.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.2',
            top: 0,
            left: 0
          }}
        />
        <Container className="position-relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
          <Row className="align-items-center">
            <Col lg={6} className="text-white text-start">
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}>
                Quality Care<br />
                for Every Stage<br />
                Of Womanhood
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.2rem', opacity: '0.9' }}>
                Experience Exceptional Healthcare with HisCure Hospital - 
                Your Trusted Specialist Healthcare Provider.
              </p>
              <div className="d-flex gap-3">
                <Button 
                  variant="light" 
                  size="lg" 
                  href="/patient/register"
                  style={{
                    padding: '0.8rem 2rem',
                    fontWeight: '500',
                    borderRadius: '50px'
                  }}
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  href="#services"
                  style={{
                    padding: '0.8rem 2rem',
                    fontWeight: '500',
                    borderRadius: '50px'
                  }}
                >
                  Our Services
                </Button>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              {/* This column is intentionally left empty for the background image effect */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold text-hospital-primary mb-3">Our Medical Services</h2>
              <p className="lead text-muted">Comprehensive healthcare services delivered by our expert medical team</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-hospital-primary mb-3">
                    <i className="fas fa-ambulance fa-3x"></i>
                  </div>
                  <Card.Title className="h5">Emergency Care</Card.Title>
                  <Card.Text className="text-muted">
                    24/7 emergency medical services with rapid response and advanced life support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-hospital-primary mb-3">
                    <i className="fas fa-user-md fa-3x"></i>
                  </div>
                  <Card.Title className="h5">Surgery</Card.Title>
                  <Card.Text className="text-muted">
                    Advanced surgical procedures with minimally invasive techniques and expert surgeons.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-hospital-primary mb-3">
                    <i className="fas fa-heartbeat fa-3x"></i>
                  </div>
                  <Card.Title className="h5">Cardiology</Card.Title>
                  <Card.Text className="text-muted">
                    Comprehensive heart care including diagnostics, treatment, and cardiac rehabilitation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-hospital-primary mb-3">
                    <i className="fas fa-baby fa-3x"></i>
                  </div>
                  <Card.Title className="h5">Pediatrics</Card.Title>
                  <Card.Text className="text-muted">
                    Specialized medical care for infants, children, and adolescents with gentle approach.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Departments Section */}
      <section id="departments" className="section-padding bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold text-hospital-primary mb-3">Medical Departments</h2>
              <p className="lead text-muted">
                Specialized departments with state-of-the-art facilities and expert medical staff
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-hospital-primary me-3">
                      <i className="fas fa-stethoscope fa-2x"></i>
                    </div>
                    <Card.Title className="h5 mb-0">Internal Medicine</Card.Title>
                  </div>
                  <Card.Text className="text-muted">
                    Comprehensive care for adult diseases including diabetes, hypertension, and chronic conditions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-hospital-primary me-3">
                      <i className="fas fa-bone fa-2x"></i>
                    </div>
                    <Card.Title className="h5 mb-0">Orthopedics</Card.Title>
                  </div>
                  <Card.Text className="text-muted">
                    Treatment of musculoskeletal conditions, joint replacements, and sports injuries.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-hospital-primary me-3">
                      <i className="fas fa-brain fa-2x"></i>
                    </div>
                    <Card.Title className="h5 mb-0">Neurology</Card.Title>
                  </div>
                  <Card.Text className="text-muted">
                    Diagnosis and treatment of nervous system disorders including stroke and epilepsy.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-hospital-primary me-3">
                      <i className="fas fa-x-ray fa-2x"></i>
                    </div>
                    <Card.Title className="h5 mb-0">Radiology</Card.Title>
                  </div>
                  <Card.Text className="text-muted">
                    Advanced imaging services including MRI, CT scans, and ultrasound diagnostics.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-hospital-primary me-3">
                      <i className="fas fa-eye fa-2x"></i>
                    </div>
                    <Card.Title className="h5 mb-0">Ophthalmology</Card.Title>
                  </div>
                  <Card.Text className="text-muted">
                    Complete eye care including cataract surgery, retinal treatments, and vision correction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-hospital-primary me-3">
                      <i className="fas fa-female fa-2x"></i>
                    </div>
                    <Card.Title className="h5 mb-0">Gynecology</Card.Title>
                  </div>
                  <Card.Text className="text-muted">
                    Women's health services including prenatal care, family planning, and gynecological surgery.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="display-5 fw-bold text-hospital-primary mb-4">About HisCure Hospital</h2>
              <p className="lead mb-4">
                For over 25 years, HisCure Hospital has been at the forefront of medical excellence, providing
                compassionate care and innovative treatments to our community.
              </p>
              <p className="mb-4">
                Our state-of-the-art facility houses advanced medical technology and is staffed by board-certified
                physicians, skilled nurses, and dedicated healthcare professionals who are committed to delivering the
                highest quality of care.
              </p>
              <Row className="g-4 mb-4">
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <div className="text-hospital-primary me-3">
                      <i className="fas fa-award fa-2x"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">25+ Years</h5>
                      <p className="text-muted mb-0">of Excellence</p>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <div className="text-hospital-primary me-3">
                      <i className="fas fa-users fa-2x"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">500+ Doctors</h5>
                      <p className="text-muted mb-0">Expert Medical Team</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Button variant="primary" size="lg" href="#contact">
                Learn More About Us
              </Button>
            </Col>
            <Col lg={6}>
              <div className="text-center">
                <img
                  src="../assets/modern-hospital-exterior.png"
                  alt="HisCure Hospital Building"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-hospital-primary text-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold mb-3">Contact Us</h2>
              <p className="lead">Get in touch with us for appointments, inquiries, or emergency services</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4} className="text-center">
              <div className="mb-3">
                <i className="fas fa-phone fa-3x mb-3"></i>
                <h5>Emergency Hotline</h5>
                <p className="mb-0">
                  <strong>(555) 911-HELP</strong>
                  <br />
                  24/7 Emergency Services
                </p>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="mb-3">
                <i className="fas fa-calendar-alt fa-3x mb-3"></i>
                <h5>Appointments</h5>
                <p className="mb-0">
                  <strong>(555) 123-CARE</strong>
                  <br />
                  Mon-Fri: 8AM-6PM
                  <br />
                  Sat: 9AM-2PM
                </p>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="mb-3">
                <i className="fas fa-map-marker-alt fa-3x mb-3"></i>
                <h5>Location</h5>
                <p className="mb-0">
                  123 Healthcare Drive
                  <br />
                  Medical City, MC 12345
                  <br />
                  <a href="#" className="text-white">
                    Get Directions
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <Button variant="light" size="lg" href="/patient/register">
                Schedule an Appointment
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={4}>
              <h5 className="mb-3">
                <i className="fas fa-hospital-alt me-2"></i>
                HisCure Hospital
              </h5>
              <p className="text-muted">
                Providing exceptional healthcare services with compassion, innovation, and excellence since 1998.
              </p>
            </Col>
            <Col md={2}>
              <h6 className="mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#services" className="text-muted text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#departments" className="text-muted text-decoration-none">
                    Departments
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h6 className="mb-3">Patient Portal</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/patient/login" className="text-muted text-decoration-none">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/patient/register" className="text-muted text-decoration-none">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/patient/appointments" className="text-muted text-decoration-none">
                    Appointments
                  </a>
                </li>
                <li>
                  <a href="/patient/records" className="text-muted text-decoration-none">
                    Medical Records
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h6 className="mb-3">For Staff</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/staff/login" className="text-muted text-decoration-none">
                    Staff Login
                  </a>
                </li>
                <li>
                  <a href="/staff-portal" className="text-muted text-decoration-none">
                    Staff Portal
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h6 className="mb-3">Follow Us</h6>
              <div className="d-flex gap-2">
                <a href="#" className="text-muted">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <Row>
            <Col className="text-center">
              <p className="text-muted mb-0">
                &copy; 2025 HisCure Hospital. All rights reserved. |
                <a href="#" className="text-muted text-decoration-none">
                  {" "}
                  Privacy Policy
                </a>{" "}
                |
                <a href="#" className="text-muted text-decoration-none">
                  {" "}
                  Terms of Service
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default HomePage
