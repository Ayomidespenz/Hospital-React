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
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={< Contact/>}/>
            {/* Service Detail Routes */}
            <Route path="/services/gynecological-care" element={<GynecologicalCare />} />
            <Route path="/services/prenatal-postnatal-care" element={<PrenatalPostnatalCare />} />
            <Route path="/services/fertility-services" element={<FertilityServices />} />
            <Route path="/services/minimally-invasive-surgery" element={<MinimallyInvasiveSurgery />} />
            <Route path="/services/well-woman-exams" element={<WellWomanExams />} />
            <Route path="/services/contraception-family-planning" element={<ContraceptionFamilyPlanning />} />
            <Route path="/services/laboratory-services" element={<LaboratoryServices />} />
            <Route path="/services/internal-medicine" element={<InternalMedicine />} />
            <Route path="/services/ophthalmology" element={<Ophthalmology />} />
            
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/Doctors/:id" element={<Doctors />} />
            <Route path="/patient-portal" element={<PatientPortal />} />
            <Route path="/staff-portal" element={<StaffPortal />} />
            <Route path="/patient/login" element={<PatientLogin />} />
            <Route path="/patient/register" element={<PatientRegister />} />
            <Route path="/staff/login" element={<StaffLogin />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            <Route path="/medical-records" element={<MedicalRecords />} />
            <Route path="/billing" element={<BillingHistory />} />
            <Route path="/profile" element={<PatientProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;