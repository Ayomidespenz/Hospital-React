import { Card, Table, Badge, Row, Col } from "react-bootstrap";

const LabTechDashboard = () => {
  const tests = [
    { id: 1, patient: "John Doe", test: "CBC", status: "In Progress", priority: "High" },
    { id: 2, patient: "Jane Smith", test: "Lipid Panel", status: "Pending", priority: "Normal" },
  ];

  const stats = [
    { title: "Tests Today", value: "24", icon: "vial", color: "info" },
    { title: "Pending Results", value: "8", icon: "clock", color: "warning" },
    { title: "Completed", value: "16", icon: "check-circle", color: "success" },
    { title: "Critical", value: "2", icon: "exclamation-triangle", color: "danger" },
  ];

  return (
    <div className="lab-tech-dashboard">
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
              <h5 className="mb-0">Test Queue</h5>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table hover className="mb-0">
                  <thead>
                    <tr>
                      <th>Test ID</th>
                      <th>Patient</th>
                      <th>Test Type</th>
                      <th>Priority</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tests.map((test) => (
                      <tr key={test.id}>
                        <td>#T-{test.id.toString().padStart(4, '0')}</td>
                        <td>{test.patient}</td>
                        <td>{test.test}</td>
                        <td>
                          <Badge bg={test.priority === 'High' ? 'danger' : 'primary'}>
                            {test.priority}
                          </Badge>
                        </td>
                        <td>
                          <Badge bg={test.status === 'In Progress' ? 'warning' : 'secondary'}>
                            {test.status}
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
              <h5 className="mb-0">Lab Overview</h5>
            </Card.Header>
            <Card.Body>
              <div className="text-center mb-4">
                <div className="position-relative d-inline-block mb-3">
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <h3 className="mb-0">85%</h3>
                    <small className="text-muted">Efficiency</small>
                  </div>
                  <svg width="120" height="120" viewBox="0 0 36 36" className="d-block mx-auto">
                    <circle cx="18" cy="18" r="16" fill="none" className="circle-bg" strokeWidth="2" stroke="#e9ecef"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" className="circle" strokeWidth="2" stroke="#0d6efd" strokeLinecap="round" strokeDasharray="85,100"></circle>
                  </svg>
                </div>
              </div>
              <div className="d-grid gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className={`icon-circle bg-${stat.color}-subtle text-${stat.color} me-3`}>
                        <i className={`fas fa-${stat.icon}`}></i>
                      </div>
                      <div>
                        <h6 className="mb-0">{stat.title}</h6>
                      </div>
                    </div>
                    <span className="fw-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LabTechDashboard;