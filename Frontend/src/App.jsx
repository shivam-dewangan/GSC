import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LaborerDashboard from "./pages/LaborerDashboard";
import JobMatching from "./pages/JobMatching";
import RegisterLaborer from "./pages/RegisterLaborer";
import EmployerDashboard from "./pages/EmployerDashboard"; // Import EmployerDashboard

function App() {
  return (
    <Router>
      <div className="navbar">
        <h2>Merlo Job Platform</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/laborer-dashboard">Laborer Dashboard</Link>
          <Link to="/job-matching">Job Matching</Link>
          <Link to="/register-laborer">Register Laborer</Link>
          <Link to="/employer-dashboard">Employer Dashboard</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laborer-dashboard" element={<LaborerDashboard />} />
        <Route path="/job-matching" element={<JobMatching />} />
        <Route path="/register-laborer" element={<RegisterLaborer />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
