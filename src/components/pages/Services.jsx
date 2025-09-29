import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBaby, FaFemale, FaHeartbeat, FaProcedures, FaStethoscope, FaSyringe } from 'react-icons/fa';
import AnimateOnScroll from '../utils/AnimateOnScroll';
import '../../styles/animations.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaFemale className="display-4 text-primary" />,
      title: 'Gynecological Care',
      description: 'Comprehensive gynecological services including annual exams, family planning, and menopause management.',
      features: ['Annual Exams', 'Family Planning', 'Menopause Care']
    },
    {
      id: 2,
      icon: <FaBaby className="display-4 text-primary" />,
      title: 'Prenatal & Postnatal Care',
      description: 'Personalized care throughout your pregnancy journey and after delivery for you and your baby.',
      features: ['Prenatal Visits', 'Ultrasounds', 'Postpartum Care']
    },
    {
      id: 3,
      icon: <FaHeartbeat className="display-4 text-primary" />,
      title: 'Fertility Services',
      description: 'Advanced fertility treatments and counseling to help you build the family you desire.',
      features: ['Fertility Testing', 'IUI', 'IVF Support']
    },
    {
      id: 4,
      icon: <FaProcedures className="display-4 text-primary" />,
      title: 'Minimally Invasive Surgery',
      description: 'State-of-the-art surgical techniques for faster recovery and better outcomes.',
      features: ['Laparoscopy', 'Hysteroscopy', 'Robotic Surgery']
    },
    {
      id: 5,
      icon: <FaStethoscope className="display-4 text-primary" />,
      title: 'Well Woman Exams',
      description: 'Preventive care and screenings to maintain your reproductive health at every stage of life.',
      features: ['Pap Smears', 'Breast Exams', 'Bone Density']
    },
    {
      id: 6,
      icon: <FaSyringe className="display-4 text-primary" />,
      title: 'Contraception',
      description: 'A full range of birth control options tailored to your lifestyle and health needs.',
      features: ['IUDs', 'Implants', 'Birth Control Pills']
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <AnimateOnScroll animation="fade-in-up">
              <h6 className="text-primary mb-3">OUR SERVICES</h6>
              <h2 className="display-5 fw-bold mb-3">Comprehensive Women's Healthcare</h2>
              <p className="lead text-muted">
                We provide a full range of gynecological and obstetric services with compassion and expertise.
              </p>
            </AnimateOnScroll>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={service.id}>
              <AnimateOnScroll 
                animation="fade-in-up" 
                delay={100 * (index % 3)}
                className="h-100"
              >
                <div className="card h-100 border-0 shadow-sm hover-scale transition-all">
                  <div className="card-body p-4 text-center">
                    <div className="icon-box bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                      {service.icon}
                    </div>
                    <h4 className="h5 mb-3">{service.title}</h4>
                    <p className="text-muted mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <ul className="list-unstyled text-start">
                        {service.features.map((feature, i) => (
                          <li key={i} className="mb-2">
                            <i className="fas fa-check-circle text-primary me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-link text-primary p-0 mt-3">
                        Learn More <i className="fas fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <a href="/services" className="btn btn-primary btn-lg px-4">
                View All Services
              </a>
            </AnimateOnScroll>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .icon-box {
          transition: all 0.3s ease;
        }
        
        .card {
          border-radius: 1rem;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1) !important;
        }
        
        .card:hover .icon-box {
          background: var(--primary-color) !important;
        }
        
        .card:hover .icon-box svg {
          color: white !important;
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: translateY(-5px) !important;
        }
        
        @media (max-width: 767.98px) {
          .card {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
