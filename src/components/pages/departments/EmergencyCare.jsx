import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const EmergencyCare = () => {
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  const conditions = [
    'Chest Pain',
    'Breathing Difficulties',
    'Severe Injuries',
    'Stroke Symptoms',
    'Heart Attack',
    'Severe Bleeding',
    'Loss of Consciousness',
    'Severe Burns'
  ];

  const services = [
    { 
      name: 'Trauma Care', 
      icon: 'fa-ambulance', 
      description: 'Immediate care for severe injuries and accidents' 
    },
    { 
      name: 'Cardiac Emergency', 
      icon: 'fa-heartbeat', 
      description: '24/7 cardiac care for heart attacks and conditions' 
    },
    { 
      name: 'Pediatric Emergency', 
      icon: 'fa-baby', 
      description: 'Specialized emergency care for children' 
    },
    { 
      name: 'Stroke Care', 
      icon: 'fa-brain', 
      description: 'Rapid response and treatment for stroke patients' 
    },
    { 
      name: 'Critical Care', 
      icon: 'fa-procedures', 
      description: 'Advanced life support and intensive care' 
    },
    { 
      name: 'Triage', 
      icon: 'fa-user-md', 
      description: 'Immediate assessment and prioritization' 
    }
  ];

  const faqs = [
    {
      question: "When should I go to the emergency room?",
      answer: "Seek emergency care for severe or life-threatening conditions such as difficulty breathing, chest pain, severe bleeding, sudden confusion, or loss of consciousness."
    },
    {
      question: "How quickly will I be seen in the ER?",
      answer: "Patients are seen based on the severity of their condition. Critical cases are prioritized to ensure immediate attention."
    },
    {
      question: "What should I bring to the ER?",
      answer: "Bring your ID, insurance information, list of medications, and any relevant medical records if available."
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
              24/7 Emergency Services
            </Badge>
            <h1 className="display-4 fw-bold mb-3" style={gradientText}>
              Emergency Care Department
            </h1>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              24/7 emergency medical services with expert care when you need it most
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="/images/emergency-care.jpg" 
                alt="Emergency Care"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="p-4">
                <h2 className="h3 mb-3" style={gradientText}>
                  Our Emergency Team
                </h2>
                <p style={{ color: '#5d6f8a' }}>
                  Our board-certified emergency physicians and trauma specialists are available around the clock to provide immediate, life-saving care.
                </p>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-user-md" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Board-Certified Physicians</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Experienced in all types of emergencies</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-ambulance" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Advanced Life Support</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>State-of-the-art equipment and protocols</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-clock" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>24/7 Availability</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Always here when you need us most</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-4" style={gradientText}>Emergency Conditions</h2>
                <p className="mb-4" style={{ color: '#5d6f8a' }}>
                  We provide immediate care for a wide range of emergency medical conditions.
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
                  <h3 className="h5 mb-2" style={gradientText}>Immediate Attention</h3>
                  <p className="mb-0" style={{ color: '#5d6f8a' }}>
                    In case of a life-threatening emergency, call 911 or come directly to our emergency department.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="mb-5">
          <Col className="text-center mb-5">
            <h2 className="h1 fw-bold mb-3" style={gradientText}>Our Emergency Services</h2>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Comprehensive emergency care with the latest medical technology
            </p>
          </Col>
          
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div className="p-3 rounded-circle d-inline-flex mb-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                      <i className={`fas ${service.icon} fa-2x`} style={gradientText}></i>
                    </div>
                    <h3 className="h5 mb-3" style={gradientText}>{service.name}</h3>
                    <p className="mb-0" style={{ color: '#5d6f8a' }}>{service.description}</p>
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
              <h2 className="h1 fw-bold mb-3 text-white">Need Immediate Medical Attention?</h2>
              <p className="lead mb-4 text-white">
                Our emergency department is open 24/7 with no appointment needed.
              </p>
              <a 
                href="/emergency" 
                className="btn btn-light btn-lg px-4 me-2"
                style={{
                  background: 'white',
                  border: 'none',
                  fontWeight: '500',
                  color: '#5d6f8a'
                }}
              >
                Emergency Information
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
                Contact Emergency
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmergencyCare;