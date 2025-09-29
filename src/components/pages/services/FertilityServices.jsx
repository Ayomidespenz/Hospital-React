import React from 'react';
import { Row, Col, ListGroup, Card, Accordion, Badge } from 'react-bootstrap';
import ServiceDetailLayout from './ServiceDetailLayout';

const FertilityServices = () => {
  const treatmentOptions = [
    {
      title: 'Fertility Testing',
      description: 'Comprehensive diagnostic testing to identify potential fertility issues.',
      includes: [
        'Hormone level testing',
        'Ovulation testing',
        'Semen analysis',
        'Hysterosalpingography (HSG)',
        'Ovarian reserve testing'
      ]
    },
    {
      title: 'Intrauterine Insemination (IUI)',
      description: 'A fertility treatment that involves placing sperm inside a woman\'s uterus to facilitate fertilization.',
      includes: [
        'Ovulation monitoring',
        'Sperm washing and preparation',
        'Timed insemination',
        'Pregnancy testing'
      ]
    },
    {
      title: 'In Vitro Fertilization (IVF)',
      description: 'Advanced fertility treatment where eggs are fertilized by sperm in a laboratory setting.',
      includes: [
        'Ovarian stimulation',
        'Egg retrieval',
        'Embryo culture',
        'Embryo transfer',
        'Cryopreservation options'
      ]
    },
    {
      title: 'Fertility Preservation',
      description: 'Options for preserving fertility for medical or personal reasons.',
      includes: [
        'Egg freezing',
        'Sperm freezing',
        'Embryo freezing',
        'Fertility preservation for cancer patients'
      ]
    }
  ];

  return (
    <ServiceDetailLayout
      title="Fertility Services"
      description="Advanced fertility treatments with compassionate care"
      image="/fertility-desk.jpeg"
    >
      <div className="mb-4">
        <h3 className="h4 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Your Path to Parenthood
        </h3>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          Our fertility specialists provide personalized, evidence-based care to help you build the family you've been dreaming of. We understand the emotional journey of fertility treatment and are here to support you every step of the way.
        </p>
      </div>

      <Row className="g-4 mb-4">
        {treatmentOptions.map((treatment, index) => (
          <Col md={6} key={index}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="h6 mb-0" style={{
                    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}>
                    {treatment.title}
                  </h5>
                  <Badge bg="light" text="primary" className="ms-2" style={{
                    background: 'rgba(93, 111, 138, 0.1) !important',
                    color: '#5d6f8a !important',
                    fontWeight: '500',
                    padding: '0.35em 0.65em',
                    borderRadius: '0.25rem'
                  }}>
                    {index + 1}
                  </Badge>
                </div>
                <p className="small mb-3" style={{
                  background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  opacity: 0.9
                }}>
                  {treatment.description}
                </p>
                <h6 className="small text-uppercase mb-2" style={{
                  background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em'
                }}>
                  Includes:
                </h6>
                <ListGroup variant="flush" className="small">
                  {treatment.includes.map((item, i) => (
                    <ListGroup.Item key={i} className="border-0 px-0 py-1 bg-transparent">
                      <i className="fas fa-check-circle text-success me-2" style={{ fontSize: '0.7rem' }}></i>
                      <span style={{
                        background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                        opacity: 0.9,
                        fontSize: '0.85rem'
                      }}>
                        {item}
                      </span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mb-4">
        <h4 className="h5 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Our Approach to Fertility Care
        </h4>
        <Row className="g-4">
          {[
            {
              icon: 'user-md',
              title: 'Expert Team',
              description: 'Board-certified reproductive endocrinologists and fertility specialists'
            },
            {
              icon: 'flask',
              title: 'Advanced Technology',
              description: 'State-of-the-art laboratory and diagnostic equipment'
            },
            {
              icon: 'heart',
              title: 'Compassionate Care',
              description: 'Personalized treatment plans with emotional support'
            },
            {
              icon: 'chart-line',
              title: 'Proven Success',
              description: 'High success rates with transparent reporting'
            }
          ].map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="text-center p-3 h-100" style={{
                background: 'rgba(93, 111, 138, 0.05)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(93, 111, 138, 0.1)'
              }}>
                <div className="icon-box bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
                  width: '60px',
                  height: '60px'
                }}>
                  <i className={`fas fa-${item.icon} fa-lg`} style={{
                    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}></i>
                </div>
                <h6 className="h6 mb-2" style={{
                  background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  {item.title}
                </h6>
                <p className="small mb-0" style={{
                  background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  opacity: 0.9
                }}>
                  {item.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="alert alert-info" style={{
        background: 'rgba(13, 202, 240, 0.1)',
        border: '1px solid rgba(13, 202, 240, 0.2)',
        borderRadius: '0.5rem'
      }}>
        <div className="d-flex">
          <i className="fas fa-calendar-alt me-3 mt-1" style={{
            background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}></i>
          <div>
            <h5 className="alert-heading" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Schedule a Consultation</h5>
            <p className="mb-0" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.9
            }}>
              Take the first step toward building your family. Contact us to schedule a consultation with one of our fertility specialists.
            </p>
          </div>
        </div>
      </div>
    </ServiceDetailLayout>
  );
};

export default FertilityServices;
