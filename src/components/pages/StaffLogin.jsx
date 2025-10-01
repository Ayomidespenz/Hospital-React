"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"

const StaffLogin = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    password: "",
    role: "",
  })
  const [showAlert, setShowAlert] = useState(false)

  // Gradient text style
  const gradientText = {
    background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => {
      window.location.href = "/staff-portal"
    }, 1000)
  }

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <i className="fas fa-user-md fa-3x mb-3" style={gradientText}></i>
                  <h2 className="h3" style={gradientText}>Staff Login</h2>
                  <p style={{...gradientText, fontSize: '1rem'}}>Access the hospital management system</p>
                </div>

                {showAlert && (
                  <Alert variant="success" className="text-center">
                    <i className="fas fa-check-circle me-2"></i>
                    Login successful! Redirecting to staff dashboard...
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label style={gradientText}>Employee ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="employeeId"
                      value={formData.employeeId}
                      onChange={handleChange}
                      placeholder="Enter your employee ID"
                      required
                      style={{borderColor: '#5d6f8a'}}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={gradientText}>Role</Form.Label>
                    <Form.Select 
                      name="role" 
                      value={formData.role} 
                      onChange={handleChange} 
                      required
                      style={{borderColor: '#5d6f8a'}}
                    >
                      <option value="" disabled>Select your role</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="admin">Administrator</option>
                      <option value="receptionist">Receptionist</option>
                      <option value="technician">Technician</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={gradientText}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      style={{borderColor: '#5d6f8a'}}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check type="checkbox" label={<span style={gradientText}>Remember me</span>} />
                    <Link to="#" className="text-decoration-none" style={gradientText}>
                      Forgot Password?
                    </Link>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-100 mb-3"
                    style={{
                      background: 'linear-gradient(45deg, rgb(93, 111, 138), #0dcaf0)',
                      border: 'none',
                      fontWeight: '500'
                    }}
                  >
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Sign In
                  </Button>

                  <div className="text-center">
                    <p className="small" style={gradientText}>
                      For technical support, contact IT at{" "}
                      <a 
                        href="tel:+234-813-342-2517" 
                        className="text-decoration-none"
                        style={{
                          ...gradientText,
                          textDecoration: 'underline !important'
                        }}
                      >
                        (+234) 813-342-2517
                      </a>
                    </p>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StaffLogin
