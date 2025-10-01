      import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
  return (
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
              For over 14+ years, HisCure Hospital has been at the forefront of medical excellence, providing
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
                    <h5 className="mb-1">14+ Years</h5>
                    <p className="text-muted mb-0">of Excellence</p>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-center">
                  <div className="text-hospital-primary me-3">
                    <i className="fas fa-users fa-2x"></i>
                  </div>
                </div>
              </Col>
            </Row>
            {/* <Button 
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
            </Button> */}
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
  );
};

export default About;
