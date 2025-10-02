import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const Neurology = () => {
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  const conditions = [
    'Migraines & Headaches',
    'Epilepsy',
    'Multiple Sclerosis',
    'Parkinson\'s Disease',
    'Stroke',
    'Neuromuscular Disorders',
    'Memory Disorders',
    'Peripheral Neuropathy'
  ];

  const treatments = [
    { 
      name: 'EEG Testing', 
      icon: 'fa-brain', 
      description: 'Diagnostic testing for epilepsy and seizure disorders' 
    },
    { 
      name: 'EMG/NCV', 
      icon: 'fa-bolt', 
      description: 'Nerve conduction studies for neuromuscular conditions' 
    },
    { 
      name: 'Botulinum Toxin Therapy', 
      icon: 'fa-syringe', 
      description: 'Treatment for chronic migraines and movement disorders' 
    },
    { 
      name: 'Deep Brain Stimulation', 
      icon: 'fa-brain', 
      description: 'Advanced treatment for movement disorders' 
    },
    { 
      name: 'Memory Care', 
      icon: 'fa-memory', 
      description: 'Comprehensive care for dementia and memory disorders' 
    },
    { 
      name: 'Stroke Care', 
      icon: 'fa-heartbeat', 
      description: 'Specialized stroke prevention and rehabilitation' 
    }
  ];

  const faqs = [
    {
      question: "When should I see a neurologist?",
      answer: "Consider seeing a neurologist if you experience frequent headaches, dizziness, numbness, muscle weakness, movement problems, or changes in sensation, thinking, or behavior."
    },
    {
      question: "What should I expect during my first neurology visit?",
      answer: "Your first visit will include a detailed medical history, neurological examination, and possibly diagnostic tests. Bring any previous test results and a list of your current medications."
    },
    {
      question: "What conditions do neurologists treat?",
      answer: "Neurologists treat conditions affecting the brain, spinal cord, and nerves, including headaches, epilepsy, stroke, multiple sclerosis, Parkinson's disease, and Alzheimer's disease."
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
              Expert Neurological Care
            </Badge>
            <h1 className="display-4 fw-bold mb-3" style={gradientText}>
              Neurology Department
            </h1>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Comprehensive care for disorders of the brain, spine, and nervous system
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="/images/neurology.jpg" 
                alt="Neurology Care"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="p-4">
                <h2 className="h3 mb-3" style={gradientText}>
                  Our Neurology Specialists
                </h2>
                <p style={{ color: '#5d6f8a' }}>
                  Our board-certified neurologists provide expert care for a wide range of neurological conditions using the latest diagnostic and treatment approaches.
                </p>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-user-md" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Subspecialty Expertise</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Specialists in various neurological conditions</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-brain" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Advanced Diagnostics</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>State-of-the-art testing and imaging</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-heartbeat" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Comprehensive Care</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Personalized treatment plans for optimal outcomes</p>
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
                  Our neurologists provide comprehensive care for a wide range of neurological disorders.
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
                    Don't let neurological symptoms go untreated. Contact us today to schedule a consultation.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Treatments Section */}
        <Row className="mb-5">
          <Col className="text-center mb-5">
            <h2 className="h1 fw-bold mb-3" style={gradientText}>Our Services</h2>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Comprehensive neurological care using the latest techniques and technology
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
              <h2 className="h1 fw-bold mb-3 text-white">Need Expert Neurological Care?</h2>
              <p className="lead mb-4 text-white">
                Schedule a consultation with one of our neurology specialists today.
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

export default Neurology;