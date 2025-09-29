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
    { name: "Gynecological Care", path: "/services/gynecological-care" },
    { name: "Prenatal & Postnatal Care", path: "/services/prenatal-postnatal-care" },
    { name: "Fertility Services", path: "/services/fertility-services" },
    { name: "Minimally Invasive Surgery", path: "/services/minimally-invasive-surgery" },
    { name: "Well Woman Exams", path: "/services/well-woman-exams" },
    { name: "Contraception & Family Planning", path: "/services/contraception-family-planning" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="me-2" />,
      text: "No.4 Prince Alhaji Yusuff str, Ayesan, Ijebu-Ode, Ogun State, Nigeria"
    },
    {
      icon: <FaPhoneAlt className="me-2" />,
      text: "+234 7069049315",
      link: "tel:+2347069049315"
    },
    {
      icon: <FaEnvelope className="me-3 mb-1" />,
      text: "info@hiscurehospital.com",
      link: "mailto:info@hiscurehospital.com"
    },
    {
      icon: <FaClock className="me-2" />,
      text: "Mon - Fri: 24/7hrs\nSat: 24/7hrs"
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
        background: 'linear-gradient(45deg,rgb(93, 111, 138), #0dcaf0)' ,       backgroundColor: 'linear-gradient(45deg,rgb(93, 111, 138), #0dcaf0)'
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
              &copy; {currentYear} HisCure Hospital. All rights reserved.
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
