import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/pages/Navigation" // Updated path
import HomePage from "./components/pages/HomePage"
import PatientPortal from "./components/pages/PatientPortal" 
import StaffPortal from "./components/pages/StaffPortal"
import PatientLogin from "./components/pages/PatientLogin"
import PatientRegister from "./components/pages/PatientRegister"
import StaffLogin from "./components/pages/StaffLogin"
import AppointmentBooking from "./components/pages/AppointmentBooking"
import MedicalRecords from "./components/pages/MedicalRecords"
import BillingHistory from "./components/pages/BillingHistory"
import PatientProfile from "./components/pages/PatientProfile"
import Footer from "./components/pages/Footer"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main style={{ paddingTop: "76px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/patient-portal" element={<PatientPortal />} />
            <Route path="/staff-portal" element={<StaffPortal />} />
            <Route path="/patient/login" element={<PatientLogin />} />
            <Route path="/patient/register" element={<PatientRegister />} />
            <Route path="/staff/login" element={<StaffLogin />} />
            <Route path="/patient/appointments" element={<AppointmentBooking />} />
            <Route path="/patient/records" element={<MedicalRecords />} />
            <Route path="/patient/billing" element={<BillingHistory />} />
            <Route path="/patient/profile" element={<PatientProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App