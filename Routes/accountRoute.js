const router = require('express').Router();
const Account = require('../Models/accountSchema');


// Create a new account
router.post('/accounts', async (req, res) => {
    try {
      const newAccount = await Account.create(req.body);
      res.json(newAccount);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Read all accounts
  router.get('/accounts', async (req, res) => {
    try {
      const accounts = await Account.find();
      res.json(accounts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update an account
  router.put('/accounts/:id', async (req, res) => {
    try {
      const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedAccount);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete an account
  router.delete('/accounts/:id', async (req, res) => {
    try {
      const deletedAccount = await Account.findByIdAndRemove(req.params.id);
      res.json(deletedAccount);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

  module.exports = router