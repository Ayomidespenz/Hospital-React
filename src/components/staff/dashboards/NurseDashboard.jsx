import { Card, Row, Col, Table, Badge, ListGroup } from "react-bootstrap";

const NurseDashboard = () => {
  const patients = [
    { id: 1, name: "John Doe", room: "201", condition: "Stable", lastChecked: "30 mins ago" },
    { id: 2, name: "Jane Smith", room: "205", condition: "Needs Attention", lastChecked: "15 mins ago" },
  ];

  const medications = [
    { id: 1, patient: "John Doe", medication: "Ibuprofen", dosage: "400mg", time: "10:00 AM" },
    { id: 2, patient: "Jane Smith", medication: "Paracetamol", dosage: "500mg", time: "11:30 AM" },
  ];

  const stats = [
    { title: "Patients Assigned", value: "12", icon: "user-injured", color: "primary" },
    { title: "Medications Due", value: "4", icon: "pills", color: "danger" },
    { title: "Vitals Checked", value: "8/12", icon: "heartbeat", color: "success" },
    { title: "Alerts", value: "2", icon: "bell", color: "warning" },
  ];

  return (
    <div className="nurse-dashboard">
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
              <h5 className="mb-0">Patient Roster</h5>
            </Card.Header>
            <Card.Body>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Room</th>
                    <th>Condition</th>
                    <th>Last Checked</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar-sm bg-light rounded-circle me-2">
                            <span className="avatar-title bg-soft-primary text-primary">
                              {patient.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h6 className="mb-0">{patient.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>{patient.room}</td>
                      <td>
                        <Badge bg={patient.condition === 'Stable' ? 'success' : 'warning'}>
                          {patient.condition}
                        </Badge>
                      </td>
                      <td>{patient.lastChecked}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-white border-0">
              <h5 className="mb-0">Medication Schedule</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {medications.map((med) => (
                  <ListGroup.Item key={med.id} className="border-0 px-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-0">{med.medication}</h6>
                        <small className="text-muted">{med.patient} • {med.dosage}</small>
                      </div>
                      <Badge bg="primary">{med.time}</Badge>
                    </div>
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

export default NurseDashboard;