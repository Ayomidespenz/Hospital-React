import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const Radiology = () => {
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  const services = [
    'X-Ray',
    'CT Scan',
    'MRI',
    'Ultrasound',
    'Mammography',
    'Fluoroscopy',
    'Nuclear Medicine',
    'Bone Densitometry'
  ];

  const imagingOptions = [
    { 
      name: 'MRI', 
      icon: 'fa-magnet', 
      description: 'Detailed images of organs and structures using magnetic fields' 
    },
    { 
      name: 'CT Scan', 
      icon: 'fa-cogs', 
      description: 'Cross-sectional images for detailed internal views' 
    },
    { 
      name: 'Ultrasound', 
      icon: 'fa-wave-square', 
      description: 'Safe imaging using sound waves, ideal for pregnancy' 
    },
    { 
      name: 'Digital X-Ray', 
      icon: 'fa-x-ray', 
      description: 'Quick and detailed images of bones and certain tissues' 
    },
    { 
      name: 'Mammography', 
      icon: 'fa-female', 
      description: 'Specialized imaging for breast health' 
    },
    { 
      name: 'Fluoroscopy', 
      icon: 'fa-video', 
      description: 'Real-time moving images of internal structures' 
    }
  ];

  const faqs = [
    {
      question: "How should I prepare for my imaging test?",
      answer: "Preparation varies by test. For some tests, you may need to fast or avoid certain medications. We'll provide specific instructions when you schedule your appointment."
    },
    {
      question: "Are imaging tests safe?",
      answer: "Our radiology department uses the lowest possible radiation doses while maintaining high-quality images. The benefits of accurate diagnosis typically outweigh the minimal risks."
    },
    {
      question: "How long will it take to get my results?",
      answer: "Most results are available to your referring physician within 24-48 hours. Urgent findings are reported immediately."
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
              Advanced Imaging Services
            </Badge>
            <h1 className="display-4 fw-bold mb-3" style={gradientText}>
              Radiology Department
            </h1>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              State-of-the-art diagnostic imaging services for accurate diagnosis and treatment planning
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="/images/radiology.jpg" 
                alt="Radiology Services"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="p-4">
                <h2 className="h3 mb-3" style={gradientText}>
                  Our Imaging Center
                </h2>
                <p style={{ color: '#5d6f8a' }}>
                  Our board-certified radiologists and certified technologists use the latest imaging technology to provide accurate and timely diagnoses.
                </p>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-user-md" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Expert Radiologists</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Board-certified specialists in medical imaging</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-microscope" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Advanced Technology</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Latest imaging equipment for precise diagnostics</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-clock" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Quick Results</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Timely reports for faster treatment planning</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-4" style={gradientText}>Our Services</h2>
                <p className="mb-4" style={{ color: '#5d6f8a' }}>
                  We offer a comprehensive range of diagnostic imaging services:
                </p>
                
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      {services.slice(0, 4).map((service, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check-circle me-2" style={gradientText}></i>
                          <span style={{ color: '#5d6f8a' }}>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      {services.slice(4).map((service, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check-circle me-2" style={gradientText}></i>
                          <span style={{ color: '#5d6f8a' }}>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>

                <div className="mt-4 p-4 rounded-3" style={{ background: 'rgba(13, 202, 240, 0.05)' }}>
                  <h3 className="h5 mb-2" style={gradientText}>Same-Day Appointments</h3>
                  <p className="mb-0" style={{ color: '#5d6f8a' }}>
                    Many of our imaging services are available with same-day appointments.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Imaging Options Section */}
        <Row className="mb-5">
          <Col className="text-center mb-5">
            <h2 className="h1 fw-bold mb-3" style={gradientText}>Imaging Options</h2>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Advanced diagnostic imaging for accurate diagnosis
            </p>
          </Col>
          
          <Row className="g-4">
            {imagingOptions.map((option, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div className="p-3 rounded-circle d-inline-flex mb-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                      <i className={`fas ${option.icon} fa-2x`} style={gradientText}></i>
                    </div>
                    <h3 className="h5 mb-3" style={gradientText}>{option.name}</h3>
                    <p className="mb-0" style={{ color: '#5d6f8a' }}>{option.description}</p>
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
              <h2 className="h1 fw-bold mb-3 text-white">Need Diagnostic Imaging?</h2>
              <p className="lead mb-4 text-white">
                Schedule your imaging test with our expert radiology team.
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
                Schedule an Appointment
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
                Contact Radiology
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Radiology;