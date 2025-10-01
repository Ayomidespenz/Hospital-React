import React from 'react';
import { Row, Col, ListGroup, Card } from 'react-bootstrap';
import ServiceDetailLayout from './ServiceDetailLayout';
import { FaFlask, FaSyringe, FaMicroscope, FaVial } from 'react-icons/fa';

const LaboratoryServices = () => {
  return (
    <ServiceDetailLayout
      title="Laboratory Services"
      description="State-of-the-art diagnostic testing with fast, accurate results"
      image="/lab.jpeg"
    >
      <div className="mb-4">
        <h3 className="h4 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Advanced Diagnostic Testing
        </h3>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          Our certified laboratory is equipped with the latest technology and staffed by experienced medical technologists to ensure accurate and timely results. We maintain the highest standards of quality control and follow strict protocols for all testing procedures.
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
                <FaFlask className="me-2" />
                Our Services Include:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Complete Blood Count (CBC)',
                  'Comprehensive Metabolic Panel',
                  'Lipid Profile',
                  'Thyroid Function Tests',
                  'Hormone Level Testing',
                  'Diabetes Screening',
                  'Urinalysis',
                  'Microbiology Cultures'
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
                <FaMicroscope className="me-2" />
                What to Expect:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Fast and accurate test results',
                  'Experienced phlebotomists',
                  'Comfortable testing environment',
                  'Confidential results',
                  'Coordination with your healthcare provider',
                  'Convenient scheduling options',
                  'Insurance accepted',
                  'Quick turnaround times'
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

export default LaboratoryServices;
