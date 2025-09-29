"use client"

import { Container, Row, Col, Card, Button, Badge, Table, Tab, Tabs } from "react-bootstrap"
import { useState } from "react"

const StaffPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock data for demonstration
  const todayAppointments = [
    {
      id: 1,
      time: "9:00 AM",
      patient: "John Doe",
      patientId: "P12345",
      type: "Follow-up",
      status: "Confirmed",
    },
    {
      id: 2,
      time: "10:30 AM",
      patient: "Jane Smith",
      patientId: "P12346",
      type: "Consultation",
      status: "Confirmed",
    },
    {
      id: 3,
      time: "2:00 PM",
      patient: "Robert Johnson",
      patientId: "P12347",
      type: "Check-up",
      status: "Pending",
    },
  ]

  const pendingTasks = [
    { id: 1, task: "Review lab results for Patient P12345", priority: "High", dueTime: "11:00 AM" },
    { id: 2, task: "Complete discharge summary for Patient P12340", priority: "Medium", dueTime: "3:00 PM" },
    { id: 3, task: "Update treatment plan for Patient P12341", priority: "Low", dueTime: "End of day" },
  ]

  const recentPatients = [
    {
      id: "P12345",
      name: "John Doe",
      lastVisit: "2025-01-05",
      condition: "Hypertension",
      status: "Stable",
    },
    {
      id: "P12346",
      name: "Jane Smith",
      lastVisit: "2025-01-04",
      condition: "Diabetes",
      status: "Monitoring",
    },
    {
      id: "P12347",
      name: "Robert Johnson",
      lastVisit: "2025-01-03",
      condition: "Post-surgery",
      status: "Recovery",
    },
  ]

  const getPriorityBadge = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return <Badge bg="danger">{priority}</Badge>
      case "medium":
        return <Badge bg="warning">{priority}</Badge>
      case "low":
        return <Badge bg="success">{priority}</Badge>
      default:
        return <Badge bg="secondary">{priority}</Badge>
    }
  }

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return <Badge bg="success">{status}</Badge>
      case "pending":
        return <Badge bg="warning">{status}</Badge>
      case "stable":
        return <Badge bg="success">{status}</Badge>
      case "monitoring":
        return <Badge bg="info">{status}</Badge>
      case "recovery":
        return <Badge bg="primary">{status}</Badge>
      default:
        return <Badge bg="secondary">{status}</Badge>
    }
  }

  // Gradient text style
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        {/* Welcome Section */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="h2 mb-1" style={gradientText}>Welcome, Dr. Sarah Johnson</h1>
                <p style={{...gradientText, opacity: 0.8}}>Cardiology Department | Employee ID: #E001</p>
              </div>
              <div className="d-flex gap-2">
                <Button 
                  variant="outline-primary"
                  style={{
                    borderColor: '#5d6f8a',
                    ...gradientText,
                    background: 'transparent',
                    WebkitTextFillColor: 'initial'
                  }}
                >
                  <i className="fas fa-calendar-plus me-2"></i>
                  New Appointment
                </Button>
                <Button 
                  style={{
                    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                    border: 'none',
                    fontWeight: '500',
                    color: 'white'
                  }}
                >
                  <i className="fas fa-user-plus me-2"></i>
                  Add Patient
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Quick Stats */}
        <Row className="g-4 mb-5">
          {[
            { icon: 'calendar-day', value: '8', label: "Today's Appointments" },
            { icon: 'tasks', value: '5', label: 'Pending Tasks' },
            { icon: 'users', value: '24', label: 'Active Patients' },
            { icon: 'flask', value: '12', label: 'Lab Results Pending' }
          ].map((stat, index) => (
            <Col md={3} key={index}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="mb-2" style={gradientText}>
                    <i className={`fas fa-${stat.icon} fa-2x`}></i>
                  </div>
                  <h3 className="mb-1" style={gradientText}>{stat.value}</h3>
                  <p className="small mb-0" style={{...gradientText, opacity: 0.9}}>{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Main Content Tabs */}
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="border-bottom"
              style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
            >
              <Tab eventKey="dashboard" title="Dashboard">
                <div className="p-4">
                  <Row>
                    <Col lg={8}>
                      {/* Today's Appointments */}
                      <Card className="border-0 shadow-sm mb-4">
                        <Card.Header className="bg-white border-0 py-3">
                          <h5 className="mb-0 text-hospital-primary">
                            <i className="fas fa-calendar-check me-2"></i>
                            Today's Appointments
                          </h5>
                        </Card.Header>
                        <Card.Body>
                          <div className="table-responsive">
                            <Table hover className="mb-0">
                              <thead>
                                <tr>
                                  <th>Time</th>
                                  <th>Patient</th>
                                  <th>Type</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {todayAppointments.map((appointment) => (
                                  <tr key={appointment.id}>
                                    <td className="fw-bold">{appointment.time}</td>
                                    <td>
                                      {appointment.patient}
                                      <br />
                                      <small className="text-muted">{appointment.patientId}</small>
                                    </td>
                                    <td>{appointment.type}</td>
                                    <td>{getStatusBadge(appointment.status)}</td>
                                    <td>
                                      <div className="d-flex gap-1">
                                        <Button variant="outline-primary" size="sm">
                                          <i className="fas fa-eye"></i>
                                        </Button>
                                        <Button variant="outline-success" size="sm">
                                          <i className="fas fa-notes-medical"></i>
                                        </Button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        </Card.Body>
                      </Card>

                      {/* Recent Patients */}
                      <Card className="border-0 shadow-sm">
                        <Card.Header className="bg-white border-0 py-3">
                          <h5 className="mb-0 text-hospital-primary">
                            <i className="fas fa-user-injured me-2"></i>
                            Recent Patients
                          </h5>
                        </Card.Header>
                        <Card.Body>
                          <div className="table-responsive">
                            <Table hover className="mb-0">
                              <thead>
                                <tr>
                                  <th>Patient ID</th>
                                  <th>Name</th>
                                  <th>Last Visit</th>
                                  <th>Condition</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {recentPatients.map((patient) => (
                                  <tr key={patient.id}>
                                    <td className="fw-bold">{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.lastVisit}</td>
                                    <td>{patient.condition}</td>
                                    <td>{getStatusBadge(patient.status)}</td>
                                    <td>
                                      <div className="d-flex gap-1">
                                        <Button variant="outline-primary" size="sm">
                                          <i className="fas fa-folder-open"></i>
                                        </Button>
                                        <Button variant="outline-info" size="sm">
                                          <i className="fas fa-edit"></i>
                                        </Button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col lg={4}>
                      {/* Pending Tasks */}
                      <Card className="border-0 shadow-sm mb-4">
                        <Card.Header className="bg-white border-0 py-3">
                          <h5 className="mb-0 text-hospital-primary">
                            <i className="fas fa-tasks me-2"></i>
                            Pending Tasks
                          </h5>
                        </Card.Header>
                        <Card.Body>
                          {pendingTasks.map((task) => (
                            <div key={task.id} className="border-bottom pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                {getPriorityBadge(task.priority)}
                                <small className="text-muted">{task.dueTime}</small>
                              </div>
                              <p className="mb-2 small">{task.task}</p>
                              <Button variant="outline-primary" size="sm">
                                Complete
                              </Button>
                            </div>
                          ))}
                        </Card.Body>
                      </Card>

                      {/* Quick Actions */}
                      <Card className="border-0 shadow-sm">
                        <Card.Header className="bg-white border-0 py-3">
                          <h5 className="mb-0 text-hospital-primary">
                            <i className="fas fa-bolt me-2"></i>
                            Quick Actions
                          </h5>
                        </Card.Header>
                        <Card.Body>
                          <div className="d-grid gap-2">
                            <Button variant="outline-primary" size="sm">
                              <i className="fas fa-search me-2"></i>
                              Search Patient
                            </Button>
                            <Button variant="outline-success" size="sm">
                              <i className="fas fa-prescription-bottle-alt me-2"></i>
                              Write Prescription
                            </Button>
                            <Button variant="outline-info" size="sm">
                              <i className="fas fa-file-medical-alt me-2"></i>
                              Create Report
                            </Button>
                            <Button variant="outline-warning" size="sm">
                              <i className="fas fa-calendar-alt me-2"></i>
                              Schedule Surgery
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Tab>

              <Tab eventKey="patients" title="Patient Management">
                <div className="p-4">
                  <Row className="mb-4">
                    <Col>
                      <div className="d-flex justify-content-between align-items-center">
                        <h4 className="text-hospital-primary mb-0">Patient Management</h4>
                        <Button variant="primary">
                          <i className="fas fa-user-plus me-2"></i>
                          Add New Patient
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <div className="text-center py-5">
                        <i className="fas fa-users fa-4x text-muted mb-3"></i>
                        <h5 className="text-muted">Patient Management System</h5>
                        <p className="text-muted">
                          Search, view, and manage patient records, medical history, and treatment plans.
                        </p>
                        <Button variant="primary">Access Patient Database</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="appointments" title="Appointments">
                <div className="p-4">
                  <Row className="mb-4">
                    <Col>
                      <div className="d-flex justify-content-between align-items-center">
                        <h4 className="text-hospital-primary mb-0">Appointment Management</h4>
                        <Button variant="primary">
                          <i className="fas fa-calendar-plus me-2"></i>
                          Schedule Appointment
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <div className="text-center py-5">
                        <i className="fas fa-calendar-alt fa-4x text-muted mb-3"></i>
                        <h5 className="text-muted">Appointment Scheduler</h5>
                        <p className="text-muted">
                          View, schedule, reschedule, and manage patient appointments across all departments.
                        </p>
                        <Button variant="primary">Open Calendar</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="reports" title="Reports & Analytics">
                <div className="p-4">
                  <Row className="mb-4">
                    <Col>
                      <h4 className="text-hospital-primary mb-0">Reports & Analytics</h4>
                    </Col>
                  </Row>

                  <Row className="g-4">
                    <Col md={6}>
                      <Card className="border-0 shadow-sm">
                        <Card.Body className="text-center">
                          <div className="text-hospital-primary mb-3">
                            <i className="fas fa-chart-bar fa-3x"></i>
                          </div>
                          <h5>Patient Statistics</h5>
                          <p className="text-muted">View patient demographics, visit trends, and health outcomes.</p>
                          <Button variant="outline-primary">View Reports</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="border-0 shadow-sm">
                        <Card.Body className="text-center">
                          <div className="text-hospital-primary mb-3">
                            <i className="fas fa-chart-line fa-3x"></i>
                          </div>
                          <h5>Department Analytics</h5>
                          <p className="text-muted">
                            Analyze department performance, resource utilization, and efficiency.
                          </p>
                          <Button variant="outline-primary">View Analytics</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default StaffPortal
