const contactModel = require("../models/contact.model");
const { validationResult } = require("express-validator");

module.exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactModel.find({});
    res.status(200).json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ message: "Error fetching contacts" });
  }
};

module.exports.getContact = async (req, res) => {
  try {
    const contact = await contactModel.findById(req.params.id);
    res.status(200).json(contact);
  } catch (err) {
    console.log("Error fetching contact", err);
    res.status(500).json({ message: "Error fetching contact" });
  }
};

module.exports.createContact = async (req, res) => {
  try {
    const errros = validationResult(req);
    if (!errros.isEmpty()) {
      return res.status(400).json({ message: errros.array() });
    }

    const { firstname, email, phone, jobtitle, company, lastname } = req.body;

    if (!firstname || !email || !phone) {
      return res.status(400).json("All fields are required");
    }

    const contact = await contactModel.create({
      firstname,
      lastname,
      email,
      phone,
      jobtitle,
      company,
    });

    res.status(201).json("Created successfully");
  } catch (err) {
    console.log(err);
    res.status(err.status).json(err.message);
  }
};

module.exports.editDetails = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, company, jobtitle } = req.body;
    await contactModel.findByIdAndUpdate(req.params.id, {
      firstname,
      lastname,
      email,
      phone,
      company,
      jobtitle,
    });

    res.status(200).json({ message: "Entry updated successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error updating entry" });
  }
};

module.exports.deleteEntry = async (req, res) => {
  try {
    await contactModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    console.log(err);
    res.redirect(`/contacts/${req.params.id}`);
  }
};
