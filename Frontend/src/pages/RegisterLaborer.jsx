import { useState } from "react";

function RegisterLaborer() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    skills: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Laborer Registered:", formData);
    alert("Laborer registered successfully!");
    setFormData({ name: "", age: "", skills: "", location: "" });
  };

  return (
    <div className="register-laborer">
      <h2>Register as a Laborer</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>Skills:</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />

        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterLaborer;
