import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Entries = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/contacts`
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
      await axios.delete(
        `${import.meta.env.VITE_REACT_BASE_URL}/contacts/${id}`
      );
      fetchEntries();
    } catch (err) {
      console.log("Error deleting entry", err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/contacts/${id}`);
  };

  return (
    <div className="w-full h-screen relative bg-slate-800 text-white flex justify-center items-center">
      <div className="absolute top-5 px-4 py-2 bg-blue-500 rounded-xl">
        <Link to={"/contacts/new"}>Create a new entry</Link>
      </div>

      <div>
        <table className="border-2">
          <caption className="text-4xl mb-2 font-semibold">All Entries</caption>
          <thead>
            <tr>
              <th className="p-2 border-2">First Name</th>
              <th className="p-2 border-2">Last Name</th>
              <th className="p-2 border-2">Email</th>
              <th className="p-2 border-2">Company</th>
              <th className="p-2 border-2">Job Title</th>
              <th className="p-2 border-2" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(entries) && entries.length > 0 ? (
              entries.map((entry) => (
                <tr key={entry._id}>
                  <td className=" border-2 p-2">{entry.firstname}</td>
                  <td className="border-2 p-2">{entry.lastname}</td>
                  <td className="border-2 p-2">{entry.email}</td>
                  <td className="border-2 p-2">{entry.company}</td>
                  <td className="border-2 p-2">{entry.jobtitle}</td>
                  <td className="border-2 p-2">
                    <button
                      className="px-4 py-1 bg-red-600 rounded-md text-white font-semibold "
                      onClick={() => handleDelete(entry._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="border-2 p-2">
                    <button
                      className="px-4 py-1 bg-yellow-500 rounded-md text-black font-semibold "
                      onClick={() => handleEdit(entry._id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-center">
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
