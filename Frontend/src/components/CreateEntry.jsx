import React from "react";
import { Link } from "react-router-dom";

const CreateEntry = () => {
  return (
    <div className="w-full h-screen bg-slate-800 text-white justify-center flex items-center">
      {/* <button>< Link to={"/contacts"} ></Link></button> */}
      <div className="w-96 border-2 p-8 rounded-lg">
        <h1 className="text-4xl font-semibold text-center">Create Entry</h1>

        <form action="/contacts" method="post" className="space-y-5 mt-5">
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="First Name"
            name="firstname"
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="Last Name"
            name="lastname"
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="number"
            placeholder="Phone Number"
            name="phone"
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="Company name"
            name="company"
            required
          />
          <input
            className="w-full bg-slate-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="Job title"
            name="jobtitle"
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
