import React from "react";

const Entries = () => {
  return (
    <div className="w-full h-screen bg-slate-800 text-white flex justify-center items-center">
      <div>
        <table className="border-2">
          <caption className="text-4xl">All Entries</caption>
          <thead>
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Company</th>
            <th className="p-2">Job Title</th>
          </thead>
          <tbody>
            <tr>
              <td>First name</td>
              <td>last name</td>
              <td>Email</td>
              <td>Company</td>
              <td>Job </td>
              <td>
                <a href="">edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Entries;
