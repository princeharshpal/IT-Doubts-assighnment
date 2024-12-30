import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateEntry = () => {
  const [entry, setEntry] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    jobtitle: "",
  });
};

const [error, setError] = useState(null);

const navigate = useNavigate();

const handleChange = (e) => {
  setEntry({
    ...entry,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Send POST request to backend to create a new entry
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/contacts/entries`,
      entry
    );

    // On success, redirect to /contacts to see the list of entries
    navigate("/contacts");
  } catch (err) {
    console.error("Error creating entry:", err);
    setError("There was an error creating the entry.");
  }

  return (
    <div className="w-full h-screen bg-slate-800 text-white justify-center flex items-center">
      <div className="w-96 border-2 p-8 rounded-lg">
        <h1 className="text-4xl font-semibold text-center">Create Entry</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form action="/contacts" method="post" className="space-y-5 mt-5">
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
          <button className="w-full bg-blue-500 px-4 py-2 rounded-md font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEntry;
