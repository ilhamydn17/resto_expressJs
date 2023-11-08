const mongoose = require('mongoose')

// create schema (like table)
const User = mongoose.model('users', {
    name: String,
    email: String,
    phone: Number
})

module.exports = User