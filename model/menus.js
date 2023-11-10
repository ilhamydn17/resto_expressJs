// Mengimpor library mongoose untuk berinteraksi dengan database MongoDB
const mongoose = require('mongoose')

// Membuat model 'Menu' dengan menggunakan mongoose.model
// Model 'Menu' akan merepresentasikan koleksi 'menus' di database
// Model ini memiliki beberapa atribut, yaitu 'type', 'name', 'description', 'price', dan 'img'
// Tipe data untuk masing-masing atribut sudah ditentukan
const Menu = mongoose.model('menus', {
    type: String,
    name: String,
    description: String,
    price: Number,
    img: String 
})

// Mengekspor model 'Menu' agar bisa digunakan di file lain
module.exports = Menu