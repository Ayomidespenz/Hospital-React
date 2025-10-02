import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/pages/Navigation" 
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
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Services from "./components/pages/Services"
import Doctors from "./components/pages/Doctors"
import Footer from "./components/pages/Footer"

// Import service detail pages
import GynecologicalCare from "./components/pages/services/GynecologicalCare"
import PrenatalPostnatalCare from "./components/pages/services/PrenatalPostnatalCare"
import FertilityServices from "./components/pages/services/FertilityServices"
import MinimallyInvasiveSurgery from "./components/pages/services/MinimallyInvasiveSurgery"
import WellWomanExams from "./components/pages/services/WellWomanExams"
import ContraceptionFamilyPlanning from "./components/pages/services/ContraceptionFamilyPlanning"
import LaboratoryServices from "./components/pages/services/LaboratoryServices"
import InternalMedicine from "./components/pages/services/InternalMedicine"
import Ophthalmology from "./components/pages/services/Ophthalmology"

// Import department pages
import EmergencyCare from "./components/pages/departments/EmergencyCare"
import GeneralSurgery from "./components/pages/departments/GeneralSurgery"
import PediatricsSurgery from "./components/pages/departments/PediatricsSurgery"
import GeriatricsSurgery from "./components/pages/departments/GeriatricsSurgery"
import Orthopedics from "./components/pages/departments/Orthopedics"
import Neurology from "./components/pages/departments/Neurology"
import Radiology from "./components/pages/departments/Radiology"
import GynecologyObstetrics from "./components/pages/departments/GynecologyObstetrics"

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main style={{ paddingTop: "76px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>}/>
            
            {/* Services Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/emergency-care" element={<EmergencyCare />} />
            <Route path="/services/surgery" element={<GeneralSurgery />} />
            <Route path="/services/gynecological-care" element={<GynecologicalCare />} />
            <Route path="/services/prenatal-postnatal-care" element={<PrenatalPostnatalCare />} />
            <Route path="/services/fertility-services" element={<FertilityServices />} />
            <Route path="/services/minimally-invasive-surgery" element={<MinimallyInvasiveSurgery />} />
            <Route path="/services/well-woman-exams" element={<WellWomanExams />} />
            <Route path="/services/contraception-family-planning" element={<ContraceptionFamilyPlanning />} />
            
            {/* Departments Routes */}
            <Route path="/departments/internal-medicine" element={<InternalMedicine />} />
            <Route path="/departments/general-surgery" element={<GeneralSurgery />} />
            <Route path="/departments/pediatrics-surgery" element={<PediatricsSurgery />} />
            <Route path="/departments/geriatrics-surgery" element={<GeriatricsSurgery />} />
            <Route path="/departments/orthopedics" element={<Orthopedics />} />
            <Route path="/departments/neurology" element={<Neurology />} />
            <Route path="/departments/radiology" element={<Radiology />} />
            <Route path="/departments/ophthalmology" element={<Ophthalmology />} />
            <Route path="/departments/gynecology-obstetrics" element={<GynecologyObstetrics />} />
            
            {/* Patient Portal Routes */}
            <Route path="/patient/login" element={<PatientLogin />} />
            <Route path="/patient/register" element={<PatientRegister />} />
            <Route path="/patient-portal" element={<PatientPortal />}>
              <Route path="appointment-booking" element={<AppointmentBooking />} />
              <Route path="medical-records" element={<MedicalRecords />} />
              <Route path="billing-history" element={<BillingHistory />} />
              <Route path="profile" element={<PatientProfile />} />
            </Route>
            
            <Route path="/staff/login" element={<StaffLogin />} />
            <Route path="/staff/portal" element={<StaffPortal />} />
            
            {/* 404 Route - Keep this last */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;