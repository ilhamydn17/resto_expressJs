const mongoose = require('mongoose')

// create schema (like table)
const Menu = mongoose.model('menus', {
    type: String,
    name: String,
    description: String,
    price: Number,
    img: String 
})

module.exports = Menu