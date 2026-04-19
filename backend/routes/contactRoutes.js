const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { from_email, from_name, subject, message } = req.body;

    const newMessage = new Contact({
      from_email,
      from_name,
      subject,
      message,
    });

    await newMessage.save();

    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

module.exports = router; // ✅ MUST BE THIS