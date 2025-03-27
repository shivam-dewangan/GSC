import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      {/* Black Glassmorphic Box */}
      <div className="home-box">
        <h1>Welcome to Labor Connect</h1>
        <p>Connecting laborers with employers efficiently.</p>
        <div className="home-buttons">
          <Link to="/register-laborer">Register as Laborer</Link>
          <Link to="/employer-dashboard">Employer Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
