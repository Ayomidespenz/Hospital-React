import React from 'react';
import { Row, Col, ListGroup, Card } from 'react-bootstrap';
import ServiceDetailLayout from './ServiceDetailLayout';
import { FaEye, FaGlasses, FaEyeDropper, FaUserInjured } from 'react-icons/fa';

const Ophthalmology = () => {
  return (
    <ServiceDetailLayout
      title="Ophthalmology"
      description="Expert eye care services for vision health and eye disease management"
      image="/opthalmology.jpeg"
    >
      <div className="mb-4">
        <h3 className="h4 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Comprehensive Eye Care for All Ages
        </h3>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          Our experienced ophthalmologists provide comprehensive eye care using the latest diagnostic and treatment technologies. We are committed to preserving and improving your vision through personalized care and advanced treatment options.
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
                <FaEye className="me-2" />
                Our Services Include:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Comprehensive Eye Examinations',
                  'Glaucoma Testing & Treatment',
                  'Cataract Evaluation & Surgery',
                  'Diabetic Eye Care',
                  'Dry Eye Treatment',
                  'Pediatric Eye Care',
                  'Contact Lens Fitting',
                  'Emergency Eye Care'
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
                <FaGlasses className="me-2" />
                When to Schedule an Eye Exam:
              </h5>
              <ListGroup variant="flush">
                {[
                  'Blurred or distorted vision',
                  'Frequent headaches or eye strain',
                  'Difficulty seeing at night',
                  'Family history of eye disease',
                  'Diabetes or other chronic conditions',
                  'Sudden eye pain or redness',
                  'Floaters or flashes of light',
                  'Over 40 years old (annual exam)'
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

export default Ophthalmology;
