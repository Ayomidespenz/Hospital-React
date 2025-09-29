import React from 'react';
import { Row, Col, ListGroup, Card, Accordion } from 'react-bootstrap';
import ServiceDetailLayout from './ServiceDetailLayout';

const PrenatalPostnatalCare = () => {
  return (
    <ServiceDetailLayout
      title="Prenatal & Postnatal Care"
      description="Comprehensive care for you and your baby throughout pregnancy and beyond"
      image="/prenatal.jpeg"
    >
      <div className="mb-4">
        <h3 className="h4 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Your Journey to Motherhood
        </h3>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          Our prenatal and postnatal care services are designed to support you through every stage of your pregnancy journey, from conception through delivery and beyond. We provide personalized care to ensure the health and well-being of both mother and baby.
        </p>
      </div>

      <Row className="g-4 mb-4">
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <h5 className="h6 mb-3" style={{
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                <i className="fas fa-baby me-2"></i>
                Prenatal Care Includes:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Monthly checkups (more frequent as due date approaches)',
                  'Ultrasound examinations',
                  'Genetic screening and testing',
                  'Nutrition and lifestyle counseling',
                  'Childbirth education classes',
                  'High-risk pregnancy management',
                  'Labor and delivery planning',
                  'Pain management options'
                ].map((item, index) => (
                  <ListGroup.Item key={index} className="border-0 px-0 bg-transparent">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      opacity: 0.9
                    }}>
                      {item}
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <h5 className="h6 mb-3" style={{
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                <i className="fas fa-home me-2"></i>
                Postnatal Care Services:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Postpartum checkups',
                  'Newborn care guidance',
                  'Breastfeeding support',
                  'Postpartum depression screening',
                  'Contraception counseling',
                  'Pelvic floor therapy',
                  'Nutrition for nursing mothers',
                  'Family planning services'
                ].map((item, index) => (
                  <ListGroup.Item key={index} className="border-0 px-0 bg-transparent">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      opacity: 0.9
                    }}>
                      {item}
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mb-4">
        <h4 className="h5 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Your Pregnancy Timeline
        </h4>
        <Accordion className="mb-4">
          {[
            {
              title: 'First Trimester (Weeks 1-12)',
              content: 'Initial prenatal visit, blood tests, genetic screening, and ultrasound to confirm due date.'
            },
            {
              title: 'Second Trimester (Weeks 13-26)',
              content: 'Anatomy scan, genetic testing, and monitoring baby\'s growth and development.'
            },
            {
              title: 'Third Trimester (Weeks 27-40+)',
              content: 'More frequent checkups, fetal movement monitoring, and preparation for delivery.'
            },
            {
              title: 'Postpartum (First 6 Weeks)',
              content: 'Healing, newborn care, and adjusting to life with your new baby.'
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

      <div className="alert alert-info" style={{
        background: 'rgba(13, 202, 240, 0.1)',
        border: '1px solid rgba(13, 202, 240, 0.2)',
        borderRadius: '0.5rem'
      }}>
        <div className="d-flex">
          <i className="fas fa-info-circle me-3 mt-1" style={{
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
            }}>Important Notice</h5>
            <p className="mb-0" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.9
            }}>
              Please contact our office immediately if you experience any concerning symptoms during your pregnancy, such as severe abdominal pain, heavy bleeding, or decreased fetal movement.
            </p>
          </div>
        </div>
      </div>
    </ServiceDetailLayout>
  );
};

export default PrenatalPostnatalCare;
