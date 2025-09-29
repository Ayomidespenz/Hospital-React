"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    setShowAlert(true)
    setTimeout(() => {
      window.location.href = "/patient/login"
    }, 2000)
  }

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <Card className="shadow border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <i className="fas fa-user-plus fa-3x mb-3" style={gradientText}></i>
                  <h2 className="h3" style={gradientText}>Patient Registration</h2>
                  <p style={{...gradientText, opacity: 0.8}}>Create your account to access our services</p>
                </div>

                {showAlert && (
                  <Alert variant="success" className="text-center">
                    <i className="fas fa-check-circle me-2"></i>
                    Registration successful! Redirecting to login page...
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={gradientText}>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter first name"
                          required
                          style={{borderColor: '#5d6f8a'}}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={gradientText}>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter last name"
                          required
                          style={{borderColor: '#5d6f8a'}}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={gradientText}>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          required
                          style={{borderColor: '#5d6f8a'}}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={gradientText}>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          required
                          style={{borderColor: '#5d6f8a'}}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={gradientText}>Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                          style={{borderColor: '#5d6f8a'}}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={gradientText}>Gender</Form.Label>
                        <Form.Select 
                          name="gender" 
                          value={formData.gender} 
                          onChange={handleChange} 
                          required
                          style={{borderColor: '#5d6f8a'}}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label style={gradientText}>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                      required
                      style={{borderColor: '#5d6f8a'}}
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={gradientText}>Emergency Contact Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleChange}
                          placeholder="Emergency contact name"
                          required
                          style={{borderColor: '#5d6f8a'}}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={gradientText}>Emergency Contact Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleChange}
                          placeholder="Emergency contact phone"
                          required
                          style={{borderColor: '#5d6f8a'}}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={gradientText}>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Create password"
                          required
                          style={{borderColor: '#5d6f8a'}}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label style={gradientText}>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm password"
                          required
                          style={{borderColor: '#5d6f8a'}}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Check 
                      type="checkbox" 
                      label={
                        <span style={gradientText}>I agree to the Terms of Service and Privacy Policy</span>
                      } 
                      required 
                    />
                  </Form.Group>

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
                    <i className="fas fa-user-plus me-2"></i>
                    Create Account
                  </Button>

                  <div className="text-center">
                    <p style={{...gradientText, opacity: 0.9}}>
                      Already have an account?{" "}
                      <Link 
                        to="/patient/login" 
                        className="text-decoration-none"
                        style={{
                          ...gradientText,
                          textDecoration: 'underline !important'
                        }}
                      >
                        Sign in here
                      </Link>
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

export default PatientRegister
