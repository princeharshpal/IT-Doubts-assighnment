const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact.controller");
const { body } = require("express-validator");

router.get("/", contactController.getAllContacts);

router.get("/:id", contactController.getContact);

router.post(
  "/",
  [
    body("firstname")
      .notEmpty()
      .withMessage("Firstname is required")
      .isLength({ min: 3 })
      .withMessage("Firstname should be at least 3 charactes long"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid Email"),
    body("phone")
      .isNumeric()
      .withMessage("Invalid Phone Number")
      .notEmpty()
      .withMessage("Phone Number is required"),
    body("company").notEmpty().withMessage("Company name is required"),
    body("jobtitle").notEmpty().withMessage("Job title is required"),
  ],
  contactController.createContact
);

router.put("/:id", contactController.editDetails);

router.delete("/:id", contactController.deleteEntry);

module.exports = router;
