import { Card, Row, Col, ListGroup } from "react-bootstrap";

const AdminDashboard = () => {
  const metrics = [
    { title: "Total Staff", value: "42", change: "+2%", trend: "up" },
    { title: "Monthly Revenue", value: "$124,560", change: "+5.3%", trend: "up" },
    { title: "Patient Satisfaction", value: "94%", change: "+1.2%", trend: "up" },
    { title: "Available Beds", value: "18/120", change: "-3", trend: "down" },
  ];

  const alerts = [
    { id: 1, type: "warning", message: "Low inventory for face masks", time: "2 hours ago" },
    { id: 2, type: "info", message: "New software update available", time: "1 day ago" },
  ];

  return (
    <div className="admin-dashboard">
      <Row className="g-4">
        <Col lg={8}>
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-white border-0">
              <h5 className="mb-0">Key Metrics</h5>
            </Card.Header>
            <Card.Body>
              <Row className="g-4">
                {metrics.map((metric, index) => (
                  <Col key={index} md={6}>
                    <Card className="border-0 shadow-sm h-100">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="text-muted mb-1">{metric.title}</h6>
                            <h3 className="mb-0">{metric.value}</h3>
                          </div>
                          <div className={`bg-${metric.trend === 'up' ? 'success' : 'danger'}-subtle p-3 rounded`}>
                            <i className={`fas fa-arrow-${metric.trend} text-${metric.trend === 'up' ? 'success' : 'danger'}`}></i>
                            <span className="ms-1">{metric.change}</span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-white border-0">
              <h5 className="mb-0">System Alerts</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {alerts.map((alert) => (
                  <ListGroup.Item key={alert.id} className="border-0 px-0">
                    <div className="d-flex">
                      <div className={`icon-circle bg-${alert.type}-subtle text-${alert.type} me-3`}>
                        <i className={`fas fa-${alert.type === 'warning' ? 'exclamation-triangle' : 'info-circle'}`}></i>
                      </div>
                      <div>
                        <p className="mb-1">{alert.message}</p>
                        <small className="text-muted">{alert.time}</small>
                      </div>
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

export default AdminDashboard;