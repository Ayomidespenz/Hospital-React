import React from 'react';
import { Row, Col, ListGroup, Card } from 'react-bootstrap';
import ServiceDetailLayout from './ServiceDetailLayout';

const GynecologicalCare = () => {
  return (
    <ServiceDetailLayout
      title="Gynecological Care"
      description="Comprehensive gynecological services for women of all ages"
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
          Personalized Care for Every Stage of Life
        </h3>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          Our gynecological care services are designed to provide comprehensive healthcare for women from adolescence through menopause and beyond. We focus on preventive care, early detection, and personalized treatment plans.
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
                <i className="fas fa-stethoscope me-2"></i>
                Our Services Include:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Annual Well-Woman Exams',
                  'Pap Smears & HPV Testing',
                  'Breast Exams',
                  'Birth Control Counseling',
                  'Menopause Management',
                  'STI Screening & Treatment',
                  'Pelvic Pain Evaluation',
                  'Abnormal Bleeding Treatment'
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
                <i className="fas fa-calendar-check me-2"></i>
                When to Schedule a Visit:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Annual well-woman exam',
                  'Irregular menstrual cycles',
                  'Pelvic pain or discomfort',
                  'Menopausal symptoms',
                  'Birth control needs',
                  'Preconception counseling',
                  'Breast health concerns',
                  'Vaginal infections or irritation'
                ].map((item, index) => (
                  <ListGroup.Item key={index} className="border-0 px-0 bg-transparent">
                    <i className="far fa-calendar-alt text-primary me-2"></i>
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

      <div className="mt-4">
        <h4 className="h5 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          What to Expect During Your Visit
        </h4>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          Your visit will begin with a discussion about your medical history and any concerns. Depending on your needs, your appointment may include a physical exam, breast exam, pelvic exam, and/or Pap test. We'll take the time to answer all your questions and develop a personalized care plan.
        </p>
      </div>
    </ServiceDetailLayout>
  );
};

export default GynecologicalCare;
