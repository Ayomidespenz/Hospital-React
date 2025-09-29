import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Contact from "./Contact"
import Services from "./Services"

const HomePage = () => {
  return (
    <div >
      {/* Hero Section */}
      <section 
        className="hero-section position-relative" 
        style={{
          backgroundImage:'url(/modern-hospital-exterior.png)',
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
                    padding: '0.6rem 1.5rem',
                    fontWeight: '400',
                    borderRadius: '50px'
                  }}
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  href="/services"
                  style={{
                    padding: '0.6rem 1.5rem',
                    fontWeight: '400',
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
      <Services />

      {/* Departments Section */}
      <section id="departments" className="section-padding bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold mb-3" style={{
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}>Medical Departments</h2>
              <p className="lead" style={{
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                Specialized departments with state-of-the-art facilities and expert medical staff
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              {
                icon: 'fa-stethoscope',
                title: 'Internal Medicine',
                description: 'Comprehensive care for adult diseases including diabetes, hypertension, and chronic conditions.'
              },
              {
                icon: 'fa-bone',
                title: 'Orthopedics',
                description: 'Treatment of musculoskeletal conditions, joint replacements, and sports injuries.'
              },
              {
                icon: 'fa-brain',
                title: 'Neurology',
                description: 'Diagnosis and treatment of nervous system disorders including stroke and epilepsy.'
              },
              {
                icon: 'fa-x-ray',
                title: 'Radiology',
                description: 'Advanced imaging services including MRI, CT scans, and ultrasound diagnostics.'
              },
              {
                icon: 'fa-eye',
                title: 'Ophthalmology',
                description: 'Complete eye care including cataract surgery, retinal treatments, and vision correction.'
              },
              {
                icon: 'fa-female',
                title: 'Gynecology',
                description: 'Women\'s health services including prenatal care, family planning, and gynecological surgery.'
              }
            ].map((dept, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3" style={{ color: '#0dcaf0' }}>
                        <i className={`fas ${dept.icon} fa-2x`}></i>
                      </div>
                      <Card.Title className="h5 mb-0" style={{
                        background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent'
                      }}>{dept.title}</Card.Title>
                    </div>
                    <Card.Text style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}>
                      {dept.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 
                className="display-5 fw-bold mb-4" 
                style={{
                  background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >
                About HisCure Hospital
              </h2>
              <p className="lead mb-4">
                For over 15 years, HisCure Hospital has been at the forefront of medical excellence, providing
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
              <Button 
  variant="outline-primary" 
  size="lg" 
  href="#contact"
  style={{
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    border: '2px solid #0dcaf0',
    padding: '0.5rem 1.5rem',
    fontWeight: '600',
    display: 'inline-block'
  }}
>
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
      <div style={{       background: 'linear-gradient(45deg,rgb(93, 111, 138), #0dcaf0)'
 }}>
        <Contact />
      </div>
    </div>
  )
}

export default HomePage
