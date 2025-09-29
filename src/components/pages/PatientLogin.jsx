"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"

const PatientLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate login process
    setShowAlert(true)
    setTimeout(() => {
      window.location.href = "/patient-portal"
    }, 1500)
  }

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <i className="fas fa-user-circle fa-3x text-hospital-primary mb-3"></i>
                  <h2 className="h3 text-hospital-primary">Patient Login</h2>
                  <p className="text-muted">Access your medical records and appointments</p>
                </div>

                {showAlert && (
                  <Alert variant="success" className="text-center">
                    <i className="fas fa-check-circle me-2"></i>
                    Login successful! Redirecting to your dashboard...
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check type="checkbox" label="Remember me" />
                    <Link to="#" className="text-hospital-primary text-decoration-none">
                      Forgot Password?
                    </Link>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-100 mb-3">
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Sign In
                  </Button>

                  <div className="text-center">
                    <p className="text-muted">
                      Don't have an account?{" "}
                      <Link to="/patient/register" className="text-hospital-primary text-decoration-none">
                        Register here
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

export default PatientLogin
