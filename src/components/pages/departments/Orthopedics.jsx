import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const Orthopedics = () => {
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  const conditions = [
    'Arthritis',
    'Sports Injuries',
    'Fractures',
    'Joint Pain',
    'Spinal Disorders',
    'Tendonitis',
    'Carpal Tunnel',
    'Osteoporosis'
  ];

  const treatments = [
    { 
      name: 'Joint Replacement', 
      icon: 'fa-bone', 
      description: 'Hip, knee, and shoulder replacements using advanced techniques' 
    },
    { 
      name: 'Arthroscopy', 
      icon: 'fa-cut', 
      description: 'Minimally invasive surgery for joint repair and reconstruction' 
    },
    { 
      name: 'Spinal Surgery', 
      icon: 'fa-spine', 
      description: 'Treatment for herniated discs, stenosis, and spinal deformities' 
    },
    { 
      name: 'Sports Medicine', 
      icon: 'fa-running', 
      description: 'Treatment and rehabilitation for sports-related injuries' 
    },
    { 
      name: 'Hand Surgery', 
      icon: 'fa-hand-paper', 
      description: 'Treatment for conditions affecting the hands and upper extremities' 
    },
    { 
      name: 'Pediatric Orthopedics', 
      icon: 'fa-child', 
      description: "Specialized care for children's bone and joint conditions" 
    }
  ];

  const faqs = [
    {
      question: "What is the recovery time for joint replacement surgery?",
      answer: "Recovery time varies by patient and procedure, but most patients can expect to return to normal activities within 3-6 months. Our team will create a personalized rehabilitation plan to optimize your recovery."
    },
    {
      question: "When should I see an orthopedic specialist?",
      answer: "Consider seeing a specialist if you experience persistent joint pain, difficulty with daily activities, decreased range of motion, or if you've had a recent injury with swelling or severe pain."
    },
    {
      question: "What non-surgical treatments are available?",
      answer: "We offer various non-surgical options including physical therapy, medications, injections, bracing, and lifestyle modifications before considering surgery."
    }
  ];

  return (
    <div className="py-5" style={{ marginTop: '76px', minHeight: '100vh' }}>
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto text-center">
            <Badge className="mb-3 px-3 py-2 rounded-pill" style={{ 
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              border: 'none'
            }}>
              Expert Orthopedic Care
            </Badge>
            <h1 className="display-4 fw-bold mb-3" style={gradientText}>
              Orthopedics Department
            </h1>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Comprehensive care for bones, joints, ligaments, tendons, and muscles
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="/images/orthopedics.jpg" 
                alt="Orthopedic Care"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="p-4">
                <h2 className="h3 mb-3" style={gradientText}>
                  Our Orthopedic Specialists
                </h2>
                <p style={{ color: '#5d6f8a' }}>
                  Our team of board-certified orthopedic surgeons and specialists provide expert care for a wide range of musculoskeletal conditions.
                </p>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-user-md" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Subspecialty Expertise</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Surgeons specialized in specific joints and conditions</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-procedures" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Advanced Techniques</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Utilizing the latest surgical and non-surgical approaches</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-heartbeat" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Patient-Centered Care</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Personalized treatment plans for optimal recovery</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-4" style={gradientText}>Conditions We Treat</h2>
                <p className="mb-4" style={{ color: '#5d6f8a' }}>
                  Our orthopedic specialists provide comprehensive care for a wide range of musculoskeletal conditions and injuries.
                </p>
                
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      {conditions.slice(0, 4).map((condition, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check-circle me-2" style={gradientText}></i>
                          <span style={{ color: '#5d6f8a' }}>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      {conditions.slice(4).map((condition, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check-circle me-2" style={gradientText}></i>
                          <span style={{ color: '#5d6f8a' }}>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>

                <div className="mt-4 p-4 rounded-3" style={{ background: 'rgba(13, 202, 240, 0.05)' }}>
                  <h3 className="h5 mb-2" style={gradientText}>Same-Day Appointments Available</h3>
                  <p className="mb-0" style={{ color: '#5d6f8a' }}>
                    Don't let pain limit your life. Contact us today to schedule an evaluation with one of our orthopedic specialists.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Treatments Section */}
        <Row className="mb-5">
          <Col className="text-center mb-5">
            <h2 className="h1 fw-bold mb-3" style={gradientText}>Our Treatments</h2>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Comprehensive orthopedic care using the latest techniques and technology
            </p>
          </Col>
          
          <Row className="g-4">
            {treatments.map((treatment, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div className="p-3 rounded-circle d-inline-flex mb-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                      <i className={`fas ${treatment.icon} fa-2x`} style={gradientText}></i>
                    </div>
                    <h3 className="h5 mb-3" style={gradientText}>{treatment.name}</h3>
                    <p className="mb-0" style={{ color: '#5d6f8a' }}>{treatment.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>

        {/* FAQ Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <h2 className="h3 mb-4 text-center" style={gradientText}>Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0" className="mb-4">
              {faqs.map((faq, index) => (
                <Accordion.Item 
                  eventKey={index.toString()} 
                  key={index} 
                  className="mb-2 border-0 shadow-sm"
                >
                  <Accordion.Header className="bg-white">
                    <span className="fw-medium" style={gradientText}>{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body style={{ color: '#5d6f8a' }}>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <div 
              className="p-5 rounded-3" 
              style={{ 
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)'
              }}
            >
              <h2 className="h1 fw-bold mb-3 text-white">Ready to Get Back to Doing What You Love?</h2>
              <p className="lead mb-4 text-white">
                Schedule a consultation with one of our orthopedic specialists today.
              </p>
              <a 
                href="/appointment" 
                className="btn btn-light btn-lg px-4 me-2"
                style={{
                  background: 'white',
                  border: 'none',
                  fontWeight: '500',
                  color: '#5d6f8a'
                }}
              >
                Book an Appointment
              </a>
              <a 
                href="/contact" 
                className="btn btn-outline-light btn-lg px-4"
                style={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: '500'
                }}
              >
                Contact Us
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Orthopedics;