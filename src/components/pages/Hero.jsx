import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import AnimateOnScroll from '../utils/AnimateOnScroll';
import '../../styles/animations.css';

const Hero = () => {
  const features = [
    { id: 1, text: '24/7 Emergency Services' },
    { id: 2, text: 'Expert Medical Team' },
    { id: 3, text: 'Modern Facilities' },
  ];

  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* Background overlay */}
      <div className="hero-bg-overlay"></div>
      
      <Container className="position-relative z-1 py-5">
        <Row className="align-items-center min-vh-75 py-5">
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <h6 className="text-uppercase text-white mb-3">Welcome to Arctic Gynae Centre</h6>
              <h1 className="display-4 fw-bold text-white mb-4">
                Expert Care for Women's Health
              </h1>
              <p className="lead text-white-50 mb-4">
                Providing compassionate and comprehensive gynecological care with state-of-the-art technology and personalized treatment plans.
              </p>
              
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <Button 
                  as="a" 
                  href="/appointment" 
                  variant="light" 
                  size="lg" 
                  className="rounded-pill px-4 d-inline-flex align-items-center"
                >
                  <FaCalendarAlt className="me-2" /> Book Appointment
                </Button>
                <Button 
                  as="a" 
                  href="tel:+2349132159156" 
                  variant="outline-light" 
                  size="lg" 
                  className="rounded-pill px-4 d-inline-flex align-items-center"
                >
                  <FaPhoneAlt className="me-2" /> Call Now
                </Button>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in-up" delay={400} className="mt-5">
              <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start">
                {features.map((feature, index) => (
                  <div key={feature.id} className="d-flex align-items-center">
                    <FaCheckCircle className="text-white me-2" />
                    <span className="text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </Col>
          
          <Col lg={6} className="position-relative">
            <AnimateOnScroll animation="slide-in-right" delay={300} className="position-relative">
              <div className="hero-image-container position-relative">
                <div className="hero-image-overlay"></div>
                <img 
                  src="/images/hero-doctor.jpg" 
                  alt="Doctor with patient" 
                  className="img-fluid rounded-4 shadow-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/800x600/0d6efd/ffffff?text=Doctor+with+Patient';
                  }}
                />
              </div>
              
              {/* Experience Badge */}
              <div className="experience-badge bg-white rounded-4 p-3 shadow-sm position-absolute top-0 end-0 translate-middle-y">
                <div className="text-center">
                  <div className="display-4 fw-bold text-primary">15+</div>
                  <div className="text-dark fw-medium">Years of</div>
                  <div className="text-dark fw-medium">Experience</div>
                </div>
              </div>
            </AnimateOnScroll>
          </Col>
        </Row>
      </Container>
      
      {/* Emergency Banner */}
      <div className="emergency-banner bg-primary text-white py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <div className="emergency-icon me-3">
                  <FaPhoneAlt className="text-white" />
                </div>
                <div>
                  <h5 className="mb-0">Emergency Medical Help</h5>
                  <p className="mb-0">24/7 emergency services available</p>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-center text-md-end mt-3 mt-md-0">
              <Button 
                as="a" 
                href="tel:+2349132159156" 
                variant="light" 
                size="sm" 
                className="rounded-pill px-4 d-inline-flex align-items-center"
              >
                <FaPhoneAlt className="me-2" /> Call Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      
      <style jsx>{`
        .hero-section {
          background: linear-gradient(rgba(13, 110, 253, 0.9), rgba(13, 110, 253, 0.7)), 
                      url('/images/hero-bg.jpg') no-repeat center center/cover;
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.9) 0%, rgba(13, 202, 240, 0.8) 100%);
          z-index: 0;
        }
        
        .hero-image-container {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .hero-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(13, 110, 253, 0.3), rgba(13, 202, 240, 0.3));
          z-index: 1;
        }
        
        .hero-image-container img {
          width: 100%;
          height: auto;
          transition: transform 0.5s ease;
        }
        
        .hero-image-container:hover img {
          transform: scale(1.03);
        }
        
        .experience-badge {
          transform: translateY(-50%);
          z-index: 2;
          width: 140px;
        }
        
        @media (max-width: 991.98px) {
          .experience-badge {
            width: 120px;
            padding: 0.75rem !important;
          }
          
          .experience-badge .display-4 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 767.98px) {
          .hero-section {
            text-align: center;
            padding: 100px 0 0;
          }
          
          .experience-badge {
            position: relative !important;
            transform: none;
            margin: -20px auto 20px;
            width: 150px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
