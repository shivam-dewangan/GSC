import { useState } from "react";

function LaborerDashboard() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Construction Work", location: "Delhi", wage: "₹500/day", duration: "7 days" },
    { id: 2, title: "Plumbing Work", location: "Mumbai", wage: "₹700/day", duration: "5 days" },
  ]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleApply = (job) => {
    if (!appliedJobs.includes(job.id)) {
      setAppliedJobs([...appliedJobs, job.id]);
      alert(`Applied for ${job.title}`);
    } else {
      alert("You have already applied for this job.");
    }
  };

  return (
    <div className="laborer-dashboard">
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> - {job.location} - {job.wage} for {job.duration}
            <button onClick={() => handleApply(job)} disabled={appliedJobs.includes(job.id)}>
              {appliedJobs.includes(job.id) ? "Applied" : "Apply"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LaborerDashboard;
