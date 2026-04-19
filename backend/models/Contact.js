// models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  from_email: {
    type: String,
    required: true,
  },
  from_name: {
    type: String,
    required: true,
  },
  subject: String,
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);