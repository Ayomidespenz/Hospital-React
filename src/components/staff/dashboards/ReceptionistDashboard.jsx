import { Card, Table, Badge, Button, ListGroup, Row, Col } from "react-bootstrap";

const ReceptionistDashboard = () => {
  const appointments = [
    { id: 1, time: "9:00 AM", patient: "New Patient", type: "Registration", status: "Pending" },
    { id: 2, time: "10:00 AM", patient: "Insurance Update", type: "Follow-up", status: "In Progress" },
  ];

  const checkIns = [
    { id: 1, patient: "Michael Brown", doctor: "Dr. Smith", time: "9:15 AM", status: "Checked In" },
    { id: 2, patient: "Sarah Johnson", doctor: "Dr. Lee", time: "10:30 AM", status: "Waiting" },
  ];

  return (
    <div className="receptionist-dashboard">
      <Row className="g-4">
        <Col lg={8}>
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-white border-0 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Today's Schedule</h5>
              <Button size="sm" variant="outline-primary">
                <i className="fas fa-plus me-1"></i> New Appointment
              </Button>
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
                          <Badge bg={appt.status === 'In Progress' ? 'info' : 'warning'}>
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
          <Card className="shadow-sm mb-4">
            <Card.Header className="bg-white border-0">
              <h5 className="mb-0">Check-ins</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {checkIns.map((checkIn) => (
                  <ListGroup.Item key={checkIn.id} className="border-0 px-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-0">{checkIn.patient}</h6>
                        <small className="text-muted">{checkIn.doctor}</small>
                      </div>
                      <div className="text-end">
                        <div className="mb-1">{checkIn.time}</div>
                        <Badge bg={checkIn.status === 'Checked In' ? 'success' : 'warning'}>
                          {checkIn.status}
                        </Badge>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Header className="bg-white border-0">
              <h5 className="mb-0">Quick Actions</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" className="mb-2">
                  <i className="fas fa-user-plus me-2"></i> New Patient
                </Button>
                <Button variant="outline-success" className="mb-2">
                  <i className="fas fa-calendar-plus me-2"></i> Schedule Appointment
                </Button>
                <Button variant="outline-info">
                  <i className="fas fa-file-invoice-dollar me-2"></i> Process Payment
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReceptionistDashboard;