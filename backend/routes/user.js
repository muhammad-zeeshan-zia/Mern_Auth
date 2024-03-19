const express =require('express');
const router =express.Router();
const User =require("../models/user")
const bcrypt = require('bcrypt');
router.post('/api/auth/register',  async (req, res) => {
    try {
  
  
      const { username, email, password,profilePic } = req.body;
  
      // Check if the username or email already exists in the database
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        profilePic:profilePic
      });
  
      const savedUser = await newUser.save();
      res.status(201).json("User Registered");
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
    //Preflight CORS handler
  });
  
router.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports= router;