import { useState } from "react";

function EmployerDashboard() {
  const [jobs, setJobs] = useState([]);
  const [jobData, setJobData] = useState({
    title: "",
    location: "",
    wage: "",
    duration: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    setJobs([...jobs, jobData]);
    setJobData({ title: "", location: "", wage: "", duration: "" });
  };

  return (
    <div className="employer-dashboard">
      <h2>Employer Dashboard</h2>

      <form onSubmit={handlePostJob}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="wage"
          placeholder="Wage (per day)"
          value={jobData.wage}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. 5 days)"
          value={jobData.duration}
          onChange={handleChange}
          required
        />
        <button type="submit">Post Job</button>
      </form>

      <h3>Posted Jobs</h3>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong> - {job.location} - ₹{job.wage}/day for {job.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployerDashboard;
