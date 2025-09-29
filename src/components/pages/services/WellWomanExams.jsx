import React from 'react';
import { Row, Col, ListGroup, Card, Accordion, Badge } from 'react-bootstrap';
import ServiceDetailLayout from './ServiceDetailLayout';

const WellWomanExams = () => {
  const examTypes = [
    {
      title: 'Annual Well-Woman Exam',
      description: 'Comprehensive annual checkup to monitor your overall health and well-being.',
      includes: [
        'Physical examination',
        'Breast exam',
        'Pelvic exam',
        'Pap smear (as needed)', 
        'Birth control counseling',
        'Health screenings',
        'Vaccination review'
      ],
      frequency: 'Yearly',
      recommendedAge: '21+ years'
    },
    {
      title: 'Breast Health Screening',
      description: 'Early detection and prevention of breast-related health issues.',
      includes: [
        'Clinical breast exam',
        'Mammogram referral',
        'Breast self-exam education',
        'Risk assessment',
        'Genetic counseling if needed'
      ],
      frequency: 'As recommended based on age and risk factors',
      recommendedAge: '25+ years'
    },
    {
      title: 'Bone Density Screening',
      description: 'Assessment of bone health and osteoporosis risk.',
      includes: [
        'DEXA scan',
        'Calcium and vitamin D assessment',
        'Fracture risk evaluation',
        'Lifestyle recommendations',
        'Treatment options if needed'
      ],
      frequency: 'Every 2 years (varies by risk)',
      recommendedAge: '65+ years (earlier if high risk)'
    },
    {
      title: 'Sexual Health Screening',
      description: 'Confidential testing and counseling for sexual health concerns.',
      includes: [
        'STI testing',
        'HIV testing',
        'Contraception counseling',
        'Preconception counseling',
        'Menopause management',
        'Sexual dysfunction evaluation'
      ],
      frequency: 'As needed or recommended',
      recommendedAge: 'All adult women'
    }
  ];

  return (
    <ServiceDetailLayout
      title="Well Woman Exams"
      description="Comprehensive care for every stage of a woman's life"
      image="/gyne.jpeg"
    >
      <div className="mb-4">
        <h3 className="h4 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Your Health, At Every Age
        </h3>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          Our well-woman exams are designed to provide personalized, preventive care tailored to your unique health needs. Whether you're in your reproductive years, approaching menopause, or enjoying your post-menopausal years, we're here to support your health journey with compassion and expertise.
        </p>
      </div>

      <Row className="g-4 mb-4">
        {examTypes.map((exam, index) => (
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
                    {exam.title}
                  </h5>
                  <Badge bg="light" text="primary" className="ms-2" style={{
                    background: 'rgba(93, 111, 138, 0.1) !important',
                    color: '#5d6f8a !important',
                    fontWeight: '500',
                    padding: '0.35em 0.65em',
                    borderRadius: '0.25rem',
                    fontSize: '0.7rem'
                  }}>
                    {exam.recommendedAge}
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
                  {exam.description}
                </p>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small text-muted" style={{
                    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    opacity: 0.9,
                    fontSize: '0.75rem'
                  }}>
                    <i className="far fa-calendar-alt me-1"></i> {exam.frequency}
                  </span>
                </div>
                <h6 className="small text-uppercase mb-2 mt-3" style={{
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
                  {exam.includes.map((item, i) => (
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
          Age-Specific Recommendations
        </h4>
        <Accordion className="mb-4">
          {[
            {
              title: 'Teens (13-18 years)',
              content: 'First gynecologic visit between ages 13-15, menstrual health, HPV vaccination, healthy lifestyle counseling, and education about reproductive health.'
            },
            {
              title: '20s-30s',
              content: 'Annual well-woman exams, cervical cancer screening (starting at 21), breast health awareness, contraception counseling, and preconception counseling if planning pregnancy.'
            },
            {
              title: '40s-50s',
              content: 'Mammograms (starting at 40), bone density screening (as needed), perimenopause management, cardiovascular risk assessment, and cancer screenings.'
            },
            {
              title: '60s and Beyond',
              content: 'Continued cancer screenings, bone health management, heart health monitoring, pelvic floor health, and management of chronic conditions.'
            }
          ].map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()} className="mb-2 border-0">
              <Accordion.Header style={{
                background: 'linear-gradient(45deg, rgb(93, 111, 138, 0.1), rgba(13, 202, 240, 0.1))',
                borderRadius: '0.5rem',
                border: '1px solid rgba(93, 111, 138, 0.2)'
              }}>
                <span style={{
                  background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: '500'
                }}>
                  {item.title}
                </span>
              </Accordion.Header>
              <Accordion.Body style={{
                background: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid rgba(93, 111, 138, 0.1)',
                borderTop: 'none',
                borderBottomLeftRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem'
              }}>
                <p style={{
                  background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  opacity: 0.9,
                  margin: 0
                }}>
                  {item.content}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="p-4 rounded-3 h-100" style={{
            background: 'linear-gradient(135deg, rgba(93, 111, 138, 0.1), rgba(13, 202, 240, 0.1))',
            border: '1px solid rgba(93, 111, 138, 0.1)'
          }}>
            <h5 className="h6 mb-3" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              <i className="fas fa-calendar-check me-2"></i>
              Preparing for Your Visit
            </h5>
            <ul className="list-unstyled small">
              {[
                'Schedule your exam when you\'re not menstruating',
                'Note any questions or concerns beforehand',
                'Bring a list of current medications',
                'Be prepared to discuss family medical history',
                'Wear comfortable, easy-to-remove clothing',
                'Bring your insurance information'
              ].map((item, i) => (
                <li key={i} className="mb-2 d-flex align-items-start">
                  <i className="fas fa-check-circle text-success mt-1 me-2" style={{ fontSize: '0.7rem' }}></i>
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
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 rounded-3 h-100" style={{
            background: 'linear-gradient(135deg, rgba(93, 111, 138, 0.1), rgba(13, 202, 240, 0.1))',
            border: '1px solid rgba(93, 111, 138, 0.1)'
          }}>
            <h5 className="h6 mb-3" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              <i className="fas fa-question-circle me-2"></i>
              Common Questions
            </h5>
            <Accordion flush className="small">
              {[
                {
                  q: 'How often should I have a well-woman exam?',
                  a: 'Most women should have an annual well-woman exam. However, the frequency of certain screenings may vary based on your age, health history, and risk factors.'
                },
                {
                  q: 'Do I need a Pap smear every year?',
                  a: 'Current guidelines recommend Pap smears every 3-5 years for most women, depending on age and previous results. Your provider will recommend the best schedule for you.'
                },
                {
                  q: 'What should I expect during my first visit?',
                  a: 'Your first visit typically includes a health history review, physical exam, and discussion about your health concerns. It\'s a great opportunity to ask questions and establish a relationship with your provider.'
                }
              ].map((faq, i) => (
                <Accordion.Item key={i} eventKey={i.toString()} className="border-0 mb-2">
                  <Accordion.Header className="p-0 bg-transparent" style={{
                    background: 'transparent !important',
                    boxShadow: 'none'
                  }}>
                    <span className="small" style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: '500',
                      fontSize: '0.85rem'
                    }}>
                      {faq.q}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="p-0 mt-2" style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '0.8rem'
                  }}>
                    <div style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      opacity: 0.9
                    }}>
                      {faq.a}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
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
            }}>Schedule Your Well-Woman Exam</h5>
            <p className="mb-0" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.9
            }}>
              Take charge of your health by scheduling your annual well-woman exam today. Our caring providers are here to support you at every stage of life.
            </p>
          </div>
        </div>
      </div>
    </ServiceDetailLayout>
  );
};

export default WellWomanExams;
