const mongoose = require('mongoose')

// create schema (like table)
const Reservation = mongoose.model('reservations', {
    name_order: String,
    date_order: Date,
    table_type: String,
    person_count: Number,
    addition_message: String
})

module.exports = Reservation