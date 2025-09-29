import React from 'react';
import { Row, Col, ListGroup, Card, Accordion, Badge } from 'react-bootstrap';
import ServiceDetailLayout from './ServiceDetailLayout';

const MinimallyInvasiveSurgery = () => {
  const procedures = [
    {
      title: 'Laparoscopy',
      description: 'Minimally invasive procedure using small incisions and a camera to diagnose and treat conditions.',
      benefits: [
        'Smaller incisions',
        'Reduced pain',
        'Faster recovery',
        'Less scarring',
        'Lower risk of infection'
      ],
      conditions: [
        'Ectopic pregnancy',
        'Ovarian cysts',
        'Endometriosis',
        'Fibroids',
        'Tubal ligation'
      ]
    },
    {
      title: 'Hysteroscopy',
      description: 'Procedure to examine the inside of the uterus using a thin, lighted tube inserted through the vagina.',
      benefits: [
        'No incisions needed',
        'Outpatient procedure',
        'Minimal discomfort',
        'Quick recovery',
        'High success rate'
      ],
      conditions: [
        'Abnormal bleeding',
        'Uterine polyps',
        'Fibroids',
        'Adhesions',
        'Septums'
      ]
    },
    {
      title: 'Robotic Surgery',
      description: 'Advanced surgical technique using robotic systems for enhanced precision and control.',
      benefits: [
        'Greater precision',
        'Enhanced 3D visualization',
        'Improved dexterity',
        'Reduced blood loss',
        'Shorter hospital stay'
      ],
      conditions: [
        'Hysterectomy',
        'Myomectomy',
        'Endometriosis resection',
        'Pelvic organ prolapse',
        'Complex gynecologic conditions'
      ]
    },
    {
      title: 'Hysterectomy',
      description: 'Minimally invasive removal of the uterus using laparoscopic or robotic techniques.',
      benefits: [
        'Small incisions',
        'Less pain',
        'Faster recovery',
        'Reduced risk of complications',
        'Improved quality of life'
      ],
      conditions: [
        'Uterine fibroids',
        'Endometriosis',
        'Uterine prolapse',
        'Cancer',
        'Chronic pelvic pain'
      ]
    }
  ];

  return (
    <ServiceDetailLayout
      title="Minimally Invasive Surgery"
      description="Advanced surgical techniques for faster recovery and better outcomes"
      image="/invasive.jpeg"
    >
      <div className="mb-4">
        <h3 className="h4 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Precision Surgery with Minimal Disruption
        </h3>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          Our board-certified gynecologic surgeons specialize in minimally invasive techniques that reduce pain, minimize scarring, and speed up recovery times compared to traditional open surgery. We utilize the latest technology to provide you with the best possible outcomes.
        </p>
      </div>

      <Row className="g-4 mb-4">
        {procedures.map((procedure, index) => (
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
                    {procedure.title}
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
                  {procedure.description}
                </p>
                <Row>
                  <Col md={6}>
                    <h6 className="small text-uppercase mb-2" style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontSize: '0.7rem',
                      letterSpacing: '0.05em'
                    }}>
                      Benefits:
                    </h6>
                    <ListGroup variant="flush" className="small">
                      {procedure.benefits.map((item, i) => (
                        <ListGroup.Item key={`benefit-${i}`} className="border-0 px-0 py-1 bg-transparent">
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
                  </Col>
                  <Col md={6}>
                    <h6 className="small text-uppercase mb-2" style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontSize: '0.7rem',
                      letterSpacing: '0.05em'
                    }}>
                      Treated Conditions:
                    </h6>
                    <ListGroup variant="flush" className="small">
                      {procedure.conditions.map((item, i) => (
                        <ListGroup.Item key={`condition-${i}`} className="border-0 px-0 py-1 bg-transparent">
                          <i className="fas fa-check-circle text-primary me-2" style={{ fontSize: '0.7rem' }}></i>
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
                  </Col>
                </Row>
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
          Recovery & Aftercare
        </h4>
        <Row className="g-4">
          {[
            {
              icon: 'clock',
              title: 'Recovery Time',
              description: 'Most patients return to normal activities within 1-2 weeks, with full recovery in 4-6 weeks.'
            },
            {
              icon: 'procedures',
              title: 'Post-Op Care',
              description: 'Detailed instructions for wound care, activity restrictions, and pain management.'
            },
            {
              icon: 'user-md',
              title: 'Follow-Up',
              description: 'Scheduled appointments to monitor your recovery and address any concerns.'
            },
            {
              icon: 'phone-alt',
              title: '24/7 Support',
              description: 'Access to our medical team for any questions or concerns during your recovery.'
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
                  height: '60px',
                  margin: '0 auto'
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
          <i className="fas fa-question-circle me-3 mt-1" style={{
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
            }}>Is Minimally Invasive Surgery Right for You?</h5>
            <p className="mb-0" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.9
            }}>
              Schedule a consultation with one of our specialists to discuss your options and determine if minimally invasive surgery is the right choice for your condition.
            </p>
          </div>
        </div>
      </div>
    </ServiceDetailLayout>
  );
};

export default MinimallyInvasiveSurgery;
