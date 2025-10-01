import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-5" style={{
      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
      minHeight: 'calc(100vh - 76px)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3 text-white">Contact Us</h2>
            <p className="lead text-white-50">Get in touch with us for appointments, inquiries, or emergency services</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4} className="text-center">
            <div className="mb-3 p-4 bg-white bg-opacity-10 rounded-3 h-100">
              <FaPhoneAlt className="fa-3x mb-3 text-white" />
              <h5 className="text-white">Emergency Hotline</h5>
              <p className="mb-0 text-white">
                <strong>+234 706 904 9315 / +234 805 601 1362</strong>
                <br />
                24/7 Emergency Services
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3 p-4 bg-white bg-opacity-10 rounded-3 h-100">
              <FaCalendarAlt className="fa-3x mb-3 text-white" />
              <h5 className="text-white">Appointments</h5>
              <p className="mb-0 text-white">
                <strong>+234 706 904 9315 / +234 805 601 1362</strong>
                <br />
                Mon-Fri: 24/7hrs
                <br />
                Sat: 24/7hrs
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3 p-4 bg-white bg-opacity-10 rounded-3 h-100">
              <FaMapMarkerAlt className="fa-3x mb-3 text-white" />
              <h5 className="text-white">Location</h5>
              <p className="mb-0 text-white">
                No.18 Prince Alhaji Yusuff Str,Ayesan
                <br />
                Ijebu-Ode, Ogun State, Nigeria
                <br />
                <a href="https://goo.gl/maps/aDe9zcQ6zp6GVBgD7" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline">
                  Get Directions
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <div className="p-4 bg-white bg-opacity-10 rounded-3">
              <h4 className="text-white mb-4">Send us a Message</h4>
              <form>
                <Row className="g-3">
                  <Col md={6}>
                    <input type="text" className="form-control bg-transparent text-white" placeholder="Your Name" />
                  </Col>
                  <Col md={6}>
                    <input type="email" className="form-control bg-transparent text-white" placeholder="Your Email" />
                  </Col>
                  <Col md={12}>
                    <input type="text" className="form-control bg-transparent text-white" placeholder="Subject" />
                  </Col>
                  <Col md={12}>
                    <textarea className="form-control bg-transparent text-white" rows="4" placeholder="Your Message"></textarea>
                  </Col>
                  <Col md={12} className="text-center">
                    <button type="submit" className="btn btn-light px-4 py-2">
                      Send Message
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
