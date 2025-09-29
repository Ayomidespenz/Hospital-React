"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Table, Button, Badge, Form, InputGroup } from "react-bootstrap"

const MedicalRecords = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  // Mock data for medical records
  const medicalRecords = [
    {
      id: 1,
      date: "2025-01-05",
      type: "Lab Results",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      description: "Complete Blood Count (CBC)",
      status: "Normal",
      file: "blood_test_010525.pdf",
    },
    {
      id: 2,
      date: "2025-01-03",
      type: "Imaging",
      doctor: "Dr. Michael Chen",
      department: "Radiology",
      description: "Chest X-Ray",
      status: "Normal",
      file: "chest_xray_010325.pdf",
    },
    {
      id: 3,
      date: "2024-12-28",
      type: "Consultation",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      description: "Follow-up consultation for hypertension",
      status: "Ongoing Treatment",
      file: "consultation_122824.pdf",
    },
    {
      id: 4,
      date: "2024-12-20",
      type: "Lab Results",
      doctor: "Dr. Lisa Anderson",
      department: "Internal Medicine",
      description: "Lipid Panel",
      status: "Elevated",
      file: "lipid_panel_122024.pdf",
    },
    {
      id: 5,
      date: "2024-12-15",
      type: "Prescription",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      description: "Lisinopril 10mg - Blood pressure medication",
      status: "Active",
      file: "prescription_121524.pdf",
    },
  ]

  const filteredRecords = medicalRecords.filter((record) => {
    const matchesSearch =
      record.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.department.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterType === "all" || record.type.toLowerCase() === filterType.toLowerCase()

    return matchesSearch && matchesFilter
  })

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "normal":
        return <Badge bg="success">{status}</Badge>
      case "elevated":
        return <Badge bg="warning">{status}</Badge>
      case "ongoing treatment":
        return <Badge bg="info">{status}</Badge>
      case "active":
        return <Badge bg="primary">{status}</Badge>
      default:
        return <Badge bg="secondary">{status}</Badge>
    }
  }

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="h2 text-hospital-primary mb-1">
              <i className="fas fa-file-medical me-2"></i>
              Medical Records
            </h1>
            <p className="text-muted">Access and download your medical history and test results</p>
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
                placeholder="Search records by description, doctor, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <Form.Select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="all">All Records</option>
              <option value="lab results">Lab Results</option>
              <option value="imaging">Imaging</option>
              <option value="consultation">Consultations</option>
              <option value="prescription">Prescriptions</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Medical Records Table */}
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white border-0 py-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0 text-hospital-primary">Your Medical Records</h5>
              <Button variant="outline-primary" size="sm">
                <i className="fas fa-download me-2"></i>
                Export All
              </Button>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Doctor</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.length > 0 ? (
                    filteredRecords.map((record) => (
                      <tr key={record.id}>
                        <td>{record.date}</td>
                        <td>
                          <Badge bg="light" text="dark">
                            {record.type}
                          </Badge>
                        </td>
                        <td>{record.description}</td>
                        <td>{record.doctor}</td>
                        <td>{record.department}</td>
                        <td>{getStatusBadge(record.status)}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button variant="outline-primary" size="sm">
                              <i className="fas fa-eye"></i>
                            </Button>
                            <Button variant="outline-success" size="sm">
                              <i className="fas fa-download"></i>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4">
                        <i className="fas fa-search fa-2x text-muted mb-2"></i>
                        <p className="text-muted mb-0">No records found matching your search criteria</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Health Summary Cards */}
        <Row className="mt-5">
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="text-hospital-primary mb-2">
                  <i className="fas fa-flask fa-2x"></i>
                </div>
                <h5 className="text-hospital-primary">Lab Results</h5>
                <p className="h3 mb-1">12</p>
                <p className="text-muted small mb-0">Total Tests</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="text-hospital-primary mb-2">
                  <i className="fas fa-x-ray fa-2x"></i>
                </div>
                <h5 className="text-hospital-primary">Imaging</h5>
                <p className="h3 mb-1">5</p>
                <p className="text-muted small mb-0">Scans & X-rays</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="text-hospital-primary mb-2">
                  <i className="fas fa-pills fa-2x"></i>
                </div>
                <h5 className="text-hospital-primary">Prescriptions</h5>
                <p className="h3 mb-1">3</p>
                <p className="text-muted small mb-0">Active Medications</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MedicalRecords
