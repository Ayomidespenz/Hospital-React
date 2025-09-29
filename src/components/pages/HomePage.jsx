import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Contact from "./Contact"

const HomePage = () => {
  return (
    <div style={{ marginTop: "76px" }}>
      {/* Hero Section */}
      <section 
        className="hero-section position-relative" 
        style={{
          background: `linear-gradient(rgba(159, 31, 159, 0.2), rgba(255, 51, 153, 0.3)), url(/modern-hospital-exterior.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '90vh',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container className="position-relative" style={{ zIndex: 1, paddingTop: '120px', paddingBottom: '120px' }}>
          <Row className="align-items-center">
            <Col lg={6} className="text-black text-start">
              <h1 style={{ 
                fontSize: '3.0rem', 
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}>
                Quality Care<br />
                for Every Stage<br />
                Of Womanhood
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.6rem', textColor: 'black',  }}>
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
                      <h5 className="mb-1">15+ Years</h5>
                      <p className="text-muted mb-0">of Excellence</p>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <div className="text-hospital-primary me-3">
                      <i className="fas fa-users fa-2x"></i>
                    </div>
                    {/* <div>
                      <h5 className="mb-1">500+ Doctors</h5>
                      <p className="text-muted mb-0">Expert Medical Team</p>
                    </div> */}
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
                  src="/modern-hospital-exterior.png"
                  alt="HisCure Hospital Building"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <div style={{ background: 'linear-gradient(45deg, #9f1f9f, #ff3399)' }}>
        <Contact />
      </div>
    </div>
  )
}

export default HomePage
