const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    agent: String,
    userType: String,
    policy_mode: String,
    producer: String,
    policy_number: String,
    premium_amount_written: Number,
    premium_amount: Number,
    policy_type: String,
    company_name: String,
    category_name: String,
    policy_start_date: Date,
    policy_end_date: Date,
    csr: String,
    account_name: String,
    email: String,
    gender: String,
    firstname: String,
    city: String,
    account_type: String,
    phone: String,
    address: String,
    state: String,
    zip: String,
    dob: Date,
});

module.exports = mongoose.model('Data', dataSchema);
