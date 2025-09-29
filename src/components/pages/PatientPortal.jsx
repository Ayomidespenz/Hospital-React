import { Container, Row, Col, Card, Button, Badge, Table } from "react-bootstrap"
import { Link } from "react-router-dom"

const PatientPortal = () => {
  // Mock data for demonstration
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      date: "2025-01-15",
      time: "10:30 AM",
      type: "Follow-up",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      department: "Internal Medicine",
      date: "2025-01-22",
      time: "2:00 PM",
      type: "Consultation",
    },
  ]

  const recentTests = [
    { id: 1, test: "Blood Test", date: "2025-01-05", status: "Completed" },
    { id: 2, test: "X-Ray Chest", date: "2025-01-03", status: "Completed" },
    { id: 3, test: "ECG", date: "2024-12-28", status: "Completed" },
  ]

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        {/* Welcome Section */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="h2 text-hospital-primary mb-1">Welcome back, John Doe</h1>
                <p className="text-muted">Patient ID: #P12345 | Last visit: January 5, 2025</p>
              </div>
              <Button variant="primary" as={Link} to="/patient/appointments">
                <i className="fas fa-calendar-plus me-2"></i>
                Book Appointment
              </Button>
            </div>
          </Col>
        </Row>

        {/* Quick Actions */}
        <Row className="g-4 mb-5">
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <div className="text-hospital-primary mb-3">
                  <i className="fas fa-calendar-alt fa-2x"></i>
                </div>
                <Card.Title className="h6">Appointments</Card.Title>
                <Card.Text className="text-muted small">View and manage your appointments</Card.Text>
                <Button variant="outline-primary" size="sm" as={Link} to="/patient/appointments">
                  Manage
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <div className="text-hospital-primary mb-3">
                  <i className="fas fa-file-medical fa-2x"></i>
                </div>
                <Card.Title className="h6">Medical Records</Card.Title>
                <Card.Text className="text-muted small">Access your medical history</Card.Text>
                <Button variant="outline-primary" size="sm" as={Link} to="/patient/records">
                  View Records
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <div className="text-hospital-primary mb-3">
                  <i className="fas fa-receipt fa-2x"></i>
                </div>
                <Card.Title className="h6">Billing</Card.Title>
                <Card.Text className="text-muted small">View bills and payment history</Card.Text>
                <Button variant="outline-primary" size="sm" as={Link} to="/patient/billing">
                  View Bills
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <div className="text-hospital-primary mb-3">
                  <i className="fas fa-user-edit fa-2x"></i>
                </div>
                <Card.Title className="h6">Profile</Card.Title>
                <Card.Text className="text-muted small">Update your personal information</Card.Text>
                <Button variant="outline-primary" size="sm" as={Link} to="/patient/profile">
                  Edit Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Upcoming Appointments */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0 py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 text-hospital-primary">
                    <i className="fas fa-calendar-check me-2"></i>
                    Upcoming Appointments
                  </h5>
                  <Button variant="link" size="sm" as={Link} to="/patient/appointments">
                    View All
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                {upcomingAppointments.length > 0 ? (
                  <div className="table-responsive">
                    <Table hover className="mb-0">
                      <thead>
                        <tr>
                          <th>Doctor</th>
                          <th>Department</th>
                          <th>Date & Time</th>
                          <th>Type</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingAppointments.map((appointment) => (
                          <tr key={appointment.id}>
                            <td>{appointment.doctor}</td>
                            <td>{appointment.department}</td>
                            <td>
                              {appointment.date}
                              <br />
                              <small className="text-muted">{appointment.time}</small>
                            </td>
                            <td>
                              <Badge bg="primary">{appointment.type}</Badge>
                            </td>
                            <td>
                              <Button variant="outline-primary" size="sm">
                                Reschedule
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <i className="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                    <p className="text-muted">No upcoming appointments</p>
                    <Button variant="primary" as={Link} to="/patient/appointments">
                      Book Your First Appointment
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>

            {/* Recent Test Results */}
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white border-0 py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 text-hospital-primary">
                    <i className="fas fa-flask me-2"></i>
                    Recent Test Results
                  </h5>
                  <Button variant="link" size="sm" as={Link} to="/patient/records">
                    View All
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table hover className="mb-0">
                    <thead>
                      <tr>
                        <th>Test</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTests.map((test) => (
                        <tr key={test.id}>
                          <td>{test.test}</td>
                          <td>{test.date}</td>
                          <td>
                            <Badge bg="success">{test.status}</Badge>
                          </td>
                          <td>
                            <Button variant="outline-primary" size="sm">
                              View Report
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Health Summary */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0 py-3">
                <h5 className="mb-0 text-hospital-primary">
                  <i className="fas fa-heartbeat me-2"></i>
                  Health Summary
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small text-muted">Blood Pressure</span>
                    <span className="fw-bold">120/80 mmHg</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small text-muted">Heart Rate</span>
                    <span className="fw-bold">72 bpm</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small text-muted">Weight</span>
                    <span className="fw-bold">70 kg</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="small text-muted">BMI</span>
                    <span className="fw-bold">22.5</span>
                  </div>
                </div>
                <Button variant="outline-primary" size="sm" className="w-100">
                  View Full Health Profile
                </Button>
              </Card.Body>
            </Card>

            {/* Quick Messages */}
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white border-0 py-3">
                <h5 className="mb-0 text-hospital-primary">
                  <i className="fas fa-envelope me-2"></i>
                  Messages
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="text-center py-3">
                  <i className="fas fa-inbox fa-2x text-muted mb-2"></i>
                  <p className="text-muted small mb-2">No new messages</p>
                  <Button variant="outline-primary" size="sm">
                    Contact Doctor
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PatientPortal
