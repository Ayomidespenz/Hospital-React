"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Table, Button, Badge, Form, InputGroup } from "react-bootstrap"

const MedicalRecords = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  // Gradient text style
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

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
    const badgeStyle = {
      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
      border: 'none',
      color: 'white',
      fontWeight: '500',
      padding: '0.35em 0.65em',
      borderRadius: '0.25rem'
    };

    return <span style={badgeStyle}>{status}</span>
  }

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="h2 mb-1" style={gradientText}>
              <i className="fas fa-file-medical me-2"></i>
              Medical Records
            </h1>
            <p style={{...gradientText, opacity: 0.8}}>Access and download your medical history and test results</p>
          </Col>
        </Row>

        {/* Search and Filter */}
        <Row className="mb-4">
          <Col md={8}>
            <InputGroup>
              <InputGroup.Text style={{...gradientText, borderColor: '#5d6f8a'}}>
                <i className="fas fa-search"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search records by description, doctor, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{borderColor: '#5d6f8a'}}
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <Form.Select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              style={{borderColor: '#5d6f8a'}}
            >
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
              <h5 className="mb-0" style={gradientText}>Your Medical Records</h5>
              <Button 
                variant="outline-primary" 
                size="sm"
                style={{
                  borderColor: '#5d6f8a',
                  ...gradientText
                }}
              >
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
                    <th style={gradientText}>Date</th>
                    <th style={gradientText}>Type</th>
                    <th style={gradientText}>Description</th>
                    <th style={gradientText}>Doctor</th>
                    <th style={gradientText}>Department</th>
                    <th style={gradientText}>Status</th>
                    <th style={gradientText}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.length > 0 ? (
                    filteredRecords.map((record) => (
                      <tr key={record.id}>
                        <td style={gradientText}>{record.date}</td>
                        <td>
                          <span style={{
                            ...gradientText,
                            background: 'rgba(93, 111, 138, 0.1)',
                            padding: '0.25em 0.65em',
                            borderRadius: '0.25rem',
                            display: 'inline-block'
                          }}>
                            {record.type}
                          </span>
                        </td>
                        <td style={gradientText}>{record.description}</td>
                        <td style={gradientText}>{record.doctor}</td>
                        <td style={gradientText}>{record.department}</td>
                        <td>{getStatusBadge(record.status)}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button 
                              variant="outline-primary" 
                              size="sm"
                              style={{
                                borderColor: '#5d6f8a',
                                ...gradientText
                              }}
                            >
                              <i className="fas fa-eye"></i>
                            </Button>
                            <Button 
                              variant="outline-success" 
                              size="sm"
                              style={{
                                borderColor: '#5d6f8a',
                                ...gradientText
                              }}
                            >
                              <i className="fas fa-download"></i>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4">
                        <i className="fas fa-search fa-2x mb-2" style={gradientText}></i>
                        <p style={gradientText}>No records found matching your search criteria</p>
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
                <div className="mb-2" style={gradientText}>
                  <i className="fas fa-flask fa-2x"></i>
                </div>
                <h5 style={gradientText}>Lab Results</h5>
                <p className="h3 mb-1" style={gradientText}>12</p>
                <p style={{...gradientText, opacity: 0.8, fontSize: '0.875rem'}}>Total Tests</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-2" style={gradientText}>
                  <i className="fas fa-x-ray fa-2x"></i>
                </div>
                <h5 style={gradientText}>Imaging</h5>
                <p className="h3 mb-1" style={gradientText}>5</p>
                <p style={{...gradientText, opacity: 0.8, fontSize: '0.875rem'}}>Scans & X-rays</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-2" style={gradientText}>
                  <i className="fas fa-pills fa-2x"></i>
                </div>
                <h5 style={gradientText}>Prescriptions</h5>
                <p className="h3 mb-1" style={gradientText}>3</p>
                <p style={{...gradientText, opacity: 0.8, fontSize: '0.875rem'}}>Active Medications</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MedicalRecords
