import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    jobtitle: "",
  });

  const fetchEntry = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/contacts/${id}`
      );
      setEntry(response.data);
    } catch (err) {
      console.log("Errors in fetching entries", err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchEntry();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_REACT_BASE_URL}/contacts/${id}`;
      await axios.put(url, entry);
      navigate("/contacts");
    } catch (err) {
      console.error("Error updating entry", err);
    }
  };

  return (
    <div className="w-full h-screen bg-slate-800 text-white flex justify-center items-center">
      <div className="w-96 border-2 p-8 rounded-lg">
        <h1 className="text-4xl font-semibold text-center">Edit Entry</h1>

        <form onSubmit={handleSubmit} className="space-y-5 mt-5">
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="First Name"
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
            placeholder="Email"
            name="email"
            value={entry.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={entry.phone}
            onChange={handleChange}
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="Company Name"
            name="company"
            value={entry.company}
            onChange={handleChange}
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="Job Title"
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

export default Edit;
