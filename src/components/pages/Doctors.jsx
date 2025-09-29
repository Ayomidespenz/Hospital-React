import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaUserMd, FaStethoscope, FaRegClock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15 years",
      image: "/doctor-1.jpg",
      bio: "Board-certified cardiologist with extensive experience in interventional cardiology and heart failure management.",
      schedule: "Mon, Wed, Fri: 9:00 AM - 5:00 PM",
      phone: "+1 (555) 123-4567",
      email: "s.johnson@hiscure.com"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      experience: "12 years",
      image: "/doctor-2.jpg",
      bio: "Caring and compassionate pediatrician specializing in child development and preventive care for children of all ages.",
      schedule: "Tue, Thu, Sat: 8:00 AM - 4:00 PM",
      phone: "+1 (555) 234-5678",
      email: "m.chen@hiscure.com"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Neurologist",
      experience: "10 years",
      image: "/doctor-3.jpg",
      bio: "Expert in diagnosing and treating disorders of the nervous system, including migraines, epilepsy, and movement disorders.",
      schedule: "Mon, Wed, Fri: 10:00 AM - 6:00 PM",
      phone: "+1 (555) 345-6789",
      email: "e.rodriguez@hiscure.com"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "18 years",
      image: "/doctor-4.jpg",
      bio: "Specializes in joint replacement, sports medicine, and minimally invasive surgical techniques for musculoskeletal conditions.",
      schedule: "Tue, Thu: 7:00 AM - 3:00 PM",
      phone: "+1 (555) 456-7890",
      email: "j.wilson@hiscure.com"
    },
    {
      id: 5,
      name: "Dr. Olivia Martinez",
      specialty: "Dermatologist",
      experience: "9 years",
      image: "/doctor-5.jpg",
      bio: "Expert in medical and cosmetic dermatology, providing comprehensive skin care for patients of all ages.",
      schedule: "Mon, Wed, Fri: 8:30 AM - 4:30 PM",
      phone: "+1 (555) 567-8901",
      email: "o.martinez@hiscure.com"
    },
    {
      id: 6,
      name: "Dr. Robert Taylor",
      specialty: "General Surgeon",
      experience: "14 years",
      image: "/doctor-6.jpg",
      bio: "Performs a wide range of surgical procedures with expertise in minimally invasive and robotic-assisted techniques.",
      schedule: "Mon-Fri: 7:30 AM - 3:30 PM",
      phone: "+1 (555) 678-9012",
      email: "r.taylor@hiscure.com"
    }
  ];

  return (
    <div className="py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Our Expert Doctors</h2>
          <p className="lead text-muted">Meet our team of experienced healthcare professionals</p>
          <div className="divider bg-primary mx-auto" style={{width: '80px', height: '4px'}}></div>
        </div>

        {/* Doctors Grid */}
        <Row className="g-4">
          {doctors.map((doctor) => (
            <Col lg={4} md={6} key={doctor.id}>
              <Card className="h-100 border-0 shadow-sm doctor-card">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="doctor-image"
                  />
                  <div className="doctor-overlay">
                    <div className="d-flex gap-2">
                      <a href={`tel:${doctor.phone}`} className="btn btn-light btn-sm rounded-circle">
                        <FaPhoneAlt className="text-primary" />
                      </a>
                      <a href={`mailto:${doctor.email}`} className="btn btn-light btn-sm rounded-circle">
                        <FaEnvelope className="text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body className="text-center p-4">
                  <h3 className="h5 mb-1">{doctor.name}</h3>
                  <p className="text-primary mb-2">{doctor.specialty}</p>
                  <p className="text-muted small mb-3">
                    <FaUserMd className="me-1" /> {doctor.experience} experience
                  </p>
                  <p className="mb-3">{doctor.bio}</p>
                  <div className="d-flex align-items-center justify-content-center text-muted small mb-3">
                    <FaRegClock className="me-2" />
                    <span>{doctor.schedule}</span>
                  </div>
                  <Link 
                    to={`/doctors/${doctor.id}`} 
                    className="btn btn-outline-primary btn-sm"
                  >
                    View Profile
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <div className="bg-light p-5 rounded-3 text-center mt-5">
          <h3 className="h4 mb-3">Can't Find the Right Doctor?</h3>
          <p className="text-muted mb-4">Our friendly staff can help you find the perfect specialist for your needs.</p>
          <div className="d-flex gap-3 justify-content-center">
            <a href="tel:+1234567890" className="btn btn-primary">
              <FaPhoneAlt className="me-2" /> Call Us Now
            </a>
            <Link to="/appointment" className="btn btn-outline-primary">
              Book Appointment
            </Link>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .doctor-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .doctor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1) !important;
        }
        .doctor-image {
          height: 280px;
          object-fit: cover;
          width: 100%;
        }
        .doctor-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .doctor-card:hover .doctor-overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Doctors;
