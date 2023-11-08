const mongoose = require('mongoose')

// create schema (like table)
const User = mongoose.model('users', {
    name: String,
    username: String,
    email: String,
    password: String,
    phone: Number
})

module.exports = User