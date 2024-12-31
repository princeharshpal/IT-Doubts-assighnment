import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEntry = () => {
  const [entry, setEntry] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    jobtitle: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_BASE_URL}/contacts`,
        entry,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        navigate("/contacts");
      } else {
        console.error("Failed to create entry. Status:", response.status);
        alert("Failed to create contact. Please try again.");
      }
    } catch (error) {
      console.error("Error creating entry:", error);
      alert("An error occurred while creating the contact. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen bg-slate-800 text-white justify-center flex items-center">
      <div className="w-96 border-2 p-8 rounded-lg">
        <h1 className="text-4xl font-semibold text-center">Create Entry</h1>

        <form onSubmit={handleSubmit} className="space-y-5 mt-5">
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="First Name *"
            name="firstname"
            value={entry.firstname}
            onChange={handleChange}
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={entry.lastname}
            onChange={handleChange}
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="email"
            placeholder="Email *"
            name="email"
            value={entry.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="number"
            placeholder="Phone Number *"
            name="phone"
            value={entry.phone}
            onChange={handleChange}
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="Company name *"
            name="company"
            value={entry.company}
            onChange={handleChange}
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="Job title *"
            name="jobtitle"
            value={entry.jobtitle}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 px-4 py-2 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEntry;
