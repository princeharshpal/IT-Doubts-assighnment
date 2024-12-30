const contactModel = require("../models/contact.model");
const { validationResult } = require("express-validator");

module.exports.renderContactPage = (req, res) => {
  res.render("contact");
};

module.exports.showEntries = async (req, res) => {
  try {
    const allEntries = await contactModel.find({});
    res.render("entries", { allEntries });
  } catch (err) {
    console.log(err);
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

    res.redirect("/contacts/entries");
  } catch (err) {
    console.log(err);
    res.redirect("/contacts");
  }
};

module.exports.renderEditPage = async (req, res) => {
  const entry = await contactModel.findById(req.params.id);
  res.render("edit", { entry });
};

module.exports.editDetails = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, company, jobtitle } = req.body;
    const updatedDetails = await contactModel.findByIdAndUpdate(req.params.id, {
      firstname,
      lastname,
      email,
      company,
      jobtitle,
    });

    res.redirect("/contacts/entries");
  } catch (err) {
    console.log(err);
    res.redirect(`/contacts/${req.params.id}`);
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
