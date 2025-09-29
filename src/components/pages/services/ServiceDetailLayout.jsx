import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDetailLayout = ({ title, description, image, children }) => {
  return (
    <section className="py-5" style={{ minHeight: '80vh' }}>
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="fade-in-up">
              <h1 className="display-4 mb-4" style={{
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)', 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                {title}
              </h1>
              <p className="lead" style={{
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                opacity: 0.9
              }}>
                {description}
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <div className="rounded-3 overflow-hidden shadow">
              <img 
                src={image} 
                alt={title} 
                className="img-fluid w-100"
                style={{
                  objectFit: 'cover',
                  height: '400px',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-lg-5">
              {children}
              <div className="mt-4">
                <Link to="/services" className="me-3">
                  <Button 
                    variant="outline-primary"
                    style={{
                      borderColor: '#5d6f8a',
                      background: 'transparent',
                      backgroundImage: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    <i className="fas fa-arrow-left me-2"></i>Back to Services
                  </Button>
                </Link>
                <Link to="/appointment">
                  <Button 
                    style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      border: 'none',
                      fontWeight: '500'
                    }}
                  >
                    <i className="fas fa-calendar-check me-2"></i>Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetailLayout;
