import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const PediatricsSurgery = () => {
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  const conditions = [
    'Appendicitis',
    'Hernias (inguinal, umbilical)',
    'Undescended testicles',
    'Hirschsprung disease',
    'Pyloric stenosis',
    'Congenital malformations',
    'Tongue-tie release',
    'Ear tube placement'
  ];

  const services = [
    { 
      name: 'Minimally Invasive Surgery', 
      icon: 'fa-baby', 
      description: 'Laparoscopic procedures designed specifically for children' 
    },
    { 
      name: 'Neonatal Surgery', 
      icon: 'fa-baby-carriage', 
      description: 'Specialized care for newborns with surgical conditions' 
    },
    { 
      name: 'Pediatric Urology', 
      icon: 'fa-toilet', 
      description: 'Treatment for urinary tract and genital conditions' 
    },
    { 
      name: 'Pediatric Oncology Surgery', 
      icon: 'fa-heartbeat', 
      description: 'Surgical management of childhood cancers' 
    },
    { 
      name: 'Thoracic Surgery', 
      icon: 'fa-lungs', 
      description: 'Treatment for chest and lung conditions' 
    },
    { 
      name: 'Trauma Surgery', 
      icon: 'fa-ambulance', 
      description: 'Emergency surgical care for injured children' 
    }
  ];

  const faqs = [
    {
      question: "At what age can a child have surgery?",
      answer: "Children can have surgery at any age, from premature newborns to teenagers. The timing depends on the specific condition and the child's overall health. Our pediatric surgeons are specially trained to care for patients of all pediatric ages."
    },
    {
      question: "How is pediatric surgery different from adult surgery?",
      answer: "Pediatric surgery requires specialized knowledge of children's anatomy, physiology, and emotional needs. Our team uses smaller instruments, adjusts anesthesia for developing bodies, creates a child-friendly environment, and provides age-appropriate explanations and support."
    },
    {
      question: "Can parents stay with their child before and after surgery?",
      answer: "Yes, we encourage parental presence whenever possible. Parents can typically stay with their child until they go into the operating room and can rejoin them in the recovery room as soon as they start waking up from anesthesia."
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
              Specialized Care for Children
            </Badge>
            <h1 className="display-4 fw-bold mb-3" style={gradientText}>
              Pediatric Surgery
            </h1>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Compassionate surgical care designed specifically for infants, children, and adolescents
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="/images/pediatric-surgery.jpg" 
                alt="Pediatric Surgery"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="p-4">
                <h2 className="h3 mb-3" style={gradientText}>
                  Our Pediatric Surgical Team
                </h2>
                <p style={{ color: '#5d6f8a' }}>
                  Our board-certified pediatric surgeons are specially trained to provide the highest level of surgical care for children of all ages, from newborns to young adults.
                </p>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-user-md" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Child-Focused Care</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Specialized care tailored to children's unique needs</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-procedures" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Family-Centered Approach</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Involving parents in every step of care</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                    <i className="fas fa-heartbeat" style={gradientText}></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-0" style={gradientText}>Minimally Invasive Techniques</h3>
                    <p className="small mb-0" style={{ color: '#5d6f8a' }}>Smaller incisions, faster recovery</p>
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
                  Our pediatric surgeons have expertise in treating a wide range of conditions, including:
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
                  <h3 className="h5 mb-2" style={gradientText}>Preparing Your Child for Surgery</h3>
                  <p className="mb-0" style={{ color: '#5d6f8a' }}>
                    We provide age-appropriate explanations and support to help children and families feel comfortable and prepared for surgery.
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
              Comprehensive surgical care for children of all ages
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
              <h2 className="h1 fw-bold mb-3 text-white">Have Questions About Your Child's Surgery?</h2>
              <p className="lead mb-4 text-white">
                Our pediatric surgery team is here to help guide you through the process.
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

export default PediatricsSurgery;