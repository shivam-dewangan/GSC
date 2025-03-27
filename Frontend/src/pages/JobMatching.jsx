import { useState } from "react";

function JobMatching() {
  const [laborers, setLaborers] = useState([
    { id: 1, name: "Amit", skills: "Plumbing", location: "Mumbai" },
    { id: 2, name: "Rahul", skills: "Construction", location: "Delhi" },
  ]);

  const [jobs, setJobs] = useState([
    { id: 1, title: "Plumbing Work", location: "Mumbai", skillRequired: "Plumbing" },
    { id: 2, title: "Construction Work", location: "Delhi", skillRequired: "Construction" },
  ]);

  const matchedJobs = jobs.map((job) => ({
    ...job,
    matchedLaborers: laborers.filter(
      (laborer) => laborer.skills.toLowerCase() === job.skillRequired.toLowerCase() && laborer.location === job.location
    ),
  }));

  return (
    <div className="job-matching">
      <h2>Job Matching System</h2>
      {matchedJobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3>{job.title} - {job.location}</h3>
          <p>Required Skill: {job.skillRequired}</p>
          <h4>Matched Laborers:</h4>
          <ul>
            {job.matchedLaborers.length > 0 ? (
              job.matchedLaborers.map((laborer) => (
                <li key={laborer.id}>{laborer.name} ({laborer.skills})</li>
              ))
            ) : (
              <p>No matching laborers found.</p>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default JobMatching;
