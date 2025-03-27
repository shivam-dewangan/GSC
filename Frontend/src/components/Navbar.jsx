import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Labor Connect</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register-laborer">Register</Link>
        <Link to="/employer-dashboard">Employer</Link>
        <Link to="/laborer-dashboard">Laborer</Link>
        <Link to="/job-matching">Find Jobs</Link>
      </div>
    </nav>
  );
}

export default Navbar;
