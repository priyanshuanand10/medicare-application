import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import HeaderManager from "./components/HeaderManager";
import LandingPage from "./components/LandingPage";
import GetHospitalManager from "./components/GetHospitalManager";
import BookAppointmentManager from "./components/BookAppointmentManager";
import MainAboutUs from "./components/MainAboutUs"; 
import AppointmentManager from "./components/AppointmentManager";
import AppointmentManagerDefault from "./components/AppointmentManagerDefault";
import MainSearchUser from "./components/MainSearchUser";

function App() {
  return (
    <div style={{overflowY:"hidden"}}>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HeaderManager />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/show-hospitals" element={<GetHospitalManager />} />
          <Route path="/book-appointment" element={<BookAppointmentManager />} />
          <Route path ="/about" element={<MainAboutUs/>} />
          <Route path ="/getAllAppointments" element={<AppointmentManagerDefault/>} />
          <Route path ="/getAllAppointmentsNew" element={<AppointmentManager/>} />
        
          <Route path ="/test" element={<MainSearchUser/>} />
            </Routes>
      </Router>
    
    </div>
  );
}

export default App;
