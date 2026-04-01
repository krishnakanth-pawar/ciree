import express from "express";
import SupportRequest from "../models/SupportRequest.js";
import NewsletterSubscriber from "../models/NewsletterSubscriber.js";

const router = express.Router();

// Save Support Us form data
router.post("/support", async (req, res) => {
  try {
    const support = new SupportRequest(req.body);
    await support.save();
    res.json({ message: "Support request submitted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving support request." });
  }
});

// Save Newsletter subscription
router.post("/newsletter", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email required." });
    await NewsletterSubscriber.create({ email });
    res.json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already subscribed." });
    }
    res.status(500).json({ message: "Error subscribing." });
  }
});

export default router;
