import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const GeriatricsSurgery = () => {
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: '#5d6f8a',
    display: 'inline-block'
  };

  const services = [
    { 
      name: 'Joint Replacement', 
      icon: 'fa-bone', 
      description: 'Comprehensive joint replacement procedures for improved mobility' 
    },
    { 
      name: 'Hernia Repair', 
      icon: 'fa-band-aid', 
      description: 'Specialized hernia treatments for elderly patients' 
    },
    { 
      name: 'Minimally Invasive Surgery', 
      icon: 'fa-scissors', 
      description: 'Advanced laparoscopic procedures for faster recovery' 
    },
    { 
      name: 'Cancer Surgery', 
      icon: 'fa-heartbeat', 
      description: 'Surgical oncology services for geriatric patients' 
    },
    { 
      name: 'Vascular Procedures', 
      icon: 'fa-heart', 
      description: 'Treatment for circulatory system conditions' 
    },
    { 
      name: 'Wound Care', 
      icon: 'fa-bandage', 
      description: 'Specialized care for chronic and surgical wounds' 
    }
  ];

  const conditions = [
    'Osteoarthritis',
    'Hernias',
    'Gallstones',
    'Colon conditions',
    'Peripheral artery disease',
    'Skin cancers',
    'Fractures',
    'Gastrointestinal disorders'
  ];

  const faqs = [
    {
      question: "Is surgery safe for elderly patients?",
      answer: "Yes, with proper evaluation and preparation, surgery can be safe for elderly patients. Our team conducts thorough pre-operative assessments to ensure the best possible outcomes and minimize risks."
    },
    {
      question: "What makes geriatric surgery different?",
      answer: "Geriatric surgery considers age-related changes in the body, multiple medications, and overall health status. We focus on personalized care plans, specialized anesthesia, and post-operative rehabilitation tailored for older adults."
    },
    {
      question: "How long is the recovery time?",
      answer: "Recovery time varies depending on the procedure and individual health status. Our team provides comprehensive post-operative care and rehabilitation to support optimal recovery."
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
              Specialized Care for Seniors
            </Badge>
            <h1 className="display-4 fw-bold mb-3" style={gradientText}>
              Geriatric Surgery
            </h1>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Compassionate surgical care tailored to the unique needs of older adults
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="/images/geriatric-surgery.jpg" 
                alt="Geriatric Surgery"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="p-4">
                <h2 className="h3 mb-3" style={gradientText}>
                  Our Geriatric Surgical Team
                </h2>
                <p style={{ color: '#5d6f8a' }}>
                  Our board-certified surgeons specialize in providing safe and effective surgical care for older adults, focusing on personalized treatment plans and optimal recovery.
                </p>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(93, 111, 138, 0.1)' }}>
                    <i className="fas fa-user-md" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Specialized Expertise</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Surgeons trained in geriatric surgical care</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(93, 111, 138, 0.1)' }}>
                    <i className="fas fa-procedures" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Comprehensive Care</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>From pre-op evaluation to post-op recovery</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(93, 111, 138, 0.1)' }}>
                    <i className="fas fa-heartbeat" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Minimally Invasive</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Advanced techniques for better outcomes</p>
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
                  Our geriatric surgeons provide comprehensive care for a variety of age-related conditions:
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

                <div className="mt-4 p-4 rounded-3" style={{ background: 'rgba(93, 111, 138, 0.05)' }}>
                  <h3 className="h5 mb-2" style={gradientText}>Personalized Treatment Plans</h3>
                  <p className="mb-0" style={{ color: '#5d6f8a' }}>
                    We develop customized care plans that consider your overall health, medications, and personal goals to ensure the best possible outcomes.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="mb-5">
          <Col className="text-center mb-5">
            <h2 className="h1 fw-bold mb-3" style={gradientText}>Our Services</h2>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Comprehensive surgical care for older adults
            </p>
          </Col>
          
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div className="p-3 rounded-circle d-inline-flex mb-3" style={{ background: 'rgba(93, 111, 138, 0.1)' }}>
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
              <h2 className="h1 fw-bold mb-3 text-white">Have Questions About Geriatric Surgery?</h2>
              <p className="lead mb-4 text-white">
                Our geriatric surgery team is here to provide the specialized care you need.
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
                Schedule a Consultation
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
                Contact Our Team
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GeriatricsSurgery;