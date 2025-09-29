"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Table, Button, Badge, Form, InputGroup } from "react-bootstrap"

const BillingHistory = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock billing data
  const billingRecords = [
    {
      id: "INV-2025-001",
      date: "2025-01-05",
      service: "Cardiology Consultation",
      doctor: "Dr. Sarah Johnson",
      amount: 250.0,
      insurance: 200.0,
      patientPortion: 50.0,
      status: "Paid",
      dueDate: "2025-01-20",
    },
    {
      id: "INV-2025-002",
      date: "2025-01-03",
      service: "Chest X-Ray",
      doctor: "Dr. Michael Chen",
      amount: 150.0,
      insurance: 120.0,
      patientPortion: 30.0,
      status: "Paid",
      dueDate: "2025-01-18",
    },
    {
      id: "INV-2024-045",
      date: "2024-12-28",
      service: "Blood Test (CBC)",
      doctor: "Dr. Lisa Anderson",
      amount: 80.0,
      insurance: 64.0,
      patientPortion: 16.0,
      status: "Pending",
      dueDate: "2025-01-12",
    },
    {
      id: "INV-2024-044",
      date: "2024-12-20",
      service: "Lipid Panel",
      doctor: "Dr. Lisa Anderson",
      amount: 120.0,
      insurance: 96.0,
      patientPortion: 24.0,
      status: "Overdue",
      dueDate: "2025-01-05",
    },
    {
      id: "INV-2024-043",
      date: "2024-12-15",
      service: "Follow-up Consultation",
      doctor: "Dr. Sarah Johnson",
      amount: 180.0,
      insurance: 144.0,
      patientPortion: 36.0,
      status: "Paid",
      dueDate: "2024-12-30",
    },
  ]

  const filteredRecords = billingRecords.filter((record) => {
    const matchesSearch =
      record.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.doctor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || record.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return <Badge bg="success">{status}</Badge>
      case "pending":
        return <Badge bg="warning">{status}</Badge>
      case "overdue":
        return <Badge bg="danger">{status}</Badge>
      default:
        return <Badge bg="secondary">{status}</Badge>
    }
  }

  const totalOwed = billingRecords
    .filter((record) => record.status !== "Paid")
    .reduce((sum, record) => sum + record.patientPortion, 0)

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="h2 text-hospital-primary mb-1">
              <i className="fas fa-receipt me-2"></i>
              Billing History
            </h1>
            <p className="text-muted">View your medical bills, payments, and insurance claims</p>
          </Col>
        </Row>

        {/* Summary Cards */}
        <Row className="g-4 mb-4">
          <Col md={3}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="text-hospital-primary mb-2">
                  <i className="fas fa-dollar-sign fa-2x"></i>
                </div>
                <h5 className="text-hospital-primary">Total Owed</h5>
                <p className="h3 mb-0 text-danger">${totalOwed.toFixed(2)}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="text-success mb-2">
                  <i className="fas fa-check-circle fa-2x"></i>
                </div>
                <h5 className="text-hospital-primary">Paid Bills</h5>
                <p className="h3 mb-0 text-success">
                  {billingRecords.filter((record) => record.status === "Paid").length}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="text-warning mb-2">
                  <i className="fas fa-clock fa-2x"></i>
                </div>
                <h5 className="text-hospital-primary">Pending</h5>
                <p className="h3 mb-0 text-warning">
                  {billingRecords.filter((record) => record.status === "Pending").length}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="text-danger mb-2">
                  <i className="fas fa-exclamation-triangle fa-2x"></i>
                </div>
                <h5 className="text-hospital-primary">Overdue</h5>
                <p className="h3 mb-0 text-danger">
                  {billingRecords.filter((record) => record.status === "Overdue").length}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Search and Filter */}
        <Row className="mb-4">
          <Col md={8}>
            <InputGroup>
              <InputGroup.Text>
                <i className="fas fa-search"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search by invoice ID, service, or doctor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <Form.Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Billing Table */}
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white border-0 py-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0 text-hospital-primary">Billing Records</h5>
              <div className="d-flex gap-2">
                <Button variant="outline-success" size="sm">
                  <i className="fas fa-credit-card me-2"></i>
                  Pay Outstanding
                </Button>
                <Button variant="outline-primary" size="sm">
                  <i className="fas fa-download me-2"></i>
                  Export
                </Button>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Invoice ID</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Doctor</th>
                    <th>Total Amount</th>
                    <th>Insurance</th>
                    <th>Your Portion</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.length > 0 ? (
                    filteredRecords.map((record) => (
                      <tr key={record.id}>
                        <td className="fw-bold">{record.id}</td>
                        <td>{record.date}</td>
                        <td>{record.service}</td>
                        <td>{record.doctor}</td>
                        <td>${record.amount.toFixed(2)}</td>
                        <td className="text-success">${record.insurance.toFixed(2)}</td>
                        <td className="fw-bold">${record.patientPortion.toFixed(2)}</td>
                        <td>{record.dueDate}</td>
                        <td>{getStatusBadge(record.status)}</td>
                        <td>
                          <div className="d-flex gap-1">
                            <Button variant="outline-primary" size="sm" title="View Details">
                              <i className="fas fa-eye"></i>
                            </Button>
                            <Button variant="outline-success" size="sm" title="Download Invoice">
                              <i className="fas fa-download"></i>
                            </Button>
                            {record.status !== "Paid" && (
                              <Button variant="outline-warning" size="sm" title="Pay Now">
                                <i className="fas fa-credit-card"></i>
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="text-center py-4">
                        <i className="fas fa-search fa-2x text-muted mb-2"></i>
                        <p className="text-muted mb-0">No billing records found matching your search criteria</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Payment Options */}
        {totalOwed > 0 && (
          <Card className="border-0 shadow-sm mt-4">
            <Card.Header className="bg-light border-0 py-3">
              <h5 className="mb-0 text-hospital-primary">
                <i className="fas fa-credit-card me-2"></i>
                Payment Options
              </h5>
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col md={8}>
                  <p className="mb-2">
                    <strong>Outstanding Balance: ${totalOwed.toFixed(2)}</strong>
                  </p>
                  <p className="text-muted mb-0">
                    You can pay your outstanding balance using credit card, debit card, or bank transfer.
                  </p>
                </Col>
                <Col md={4} className="text-end">
                  <Button variant="success" size="lg">
                    <i className="fas fa-credit-card me-2"></i>
                    Pay Now
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  )
}

export default BillingHistory
