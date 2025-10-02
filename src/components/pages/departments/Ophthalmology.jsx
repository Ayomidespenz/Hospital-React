import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const Ophthalmology = () => {
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  const conditions = [
    'Cataracts',
    'Glaucoma',
    'Macular Degeneration',
    'Diabetic Retinopathy',
    'Refractive Errors',
    'Dry Eye Syndrome',
    'Retinal Disorders',
    'Corneal Diseases'
  ];

  const services = [
    { 
      name: 'Cataract Surgery', 
      icon: 'fa-eye', 
      description: 'Advanced lens replacement for clear vision' 
    },
    { 
      name: 'Laser Eye Surgery', 
      icon: 'fa-bolt', 
      description: 'Vision correction procedures including LASIK' 
    },
    { 
      name: 'Glaucoma Treatment', 
      icon: 'fa-eye-dropper', 
      description: 'Medical and surgical options for glaucoma' 
    },
    { 
      name: 'Retinal Care', 
      icon: 'fa-eye', 
      description: 'Specialized treatment for retinal conditions' 
    },
    { 
      name: 'Pediatric Ophthalmology', 
      icon: 'fa-child', 
      description: 'Eye care for infants and children' 
    },
    { 
      name: 'Corneal Transplants', 
      icon: 'fa-eye', 
      description: 'Surgical procedures for corneal conditions' 
    }
  ];

  const faqs = [
    {
      question: "How often should I have an eye exam?",
      answer: "Adults should have a comprehensive eye exam every 1-2 years, or as recommended by your eye doctor. Those with existing eye conditions or risk factors may need more frequent exams."
    },
    {
      question: "What are the signs that I should see an ophthalmologist?",
      answer: "Schedule an appointment if you experience vision changes, eye pain, flashes of light, floaters, redness, or any other concerning symptoms. Regular check-ups are also important for early detection of eye diseases."
    },
    {
      question: "What's the difference between an optometrist and an ophthalmologist?",
      answer: "Ophthalmologists are medical doctors who can perform eye surgery and treat all eye diseases. Optometrists provide primary vision care including eye exams and vision correction."
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
              Expert Eye Care
            </Badge>
            <h1 className="display-4 fw-bold mb-3" style={gradientText}>
              Ophthalmology Department
            </h1>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Comprehensive eye care for vision health and treatment of eye diseases
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="/images/ophthalmology.jpg" 
                alt="Eye Care"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="p-4">
                <h2 className="h3 mb-3" style={gradientText}>
                  Our Eye Care Specialists
                </h2>
                <p style={{ color: '#5d6f8a' }}>
                  Our board-certified ophthalmologists provide expert care for all eye conditions, from routine vision correction to complex eye surgeries.
                </p>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-user-md" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Specialized Care</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Expertise in all areas of eye health</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-eye" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Advanced Technology</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>State-of-the-art diagnostic equipment</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-heartbeat" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Personalized Treatment</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Customized care plans for each patient</p>
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
                  Our ophthalmologists provide comprehensive care for a wide range of eye conditions.
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
                  <h3 className="h5 mb-2" style={gradientText}>Comprehensive Eye Exams</h3>
                  <p className="mb-0" style={{ color: '#5d6f8a' }}>
                    Regular eye exams are essential for maintaining good vision and detecting eye diseases early.
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
              Comprehensive eye care for all ages and conditions
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
              <h2 className="h1 fw-bold mb-3 text-white">Ready to Improve Your Vision?</h2>
              <p className="lead mb-4 text-white">
                Schedule an eye exam with our experienced ophthalmologists today.
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

export default Ophthalmology;