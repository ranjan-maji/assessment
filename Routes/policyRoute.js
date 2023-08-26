const router = require('express').Router();
const Policy = require('../Models/policySchema');



// Create a new policy
router.post('/policies', async (req, res) => {
    try {
      const newPolicy = await Policy.create(req.body);
      res.json(newPolicy);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Read all policies
  router.get('/policies', async (req, res) => {
    try {
      const policies = await Policy.find();
      res.json(policies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update a policy
  router.put('/policies/:id', async (req, res) => {
    try {
      const updatedPolicy = await Policy.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedPolicy);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete a policy
  router.delete('/policies/:id', async (req, res) => {
    try {
      const deletedPolicy = await Policy.findByIdAndRemove(req.params.id);
      res.json(deletedPolicy);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



  module.exports = router