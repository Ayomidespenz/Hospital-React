import { Card, Row, Col, Table, Badge, ListGroup, ProgressBar } from "react-bootstrap";

const DoctorDashboard = () => {
  // Mock data
  const stats = [
    { title: "Today's Appointments", value: "8", icon: "calendar-check", color: "primary" },
    { title: "Patients Waiting", value: "3", icon: "user-clock", color: "warning" },
    { title: "Prescriptions", value: "5", icon: "file-prescription", color: "success" },
    { title: "Lab Results", value: "2", icon: "flask", color: "info" },
  ];

  const appointments = [
    { id: 1, time: "9:00 AM", patient: "John Doe", type: "Follow-up", status: "Confirmed" },
    { id: 2, time: "10:30 AM", patient: "Jane Smith", type: "Consultation", status: "Confirmed" },
    { id: 3, time: "2:00 PM", patient: "Robert Johnson", type: "Check-up", status: "Pending" },
  ];

  const tasks = [
    { id: 1, task: "Review lab results", priority: "High", progress: 70, dueTime: "11:00 AM" },
    { id: 2, task: "Complete discharge summary", priority: "Medium", progress: 30, dueTime: "3:00 PM" },
  ];

  return (
    <div className="doctor-dashboard">
      <Row className="g-4 mb-4">
        {stats.map((stat, index) => (
          <Col key={index} md={3} sm={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <div className={`icon-circle bg-${stat.color}-subtle text-${stat.color} mb-3`}>
                  <i className={`fas fa-${stat.icon} fa-2x`}></i>
                </div>
                <h3 className="mb-1">{stat.value}</h3>
                <p className="text-muted mb-0">{stat.title}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-white border-0">
              <h5 className="mb-0">Today's Appointments</h5>
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
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appt) => (
                      <tr key={appt.id}>
                        <td>{appt.time}</td>
                        <td>{appt.patient}</td>
                        <td>{appt.type}</td>
                        <td>
                          <Badge bg={appt.status === 'Confirmed' ? 'success' : 'warning'}>
                            {appt.status}
                          </Badge>
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
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-white border-0">
              <h5 className="mb-0">Tasks</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {tasks.map((task) => (
                  <ListGroup.Item key={task.id} className="border-0 px-0">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h6 className="mb-1">{task.task}</h6>
                        <small className="text-muted">Due: {task.dueTime}</small>
                      </div>
                      <Badge bg={task.priority === 'High' ? 'danger' : 'warning'}>
                        {task.priority}
                      </Badge>
                    </div>
                    <ProgressBar now={task.progress} variant="primary" className="mb-1" style={{ height: '4px' }} />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DoctorDashboard;