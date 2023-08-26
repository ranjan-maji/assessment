const router = require('express').Router();
const User = require('../Models/userSchema');




// Create a new user
router.post('/users', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Read all users
  router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update a user
  router.put('/users/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete a user
  router.delete('/users/:id', async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndRemove(req.params.id);
      res.json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  module.exports = router