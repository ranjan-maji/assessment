const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  policyNumber: String,
});

module.exports = mongoose.model('Policy', policySchema);
