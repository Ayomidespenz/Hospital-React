import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const GeneralSurgery = () => {
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  const procedures = [
    'Appendectomy',
    'Gallbladder Surgery',
    'Hernia Repair',
    'Colon Surgery',
    'Breast Surgery',
    'Skin Lesion Removal',
    'Hemorrhoidectomy',
    'Thyroid Surgery'
  ];

  const services = [
    { 
      name: 'Minimally Invasive Surgery', 
      icon: 'fa-scissors', 
      description: 'Laparoscopic and robotic procedures for faster recovery' 
    },
    { 
      name: 'Hernia Repair', 
      icon: 'fa-band-aid', 
      description: 'Advanced techniques for all types of hernias' 
    },
    { 
      name: 'Gastrointestinal Surgery', 
      icon: 'fa-stomach', 
      description: 'Surgical treatment for digestive system conditions' 
    },
    { 
      name: 'Breast Surgery', 
      icon: 'fa-female', 
      description: 'Diagnostic and therapeutic breast procedures' 
    },
    { 
      name: 'Endocrine Surgery', 
      icon: 'fa-gland', 
      description: 'Surgery for thyroid, parathyroid, and adrenal glands' 
    },
    { 
      name: 'Emergency Surgery', 
      icon: 'fa-ambulance', 
      description: '24/7 surgical care for acute conditions' 
    }
  ];

  const faqs = [
    {
      question: "What is the recovery time for laparoscopic surgery?",
      answer: "Recovery time varies by procedure, but most patients can return to normal activities within 1-2 weeks after laparoscopic surgery, with full recovery taking 4-6 weeks."
    },
    {
      question: "When should I consider surgery for a hernia?",
      answer: "Surgery is typically recommended for hernias that are painful, growing larger, or causing symptoms. Your surgeon will evaluate your specific condition and recommend the best treatment approach."
    },
    {
      question: "What are the benefits of robotic surgery?",
      answer: "Robotic surgery offers greater precision, smaller incisions, less pain, and faster recovery times compared to traditional open surgery."
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
              Expert Surgical Care
            </Badge>
            <h1 className="display-4 fw-bold mb-3" style={gradientText}>
              General Surgery Department
            </h1>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Comprehensive surgical care using advanced techniques and technology
            </p>
          </Col>
        </Row>
                {/* About Section */}
                <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="/images/general-surgery.jpg" 
                alt="General Surgery"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="p-4">
                <h2 className="h3 mb-3" style={gradientText}>
                  Our Surgical Team
                </h2>
                <p style={{ color: '#5d6f8a' }}>
                  Our board-certified general surgeons are experienced in a wide range of surgical procedures, from routine to complex cases.
                </p>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-user-md" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Experienced Surgeons</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Board-certified with years of experience</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-procedures" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Minimally Invasive</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Faster recovery with smaller incisions</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-heartbeat" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Comprehensive Care</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>From consultation to recovery</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-4" style={gradientText}>Common Procedures</h2>
                <p className="mb-4" style={{ color: '#5d6f8a' }}>
                  Our general surgeons perform a wide range of procedures, including:
                </p>
                
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      {procedures.slice(0, 4).map((procedure, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check-circle me-2" style={gradientText}></i>
                          <span style={{ color: '#5d6f8a' }}>{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      {procedures.slice(4).map((procedure, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check-circle me-2" style={gradientText}></i>
                          <span style={{ color: '#5d6f8a' }}>{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>

                <div className="mt-4 p-4 rounded-3" style={{ background: 'rgba(13, 202, 240, 0.05)' }}>
                  <h3 className="h5 mb-2" style={gradientText}>Surgical Consultation</h3>
                  <p className="mb-0" style={{ color: '#5d6f8a' }}>
                    Our surgeons will evaluate your condition and discuss all available treatment options with you.
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
              Comprehensive surgical care for various conditions
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
              <h2 className="h1 fw-bold mb-3 text-white">Need Surgical Consultation?</h2>
              <p className="lead mb-4 text-white">
                Schedule an appointment with our experienced general surgeons today.
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

export default GeneralSurgery;