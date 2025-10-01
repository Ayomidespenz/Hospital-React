import React from 'react';
import { Row, Col, ListGroup, Card } from 'react-bootstrap';
import ServiceDetailLayout from './ServiceDetailLayout';
import { FaHeartbeat, FaStethoscope, FaPills, FaUserMd } from 'react-icons/fa';

const InternalMedicine = () => {
  return (
    <ServiceDetailLayout
      title="Internal Medicine"
      description="Comprehensive healthcare for adults, focusing on prevention, diagnosis, and treatment"
      image="/internal.jpeg"
    >
      <div className="mb-4">
        <h3 className="h4 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Your Partner in Adult Healthcare
        </h3>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          Our board-certified internists provide comprehensive care for adults, managing both common and complex medical conditions. We focus on preventive care and health maintenance to help you achieve optimal health at every stage of life.
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
                <FaStethoscope className="me-2" />
                Our Services Include:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Annual Physical Examinations',
                  'Chronic Disease Management',
                  'Preventive Health Screenings',
                  'Vaccinations & Immunizations',
                  'Hypertension Management',
                  'Diabetes Care',
                  'Cholesterol Management',
                  'Geriatric Care'
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
                <FaUserMd className="me-2" />
                When to See an Internist:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Annual wellness exams',
                  'Management of chronic conditions',
                  'Unexplained symptoms',
                  'Preventive care and screenings',
                  'Medication management',
                  'Multiple health concerns',
                  'Coordination of specialist care',
                  'Health maintenance and lifestyle counseling'
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
    </ServiceDetailLayout>
  );
};

export default InternalMedicine;
