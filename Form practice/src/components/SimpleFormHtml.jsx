import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    gender: "",
    address: { city: "", state: "" },
    startdate: "",
    hobbies: [""],
    subscribe: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstname) newErrors.firstname = "Firstname is required";
    if (!formData.lastname) newErrors.lastname = "Lastname is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
      newErrors.age = "Age must be a number between 18 and 100";
    }
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.address.city) newErrors.city = "City is required";
    if (!formData.address.state) newErrors.state = "State is required";
    if (!formData.startdate) newErrors.startdate = "Start date is required";
    if (
      formData.hobbies.length === 0 ||
      formData.hobbies.some((hobby) => !hobby)
    ) {
      newErrors.hobbies = "Please enter at least one hobby";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes("address")) {
      const [_, key] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleHobbyChange = (index, value) => {
    const newHobbies = [...formData.hobbies];
    newHobbies[index] = value;
    setFormData((prev) => ({ ...prev, hobbies: newHobbies }));
  };

  const addHobby = () => {
    setFormData((prev) => ({ ...prev, hobbies: [...prev.hobbies, ""] }));
  };

  const removeHobby = (index) => {
    const newHobbies = formData.hobbies.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, hobbies: newHobbies }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-20 flex flex-col space-y-5">
      <div>
        <label htmlFor="firstname">First name</label>
        <input
          id="firstname"
          className="px-3 py-1 ml-2 bg-gray-100 rounded-md"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="firstname"
        />
        {errors.firstname && (
          <p className="px-3 py-1 my-2 bg-red-600 border-2 border-red-600 text-white rounded-md w-fit">
            {errors.firstname}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="lastname">Last name</label>
        <input
          id="lastname"
          className="px-3 py-1 ml-2 bg-gray-100 rounded-md"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="lastname"
        />
        {errors.lastname && (
          <p className="px-3 py-1 my-2 bg-red-600 border-2 border-red-600 text-white rounded-md w-fit">
            {errors.lastname}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="px-3 py-1 ml-2 bg-gray-100 rounded-md"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
        />
        {errors.email && (
          <p className="px-3 py-1 my-2 bg-red-600 border-2 border-red-600 text-white rounded-md w-fit">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          className="px-3 py-1 ml-2 bg-gray-100 rounded-md"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="age"
        />
        {errors.age && (
          <p className="px-3 py-1 my-2 bg-red-600 border-2 border-red-600 text-white rounded-md w-fit">
            {errors.age}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          className="px-3 py-1 ml-2 bg-gray-100 rounded-md"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        {errors.gender && (
          <p className="px-3 py-1 my-2 bg-red-600 border-2 border-red-600 text-white rounded-md w-fit">
            {errors.gender}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="city">Address</label>
        <input
          id="city"
          className="px-3 py-1 ml-2 bg-gray-100 rounded-md"
          name="address.city"
          placeholder="City"
          value={formData.address.city}
          onChange={handleChange}
        />
        {errors.city && (
          <p className="px-3 py-1 my-2 bg-red-600 border-2 border-red-600 text-white rounded-md w-fit">
            {errors.city}
          </p>
        )}

        <input
          id="state"
          className="px-3 py-1 ml-2 bg-gray-100 rounded-md"
          name="address.state"
          placeholder="State"
          value={formData.address.state}
          onChange={handleChange}
        />
        {errors.state && (
          <p className="px-3 py-1 my-2 bg-red-600 border-2 border-red-600 text-white rounded-md w-fit">
            {errors.state}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="startdate">Start date</label>
        <input
          id="startdate"
          className="px-3 py-1 ml-2 bg-gray-100 rounded-md"
          name="startdate"
          type="date"
          value={formData.startdate}
          onChange={handleChange}
        />
        {errors.startdate && (
          <p className="px-3 py-1 my-2 bg-red-600 border-2 border-red-600 text-white rounded-md w-fit">
            {errors.startdate}
          </p>
        )}
      </div>

      <div>
        <label>Hobbies</label>
        {formData.hobbies.map((hobby, index) => (
          <div key={index}>
            <input
              id={`hobby-${index}`}
              className="px-3 py-1 mb-2 bg-gray-100 rounded-md"
              value={hobby}
              onChange={(e) => handleHobbyChange(index, e.target.value)}
            />
            {formData.hobbies.length > 1 && (
              <button type="button" onClick={() => removeHobby(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        {errors.hobbies && (
          <p className="px-3 py-1 my-2 bg-red-600 border-2 border-red-600 text-white rounded-md w-fit">
            {errors.hobbies}
          </p>
        )}
        <button
          className="px-3 py-1 bg-black text-white rounded-md"
          type="button"
          onClick={addHobby}
        >
          Add Hobby
        </button>
      </div>

      <div>
        <label htmlFor="subscribe">Subscribe</label>
        <input
          id="subscribe"
          className="px-3 py-1 ml-2 bg-gray-100 rounded-md"
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="px-3 py-2 text-white bg-black rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;