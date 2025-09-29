import { Container, Row, Col } from "react-bootstrap";
import { FaHospital, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Appointments", path: "/appointment" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    { name: "Obstetrics", path: "/services/obstetrics" },
    { name: "Gynecology", path: "/services/gynecology" },
    { name: "Family Planning", path: "/services/family-planning" },
    { name: "Fertility", path: "/services/fertility" },
    { name: "Ultrasound", path: "/services/ultrasound" },
    { name: "Prenatal Care", path: "/services/prenatal-care" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="me-2" />,
      text: "123 Medical Center Drive, Lekki Phase 1, Lagos, Nigeria"
    },
    {
      icon: <FaPhoneAlt className="me-2" />,
      text: "+234 913 215 9156",
      link: "tel:+2349132159156"
    },
    {
      icon: <FaEnvelope className="me-2" />,
      text: "info@arcticgynae.com",
      link: "mailto:info@arcticgynae.com"
    },
    {
      icon: <FaClock className="me-2" />,
      text: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
  ];

  return (
    <footer className="text-white pt-5 pb-3" style={{ 
      background: 'linear-gradient(45deg, #9f1f9f, #ff3399)',
      backgroundColor: 'linear-gradient(45deg, #9f1f9f, #ff3399)'
    }}>
      <Container>
        <Row className="g-4">
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <FaHospital className="text-white me-2" size={28} />
              <h4 className="mb-0">HisCure Hospital</h4>
            </div>
            <p className="text-white">
              Providing exceptional women's healthcare services with compassion, expertise, and state-of-the-art technology.
            </p>
            <div className="d-flex gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
                  style={{ width: '36px', height: '36px', backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
          
          <Col md={6} lg={2} className="mb-4 mb-md-0">
            <h5 className="h6 mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link to={link.path} className="text-white text-decoration-none hover-text-primary">
                    <i className="fas fa-chevron-right small me-2"></i> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col md={6} lg={2} className="mb-4 mb-md-0">
            <h5 className="h6 mb-4">Our Services</h5>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  <Link to={service.path} className="text-white text-decoration-none hover-text-primary">
                    <i className="fas fa-chevron-right small me-2"></i> {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={4}>
            <h5 className="h6 mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              {contactInfo.map((item, index) => (
                <li key={index} className="mb-3 d-flex">
                  <div className="text-white mt-1">
                    {item.icon}
                  </div>
                  <div>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-white text-decoration-none hover-text-primary"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-white" style={{ whiteSpace: 'pre-line' }}>
                        {item.text}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4 border-white-50" />
        
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0 text-white">
              &copy; {currentYear} Arctic Gynae Centre. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex flex-wrap justify-content-md-end gap-3">
              <a href="#" className="text-white text-decoration-none hover-text-primary">Privacy Policy</a>
              <a href="#" className="text-white text-decoration-none hover-text-primary">Terms of Service</a>
              <a href="#" className="text-white text-decoration-none hover-text-primary">Sitemap</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
