import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <form className="flex flex-col space-y-4 text-lg">
        <h2 className="text-4xl font-semibold text-center">Sign up</h2>
        <input
          className="bg-gray-100 px-4 py-1"
          type="text"
          placeholder="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="bg-gray-100 px-4 py-1"
          type="text"
          placeholder="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className="bg-gray-100 px-4 py-1"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="bg-gray-100 px-4 py-1"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="w-full px-4 py-2 bg-blue-900 rounded-md text-white">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
