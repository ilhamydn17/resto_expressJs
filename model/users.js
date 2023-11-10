// Mengimpor library mongoose untuk berinteraksi dengan database MongoDB
const mongoose = require('mongoose')

// Membuat model 'User' dengan menggunakan mongoose.model
// Model 'User' akan merepresentasikan koleksi 'users' di database
// Model ini memiliki beberapa atribut seperti 'name', 'username', 'email', 'password', dan 'phone'
// Tipe data untuk masing-masing atribut sudah ditentukan
const User = mongoose.model('users', {
    name: String,
    username: String,
    email: String,
    password: String,
    phone: Number
})


// Mengekspor model 'User' agar bisa digunakan di file lain
module.exports = User
