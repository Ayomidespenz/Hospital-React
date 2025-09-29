import React from 'react';
import { Row, Col, ListGroup, Card, Accordion, Badge } from 'react-bootstrap';
import ServiceDetailLayout from './ServiceDetailLayout';

const ContraceptionFamilyPlanning = () => {
  const methods = [
    {
      category: 'Hormonal Methods',
      options: [
        {
          name: 'Birth Control Pills',
          effectiveness: '99%',
          duration: 'Daily',
          description: 'Oral contraceptives that prevent ovulation',
          pros: ['Highly effective when taken correctly', 'Regulates menstrual cycles', 'May reduce acne and PMS'],
          cons: ['Must be taken daily', 'Possible side effects', 'No protection against STIs']
        },
        {
          name: 'Contraceptive Patch',
          effectiveness: '99%',
          duration: 'Weekly',
          description: 'Worn on the skin, releases hormones',
          pros: ['Weekly application', 'No daily pill to remember', 'May have fewer side effects than pills'],
          cons: ['May cause skin irritation', 'Visible on skin', 'No protection against STIs']
        },
        {
          name: 'Vaginal Ring',
          effectiveness: '99%',
          duration: '3 weeks',
          description: 'Flexible ring inserted into the vagina',
          pros: ['Monthly insertion', 'Low maintenance', 'May reduce menstrual cramps'],
          cons: ['May cause vaginal irritation', 'Can be felt during sex', 'No protection against STIs']
        },
        {
          name: 'Contraceptive Implant',
          effectiveness: '>99%',
          duration: '3-5 years',
          description: 'Small rod inserted under the skin of the arm',
          pros: ['Long-lasting', 'Highly effective', 'Low maintenance'],
          cons: ['Requires minor procedure', 'May cause irregular bleeding', 'No protection against STIs']
        }
      ]
    },
    {
      category: 'Long-Acting Reversible Contraception (LARC)',
      options: [
        {
          name: 'IUD (Hormonal)',
          effectiveness: '>99%',
          duration: '3-7 years',
          description: 'Small T-shaped device inserted into the uterus',
          pros: ['Long-term protection', 'Reversible', 'May reduce menstrual bleeding'],
          cons: ['Requires insertion by provider', 'May cause cramping', 'No protection against STIs']
        },
        {
          name: 'IUD (Copper)',
          effectiveness: '>99%',
          duration: 'Up to 10 years',
          description: 'Non-hormonal copper device',
          pros: ['Long-term protection', 'Hormone-free', 'Immediately reversible'],
          cons: ['May increase menstrual cramps', 'Heavier periods', 'No protection against STIs']
        }
      ]
    },
    {
      category: 'Barrier Methods',
      options: [
        {
          name: 'Male Condoms',
          effectiveness: '98%',
          duration: 'Single use',
          description: 'Worn over the penis during intercourse',
          pros: ['STI protection', 'Widely available', 'No prescription needed'],
          cons: ['Must be used correctly every time', 'Can break or slip', 'May reduce sensation']
        },
        {
          name: 'Female Condoms',
          effectiveness: '95%',
          duration: 'Single use',
          description: 'Inserted into the vagina before intercourse',
          pros: ['STI protection', 'Female-controlled', 'Can be inserted hours before sex'],
          cons: ['May be noisy', 'Can be difficult to use', 'Less effective than male condoms']
        },
        {
          name: 'Diaphragm/Cervical Cap',
          effectiveness: '88-94%',
          duration: 'Must be left in place for 6+ hours after sex',
          description: 'Barrier that covers the cervix',
          pros: ['No hormones', 'Can be inserted hours before sex', 'Reusable'],
          cons: ['Must be fitted by provider', 'Requires spermicide', 'No STI protection']
        }
      ]
    },
    {
      category: 'Permanent Methods',
      options: [
        {
          name: 'Tubal Ligation',
          effectiveness: '>99%',
          duration: 'Permanent',
          description: 'Surgical procedure to block fallopian tubes',
          pros: ['Permanent birth control', 'No daily maintenance', 'No effect on hormones'],
          cons: ['Surgery required', 'Difficult to reverse', 'No protection against STIs']
        },
        {
          name: 'Essure® (Hysteroscopic Sterilization)',
          effectiveness: '>99%',
          duration: 'Permanent',
          description: 'Non-surgical procedure to block fallopian tubes',
          pros: ['No incisions', 'No general anesthesia', 'Quick recovery'],
          cons: ['Requires confirmation test', 'Not immediately effective', 'No protection against STIs']
        }
      ]
    }
  ];

  return (
    <ServiceDetailLayout
      title="Contraception & Family Planning"
      description="Personalized birth control options to fit your lifestyle"
      image="/prenatal.jpeg"
    >
      <div className="mb-4">
        <h3 className="h4 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Your Family Planning Journey
        </h3>
        <p style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.9
        }}>
          We understand that every woman's family planning needs are unique. Our compassionate providers will work with you to find the birth control method that best fits your health, lifestyle, and future family goals. Whether you're looking for temporary protection or a permanent solution, we're here to provide expert guidance and support.
        </p>
      </div>

      <div className="mb-4">
        <h4 className="h5 mb-3" style={{
          background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Birth Control Options
        </h4>
        
        <Accordion className="mb-4" defaultActiveKey="0">
          {methods.map((method, categoryIndex) => (
            <Accordion.Item key={categoryIndex} eventKey={categoryIndex.toString()} className="mb-3 border-0">
              <Accordion.Header style={{
                background: 'linear-gradient(45deg, rgba(93, 111, 138, 0.1), rgba(13, 202, 240, 0.1))',
                borderRadius: '0.5rem',
                border: '1px solid rgba(93, 111, 138, 0.2)'
              }}>
                <h5 className="h6 mb-0" style={{
                  background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: '600'
                }}>
                  {method.category}
                </h5>
              </Accordion.Header>
              <Accordion.Body style={{
                background: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid rgba(93, 111, 138, 0.1)',
                borderTop: 'none',
                borderBottomLeftRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
                padding: '1rem 0'
              }}>
                <Row className="g-4">
                  {method.options.map((option, optionIndex) => (
                    <Col md={6} key={optionIndex}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h6 className="mb-0" style={{
                              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              color: 'transparent',
                              fontWeight: '600'
                            }}>
                              {option.name}
                            </h6>
                            <Badge bg="light" text="primary" className="ms-2" style={{
                              background: 'rgba(93, 111, 138, 0.1) !important',
                              color: '#5d6f8a !important',
                              fontWeight: '500',
                              padding: '0.25em 0.5em',
                              borderRadius: '0.25rem',
                              fontSize: '0.7rem'
                            }}>
                              {option.effectiveness} effective
                            </Badge>
                          </div>
                          <p className="small mb-2" style={{
                            background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                            opacity: 0.9,
                            fontSize: '0.8rem'
                          }}>
                            {option.description} • {option.duration}
                          </p>
                          
                          <div className="row small g-2 mt-2">
                            <Col xs={6}>
                              <div className="text-success">
                                <div className="fw-bold mb-1" style={{
                                  background: 'linear-gradient(45deg, rgb(25, 135, 84), #0dcaf0)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  color: 'transparent',
                                  fontSize: '0.7rem'
                                }}>
                                  PROS
                                </div>
                                <ul className="ps-3 mb-0" style={{
                                  listStyleType: 'none',
                                  paddingLeft: '0'
                                }}>
                                  {option.pros.map((pro, i) => (
                                    <li key={`pro-${i}`} className="mb-1 d-flex align-items-start">
                                      <i className="fas fa-plus-circle mt-1 me-2" style={{
                                        fontSize: '0.6rem',
                                        color: 'var(--bs-success)'
                                      }}></i>
                                      <span style={{
                                        background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        opacity: 0.9,
                                        fontSize: '0.75rem'
                                      }}>
                                        {pro}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                            <Col xs={6}>
                              <div className="text-danger">
                                <div className="fw-bold mb-1" style={{
                                  background: 'linear-gradient(45deg, rgb(220, 53, 69), #ffc107)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  color: 'transparent',
                                  fontSize: '0.7rem'
                                }}>
                                  CONS
                                </div>
                                <ul className="ps-3 mb-0" style={{
                                  listStyleType: 'none',
                                  paddingLeft: '0'
                                }}>
                                  {option.cons.map((con, i) => (
                                    <li key={`con-${i}`} className="mb-1 d-flex align-items-start">
                                      <i className="fas fa-minus-circle mt-1 me-2" style={{
                                        fontSize: '0.6rem',
                                        color: 'var(--bs-danger)'
                                      }}></i>
                                      <span style={{
                                        background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        opacity: 0.9,
                                        fontSize: '0.75rem'
                                      }}>
                                        {con}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="p-4 rounded-3 h-100" style={{
            background: 'linear-gradient(135deg, rgba(93, 111, 138, 0.1), rgba(13, 202, 240, 0.1))',
            border: '1px solid rgba(93, 111, 138, 0.1)'
          }}>
            <h5 className="h6 mb-3" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              <i className="fas fa-question-circle me-2"></i>
              Emergency Contraception
            </h5>
            <p className="small mb-3" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.9
            }}>
              If you've had unprotected sex or a birth control failure (like a broken condom), emergency contraception can help prevent pregnancy when used within 3-5 days.
            </p>
            <ul className="list-unstyled small">
              {[
                'Morning-after pill (Levonorgestrel)',
                'Ulipristal acetate (Ella®)',
                'Copper IUD (most effective emergency contraception)'
              ].map((item, i) => (
                <li key={i} className="mb-2 d-flex align-items-start">
                  <i className="fas fa-pills text-primary mt-1 me-2" style={{ fontSize: '0.7rem' }}></i>
                  <span style={{
                    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    opacity: 0.9,
                    fontSize: '0.85rem'
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 rounded-3 h-100" style={{
            background: 'linear-gradient(135deg, rgba(93, 111, 138, 0.1), rgba(13, 202, 240, 0.1))',
            border: '1px solid rgba(93, 111, 138, 0.1)'
          }}>
            <h5 className="h6 mb-3" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              <i className="fas fa-baby me-2"></i>
              Preconception Counseling
            </h5>
            <p className="small mb-3" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.9
            }}>
              If you're planning to become pregnant, our providers can help you prepare for a healthy pregnancy with:
            </p>
            <ul className="list-unstyled small">
              {[
                'Preconception health assessment',
                'Genetic carrier screening',
                'Folic acid and prenatal vitamin guidance',
                'Chronic condition management',
                'Lifestyle recommendations',
                'Vaccination review'
              ].map((item, i) => (
                <li key={i} className="mb-2 d-flex align-items-start">
                  <i className="fas fa-heart text-danger mt-1 me-2" style={{ fontSize: '0.7rem' }}></i>
                  <span style={{
                    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    opacity: 0.9,
                    fontSize: '0.85rem'
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="alert alert-info" style={{
        background: 'rgba(13, 202, 240, 0.1)',
        border: '1px solid rgba(13, 202, 240, 0.2)',
        borderRadius: '0.5rem'
      }}>
        <div className="d-flex">
          <i className="fas fa-comments me-3 mt-1" style={{
            background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}></i>
          <div>
            <h5 className="alert-heading" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Not Sure Which Method is Right for You?</h5>
            <p className="mb-0" style={{
              background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.9
            }}>
              Schedule a consultation with one of our providers to discuss your options. We'll help you choose a birth control method that aligns with your health needs, lifestyle, and family planning goals.
            </p>
          </div>
        </div>
      </div>
    </ServiceDetailLayout>
  );
};

export default ContraceptionFamilyPlanning;
