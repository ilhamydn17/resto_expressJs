const mongoose = require('mongoose')

// create schema
const User = mongoose.model('users', {
    name: String,
    email: String,
    nohp: Number
})

module.exports = User