import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBaby, FaHeartbeat, FaProcedures, FaStethoscope, FaSyringe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: (
        <div className="icon-image-container" style={{ width: '100px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/gyne.jpeg" 
            alt="Gynecological Care" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            className="hover-scale"
          />
        </div>
      ),
      title: 'Gynecological Care',
      description: 'Comprehensive gynecological services including annual exams, family planning, and menopause management.',
      features: ['Annual Exams', 'Family Planning', 'Menopause Care']
    },
    {
      id: 2,
      icon: (
        <div className="icon-image-container" style={{ width: '100px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/prenatal.jpeg" 
            alt="Prenatal Care" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            className="hover-scale"
          />
        </div>
      ),
      title: 'Prenatal & Postnatal Care',
      description: 'Personalized care throughout your pregnancy journey and after delivery for you and your baby.',
      features: ['Prenatal Visits', 'Ultrasounds', 'Postpartum Care']
    },
    {
      id: 3,
      icon: (
        <div className="icon-image-container" style={{ width: '100px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/fertility.jpeg" 
            alt="Fertility Services" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            className="hover-scale"
          />
        </div>
      ),
      title: 'Fertility Services',
      description: 'Advanced fertility treatments and counseling to help you build the family you desire.',
      features: ['Fertility Testing', 'IUI', 'IVF Support']
    },
    {
      id: 4,
      icon: (
        <div className="icon-image-container" style={{ width: '100px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/invasive.jpeg" 
            alt="Minimally invasive Services" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            className="hover-scale"
          />
        </div>
      ),      title: 'Minimally Invasive Surgery',
      description: 'State-of-the-art surgical techniques for faster recovery and better outcomes.',
      features: ['Laparoscopy', 'Hysteroscopy', 'Robotic Surgery']
    },
    {
      id: 5,
      icon: (
        <div className="icon-image-container" style={{ width: '100px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/well.jpeg" 
            alt="Well Woman Exams" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            className="hover-scale"
          />
        </div>
      ),      title: 'Well Woman Exams',
      description: 'Preventive care and screenings to maintain your reproductive health at every stage of life.',
      features: ['Pap Smears', 'Breast Exams', 'Bone Density']
    },
    {
      id: 6,
      icon: (
        <div className="icon-image-container" style={{ width: '100px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/fertility.jpeg" 
            alt="Fertility Services" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            className="hover-scale"
          />
        </div>
      ),      title: 'Contraception',
      description: 'A full range of birth control options tailored to your lifestyle and health needs.',
      features: ['IUDs', 'Implants', 'Birth Control Pills']
    },
  ];

  return (
    <section className="py-5 bg-light" style={{ minHeight: '80vh' }}>
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="fade-in-up">
              <h3 className="mb-3" style={{ 
                fontSize: '1.8rem',
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}>OUR SERVICES</h3>
              <h5 className="fw-bold mb-3" style={{ 
                fontSize: '2.8rem',
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}>Comprehensive Women's Healthcare</h5>
              <p style={{
                fontSize: '1.25rem',
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                We provide a full range of gynecological and obstetric services with compassion and expertise.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={service.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card h-100 border-0 shadow-sm hover-scale transition-all">
                <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-decoration-none">
                  <div className="card-body p-4 text-center">
                    <div className="icon-box bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                      {service.icon}
                    </div>
                    <h4 className="h5 mb-3" style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}>{service.title}</h4>
                    <p className="mb-4" style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}>{service.description}</p>
                    <div className="mt-auto">
                      <ul className="list-unstyled text-start">
                        {service.features.map((feature, i) => (
                          <li key={i} className="mb-2" style={{
                            background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            opacity: 0.9
                          }}>
                            <i className="fas fa-check-circle text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      variant="outline-primary" 
                      className="mt-3"
                      style={{
                        borderColor: '#5d6f8a',
                        background: 'transparent',
                        backgroundImage: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent'
                      }}
                    >
                      Learn More <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <Link 
              to="/patient/register" 
              className="btn btn-lg px-4"
              style={{
                background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                padding: '0.5rem 2rem'
              }}
            >
              Book an Appointment
            </Link>
          </Col>
        </Row>
      </Container>

      <style jsx global>{`
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
          background: var(--bs-primary) !important;
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
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
