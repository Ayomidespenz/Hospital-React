import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const GynecologyObstetrics = () => {
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: '#5d6f8a', // Fallback color
    display: 'inline-block'
  };

  const services = [
    'Prenatal Care',
    'Labor and Delivery',
    'Postpartum Care',
    'Family Planning',
    'Minimally Invasive Surgery',
    'Menopause Management',
    'Fertility Services',
    'Gynecologic Oncology'
  ];

  const specialists = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Obstetrician',
      education: 'MD, FACOG',
      experience: '15+ years'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Gynecologic Surgeon',
      education: 'MD, FACS',
      experience: '12+ years'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Maternal-Fetal Medicine',
      education: 'MD, FACOG',
      experience: '10+ years'
    }
  ];

  const specialties = [
    {
      title: 'High-Risk Pregnancy',
      description: 'Specialized care for high-risk pregnancies',
      icon: 'fa-baby'
    },
    {
      title: 'Minimally Invasive Surgery',
      description: 'Advanced laparoscopic procedures',
      icon: 'fa-syringe'
    },
    {
      title: 'Fertility',
      description: 'Comprehensive fertility services',
      icon: 'fa-heartbeat'
    }
  ];

  const faqs = [
    {
      question: 'When should I schedule my first prenatal visit?',
      answer: 'We recommend scheduling your first prenatal visit as soon as you know you\'re pregnant, typically around 8 weeks after your last menstrual period.'
    },
    {
      question: 'What types of birth control options do you offer?',
      answer: 'We provide comprehensive family planning services including IUDs, implants, pills, and other contraceptive options.'
    },
    {
      question: 'Do you offer genetic testing during pregnancy?',
      answer: 'Yes, we offer various genetic screening and diagnostic tests that can be discussed during your prenatal visits.'
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
              Women's Health
            </Badge>
            <h1 className="display-4 fw-bold mb-3" style={gradientText}>
              Gynecology & Obstetrics
            </h1>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Expert care for women through all stages of life
            </p>
          </Col>
        </Row>

        {/* Specialists Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <h2 className="h3 mb-3" style={gradientText}>
              Our Women's Health Specialists
            </h2>
            <Row>
              {specialists.map((specialist, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(93, 111, 138, 0.1)' }}>
                          <i className="fas fa-user-md" style={gradientText}></i>
                        </div>
                        <div>
                          <h3 className="h5 mb-1" style={gradientText}>{specialist.name}</h3>
                          <p className="small mb-0" style={{ color: '#5d6f8a' }}>{specialist.specialty}</p>
                        </div>
                      </div>
                      <ul className="list-unstyled small" style={{ color: '#5d6f8a' }}>
                        <li className="mb-1">
                          <i className="fas fa-graduation-cap me-2" style={gradientText}></i>
                          {specialist.education}
                        </li>
                        <li>
                          <i className="fas fa-briefcase me-2" style={gradientText}></i>
                          {specialist.experience} experience
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <h2 className="h3 mb-4" style={gradientText}>Our Services</h2>
            <p className="mb-4" style={{ color: '#5d6f8a' }}>
              We provide comprehensive gynecologic and obstetric care, including:
            </p>
            <Row>
              {services.map((service, index) => (
                <Col md={6} lg={4} key={index} className="mb-3">
                  <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: 'rgba(93, 111, 138, 0.03)' }}>
                    <i className="fas fa-check-circle me-2" style={gradientText}></i>
                    <span style={{ color: '#5d6f8a' }}>{service}</span>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="mt-4 p-4 rounded-3" style={{ background: 'rgba(93, 111, 138, 0.05)' }}>
              <h3 className="h5 mb-2" style={gradientText}>Personalized Treatment Plans</h3>
              <p className="mb-0" style={{ color: '#5d6f8a' }}>
                Each patient receives a customized care plan tailored to their specific needs and health goals.
              </p>
            </div>
          </Col>
        </Row>

        {/* Specialties Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto text-center">
            <h2 className="h1 fw-bold mb-3" style={gradientText}>Our Specialties</h2>
            <p className="lead" style={{ color: '#5d6f8a' }}>
              Comprehensive care for all your women's health needs
            </p>
            <Row className="mt-5">
              {specialties.map((specialty, index) => (
                <Col md={4} key={index} className="mb-4">
                  <div className="p-4 h-100">
                    <div className="p-3 rounded-circle d-inline-flex mb-3" style={{ background: 'rgba(93, 111, 138, 0.1)' }}>
                      <i className={`fas ${specialty.icon} fa-2x`} style={gradientText}></i>
                    </div>
                    <h3 className="h4 mb-3" style={gradientText}>{specialty.title}</h3>
                    <p style={{ color: '#5d6f8a' }}>{specialty.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <h2 className="h1 fw-bold mb-4" style={gradientText}>Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0" className="shadow-sm">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="mb-2 border-0">
                  <Accordion.Header className="p-3" style={{ backgroundColor: 'rgba(93, 111, 138, 0.03)' }}>
                    <h3 className="h5 mb-0" style={gradientText}>{faq.question}</h3>
                  </Accordion.Header>
                  <Accordion.Body className="p-4" style={{ color: '#5d6f8a' }}>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <div 
              className="p-5 rounded-3 text-center" 
              style={{ 
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                color: 'white'
              }}
            >
              <h2 className="h1 fw-bold mb-4" style={{ color: 'white' }}>Schedule Your Appointment Today</h2>
              <p className="lead mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Our team of specialists is ready to provide you with exceptional care.
              </p>
              <a 
                href="/contact" 
                className="btn btn-light btn-lg px-4 rounded-pill"
                style={{ 
                  background: 'white',
                  color: '#5d6f8a',
                  border: 'none',
                  fontWeight: 600
                }}
              >
                Book an Appointment
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Section */}
        <footer className="py-4 mt-5" style={{ backgroundColor: 'rgba(93, 111, 138, 0.03)' }}>
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start">
                <p className="mb-0" style={{ color: '#5d6f8a' }}>
                  &copy; {new Date().getFullYear()} Our Hospital. All rights reserved.
                </p>
              </Col>
              <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
                <a 
                  href="/privacy" 
                  className="text-decoration-none me-3" 
                  style={{ color: '#5d6f8a' }}
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="text-decoration-none" 
                  style={{ color: '#5d6f8a' }}
                >
                  Terms of Service
                </a>
              </Col>
            </Row>
          </Container>
        </footer>
      </Container>
    </div>
  );
};

export default GynecologyObstetrics;