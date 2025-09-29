"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert, Badge } from "react-bootstrap"

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    appointmentType: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
  })
  const [showAlert, setShowAlert] = useState(false)

  const departments = [
    "Cardiology",
    "Internal Medicine",
    "Orthopedics",
    "Neurology",
    "Pediatrics",
    "Gynecology",
    "Ophthalmology",
    "Radiology",
  ]

  const doctors = {
    Cardiology: ["Dr. Sarah Johnson", "Dr. Michael Roberts"],
    "Internal Medicine": ["Dr. Michael Chen", "Dr. Lisa Anderson"],
    Orthopedics: ["Dr. David Wilson", "Dr. Jennifer Lee"],
    Neurology: ["Dr. Robert Brown", "Dr. Emily Davis"],
  }

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
      // Reset form or redirect
    }, 3000)
  }

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white border-0 py-4">
                <h2 className="h3 text-hospital-primary mb-1">
                  <i className="fas fa-calendar-plus me-2"></i>
                  Book an Appointment
                </h2>
                <p className="text-muted mb-0">Schedule your visit with our medical professionals</p>
              </Card.Header>
              <Card.Body className="p-4">
                {showAlert && (
                  <Alert variant="success" className="mb-4">
                    <i className="fas fa-check-circle me-2"></i>
                    Appointment request submitted successfully! We will confirm your appointment within 24 hours.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Select name="department" value={formData.department} onChange={handleChange} required>
                          <option value="">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Doctor</Form.Label>
                        <Form.Select name="doctor" value={formData.doctor} onChange={handleChange} required>
                          <option value="">Select Doctor</option>
                          {formData.department &&
                            doctors[formData.department]?.map((doctor) => (
                              <option key={doctor} value={doctor}>
                                {doctor}
                              </option>
                            ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Appointment Type</Form.Label>
                    <Form.Select
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Appointment Type</option>
                      <option value="consultation">Consultation</option>
                      <option value="follow-up">Follow-up</option>
                      <option value="routine-checkup">Routine Checkup</option>
                      <option value="emergency">Emergency</option>
                    </Form.Select>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Preferred Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Preferred Time</Form.Label>
                        <Form.Select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Reason for Visit</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Please describe your symptoms or reason for the appointment"
                      required
                    />
                  </Form.Group>

                  <div className="d-flex gap-3">
                    <Button type="submit" variant="primary" size="lg">
                      <i className="fas fa-calendar-check me-2"></i>
                      Book Appointment
                    </Button>
                    <Button variant="outline-secondary" size="lg" type="button">
                      Cancel
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0 py-3">
                <h5 className="mb-0 text-hospital-primary">
                  <i className="fas fa-info-circle me-2"></i>
                  Appointment Guidelines
                </h5>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="fas fa-check text-success me-2"></i>
                    Arrive 15 minutes before your appointment
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-success me-2"></i>
                    Bring your insurance card and ID
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-success me-2"></i>
                    List of current medications
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-success me-2"></i>
                    Previous medical records if applicable
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white border-0 py-3">
                <h5 className="mb-0 text-hospital-primary">
                  <i className="fas fa-clock me-2"></i>
                  Available Hours
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-bold">Monday - Friday</span>
                    <Badge bg="success">Open</Badge>
                  </div>
                  <small className="text-muted">9:00 AM - 5:00 PM</small>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-bold">Saturday</span>
                    <Badge bg="warning">Limited</Badge>
                  </div>
                  <small className="text-muted">9:00 AM - 2:00 PM</small>
                </div>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-bold">Sunday</span>
                    <Badge bg="danger">Closed</Badge>
                  </div>
                  <small className="text-muted">Emergency only</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AppointmentBooking
