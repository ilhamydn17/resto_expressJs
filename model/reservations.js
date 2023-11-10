// Mengimpor library mongoose untuk berinteraksi dengan database MongoDB
const mongoose = require('mongoose')

// Membuat model 'Reservation' dengan menggunakan mongoose.model
// Model 'Reservation' akan merepresentasikan koleksi 'reservations' di database
// Model ini memiliki beberapa atribut seperti 'name_order', 'date_order', 'table_type', 'person_count', dan 'addition_message'
// Tipe data untuk masing-masing atribut sudah ditentukan
const Reservation = mongoose.model('reservations', {
    name_order: String,
    date_order: Date,
    table_type: String,
    person_count: Number,
    addition_message: String
})

// Mengekspor model 'Reservation' agar bisa digunakan di file lain
module.exports = Reservation
