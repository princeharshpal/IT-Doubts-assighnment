import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Entries = () => {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/contacts/entries`
      );
      setEntries(response.data);
    } catch (err) {
      console.log("Errors in fetching entries", err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/contacts/${id}`);
      fetchEntries();
    } catch (err) {
      console.log("Error deleting entry", err);
    }
  };

  const handleEdit = async (id) => {
    console.log("Edit functionality can be implemented here.", id);
  };

  return (
    <div className="w-full h-screen relative bg-slate-800 text-white flex justify-center items-center">
      <div className="absolute top-5 px-4 py-2 bg-blue-500 rounded-xl">
        <Link to={"/contacts/new"}>Create a new entry</Link>
      </div>
      <div>
        <table className="border-2">
          <caption className="text-4xl">All Entries</caption>
          <thead>
            <tr>
              <th className="p-2">First Name</th>
              <th className="p-2">Last Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Company</th>
              <th className="p-2">Job Title</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(entries) && entries.length > 0 ? (
              entries.map((entry) => (
                <tr key={entry._id}>
                  <td>{entry.firstname}</td>
                  <td>{entry.lastname}</td>
                  <td>{entry.email}</td>
                  <td>{entry.company}</td>
                  <td>{entry.jobtitle}</td>
                  <td>
                    <button onClick={() => handleEdit(entry._id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(entry._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No entries found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Entries;
