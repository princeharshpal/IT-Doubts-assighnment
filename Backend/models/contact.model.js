const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    minLength: [3, "Firstname should be at least 3 characters long!"],
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: [7, "Email should be at least 3 characters long!"],
    required: true,
  },
  phone: {
    type: Number,
    minLength: [10, "Phone number should be at least 10 charcaters long!"],
    require: true,
    trim: true,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contactModel", contactSchema);
