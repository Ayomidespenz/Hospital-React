"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert, Tab, Tabs } from "react-bootstrap"

const PatientProfile = () => {
  const [activeTab, setActiveTab] = useState("personal")
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

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    dateOfBirth: "1985-06-15",
    gender: "male",
    address: "123 Main Street, Anytown, ST 12345",
    emergencyContact: "Jane Doe",
    emergencyPhone: "(555) 987-6543",
  })

  const [medicalInfo, setMedicalInfo] = useState({
    bloodType: "O+",
    allergies: "Penicillin, Shellfish",
    chronicConditions: "Hypertension",
    currentMedications: "Lisinopril 10mg daily",
    insuranceProvider: "Blue Cross Blue Shield",
    insuranceId: "BC123456789",
    primaryPhysician: "Dr. Sarah Johnson",
  })

  const [preferences, setPreferences] = useState({
    preferredLanguage: "English",
    communicationMethod: "email",
    appointmentReminders: true,
    labResultNotifications: true,
    marketingEmails: false,
  })

  const handlePersonalChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleMedicalChange = (e) => {
    setMedicalInfo({
      ...medicalInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handlePreferencesChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setPreferences({
      ...preferences,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <div style={{ marginTop: "76px", minHeight: "100vh", backgroundColor: "var(--hospital-background)" }}>
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="h2 mb-1" style={gradientText}>
              <i className="fas fa-user-edit me-2"></i>
              Patient Profile
            </h1>
            <p style={{...gradientText, opacity: 0.8}}>Manage your personal information and preferences</p>
          </Col>
        </Row>

        {showAlert && (
          <Alert variant="success" className="mb-4">
            <i className="fas fa-check-circle me-2"></i>
            Profile updated successfully!
          </Alert>
        )}

        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="border-bottom"
              style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
            >
              <Tab eventKey="personal" title={
                <span style={gradientText}>Personal Information</span>
              }>
                <div className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={gradientText}>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={personalInfo.firstName}
                            onChange={handlePersonalChange}
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
                            value={personalInfo.lastName}
                            onChange={handlePersonalChange}
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
                            value={personalInfo.email}
                            onChange={handlePersonalChange}
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
                            value={personalInfo.phone}
                            onChange={handlePersonalChange}
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
                            value={personalInfo.dateOfBirth}
                            onChange={handlePersonalChange}
                            required
                            style={{borderColor: '#5d6f8a'}}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={gradientText}>Gender</Form.Label>
                          <Form.Select name="gender" value={personalInfo.gender} onChange={handlePersonalChange} style={{borderColor: '#5d6f8a'}}>
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
                        value={personalInfo.address}
                        onChange={handlePersonalChange}
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
                            value={personalInfo.emergencyContact}
                            onChange={handlePersonalChange}
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
                            value={personalInfo.emergencyPhone}
                            onChange={handlePersonalChange}
                            required
                            style={{borderColor: '#5d6f8a'}}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button type="submit" variant="primary" size="lg">
                      <i className="fas fa-save me-2"></i>
                      Save Changes
                    </Button>
                  </Form>
                </div>
              </Tab>

              <Tab eventKey="medical" title={
                <span style={gradientText}>Medical Information</span>
              }>
                <div className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={gradientText}>Blood Type</Form.Label>
                          <Form.Select name="bloodType" value={medicalInfo.bloodType} onChange={handleMedicalChange} style={{borderColor: '#5d6f8a'}}>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={gradientText}>Primary Physician</Form.Label>
                          <Form.Control
                            type="text"
                            name="primaryPhysician"
                            value={medicalInfo.primaryPhysician}
                            onChange={handleMedicalChange}
                            style={{borderColor: '#5d6f8a'}}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label style={gradientText}>Allergies</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="allergies"
                        value={medicalInfo.allergies}
                        onChange={handleMedicalChange}
                        placeholder="List any known allergies..."
                        style={{borderColor: '#5d6f8a'}}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label style={gradientText}>Chronic Conditions</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="chronicConditions"
                        value={medicalInfo.chronicConditions}
                        onChange={handleMedicalChange}
                        placeholder="List any chronic medical conditions..."
                        style={{borderColor: '#5d6f8a'}}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label style={gradientText}>Current Medications</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="currentMedications"
                        value={medicalInfo.currentMedications}
                        onChange={handleMedicalChange}
                        placeholder="List current medications with dosages..."
                        style={{borderColor: '#5d6f8a'}}
                      />
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={gradientText}>Insurance Provider</Form.Label>
                          <Form.Control
                            type="text"
                            name="insuranceProvider"
                            value={medicalInfo.insuranceProvider}
                            onChange={handleMedicalChange}
                            style={{borderColor: '#5d6f8a'}}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={gradientText}>Insurance ID</Form.Label>
                          <Form.Control
                            type="text"
                            name="insuranceId"
                            value={medicalInfo.insuranceId}
                            onChange={handleMedicalChange}
                            style={{borderColor: '#5d6f8a'}}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button type="submit" variant="primary" size="lg">
                      <i className="fas fa-save me-2"></i>
                      Save Medical Information
                    </Button>
                  </Form>
                </div>
              </Tab>

              <Tab eventKey="preferences" title={
                <span style={gradientText}>Preferences</span>
              }>
                <div className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={gradientText}>Preferred Language</Form.Label>
                          <Form.Select
                            name="preferredLanguage"
                            value={preferences.preferredLanguage}
                            onChange={handlePreferencesChange}
                            style={{borderColor: '#5d6f8a'}}
                          >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={gradientText}>Preferred Communication Method</Form.Label>
                          <Form.Select
                            name="communicationMethod"
                            value={preferences.communicationMethod}
                            onChange={handlePreferencesChange}
                            style={{borderColor: '#5d6f8a'}}
                          >
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="sms">SMS</option>
                            <option value="mail">Mail</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <h6 className="text-hospital-primary mb-3" style={gradientText}>Notification Preferences</h6>

                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        name="appointmentReminders"
                        checked={preferences.appointmentReminders}
                        onChange={handlePreferencesChange}
                        label="Receive appointment reminders"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        name="labResultNotifications"
                        checked={preferences.labResultNotifications}
                        onChange={handlePreferencesChange}
                        label="Receive lab result notifications"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Check
                        type="checkbox"
                        name="marketingEmails"
                        checked={preferences.marketingEmails}
                        onChange={handlePreferencesChange}
                        label="Receive marketing emails and health tips"
                      />
                    </Form.Group>

                    <Button type="submit" variant="primary" size="lg">
                      <i className="fas fa-save me-2"></i>
                      Save Preferences
                    </Button>
                  </Form>
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default PatientProfile
