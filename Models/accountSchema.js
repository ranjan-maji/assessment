const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  accountNumber: String,
});

module.exports = mongoose.model('Account', accountSchema);
