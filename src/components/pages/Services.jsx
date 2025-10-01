import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBaby, FaHeartbeat, FaProcedures, FaStethoscope, FaSyringe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Services = () => {
  const services = [
    {
      id: 1,
      route: 'gynecological-care',
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
      route: 'prenatal-postnatal-care',
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
      route: 'fertility-services',
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
      route: 'minimally-invasive-surgery',
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
      route: 'well-woman-exams',
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
      route: 'contraception-family-planning',
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
    {
      id: 7,
      route: 'laboratory-services',
      icon: (
        <div className="icon-image-container" style={{ width: '100px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/lab.jpeg" 
            alt="Laboratory Services" 
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
      title: 'Laboratory Services',
      description: 'State-of-the-art laboratory testing and diagnostic services providing accurate and timely results for comprehensive patient care and treatment planning.',
      features: ['Blood Tests', 'Urinalysis', 'Hormone Panels', 'Microbiology']
    },
    {
      id: 8,
      route: 'internal-medicine',
      icon: (
        <div className="icon-image-container" style={{ width: '100px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/internal.jpeg" 
            alt="Internal Medicine" 
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
      title: 'Internal Medicine',
      description: 'Comprehensive medical care for adults, focusing on the prevention, diagnosis, and treatment of a wide range of adult health conditions and diseases.',
      features: ['Chronic Disease Management', 'Preventive Care', 'Health Screenings', 'Vaccinations']
    },
    {
      id: 9,
      route: 'ophthalmology',
      icon: (
        <div className="icon-image-container" style={{ width: '100px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/opthalmology.jpeg" 
            alt="Ophthalmology" 
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
      title: 'Ophthalmology',
      description: 'Expert eye care services specializing in the diagnosis, treatment, and management of eye diseases and vision disorders for patients of all ages.',
      features: ['Eye Exams', 'Glaucoma Treatment', 'Cataract Evaluation', 'Vision Correction']
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
                  <Link 
                    to={`/services/${service.route}`}
                    className="btn mt-3"
                    style={{
                      borderColor: '#5d6f8a',
                      background: 'transparent',
                      backgroundImage: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      padding: '0.375rem 1.5rem',
                      border: '1px solid #5d6f8a',
                      borderRadius: '50rem'
                    }}
                  >
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
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
            transforanslateY(20px);
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
