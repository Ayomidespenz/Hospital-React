import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="text-white py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Contact Us</h2>
            <p className="lead">Get in touch with us for appointments, inquiries, or emergency services</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4} className="text-center">
            <div className="mb-3">
              <FaPhoneAlt className="fa-3x mb-3" />
              <h5>Emergency Hotline</h5>
              <p className="mb-0">
                <strong>+234 913 215 9156</strong>
                <br />
                24/7 Emergency Services
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3">
              <FaCalendarAlt className="fa-3x mb-3" />
              <h5>Appointments</h5>
              <p className="mb-0">
                <strong>+234 913 215 9156</strong>
                <br />
                Mon-Fri: 8AM-6PM
                <br />
                Sat: 9AM-2PM
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3">
              <FaMapMarkerAlt className="fa-3x mb-3" />
              <h5>Location</h5>
              <p className="mb-0">
                123 Medical Center Drive
                <br />
                Lekki Phase 1, Lagos, Nigeria
                <br />
                <a href="https://goo.gl/maps/aDe9zcQ6zp6GVBgD7" target="_blank" rel="noopener noreferrer" className="text-white">
                  Get Directions
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <a href="/appointment" className="btn btn-light btn-lg">
              Schedule an Appointment
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
