// Mengimpor library mongoose yang digunakan untuk terhubung dengan MongoDB dan berinteraksi dengan database
const mongoose = require('mongoose')

// Menggunakan opsi { useNewUrlParser: true, useUnifiedTopology: true } untuk mengatasi pesan peringatan dan memastikan koneksi yang stabil
// Menghubungkan aplikasi dengan database MongoDB yang berjalan di localhost pada port 27017
// Menggunakan URL koneksi 'mongodb://127.0.0.1:27017/resto_express'
mongoose.connect('mongodb://127.0.0.1:27017/resto_express', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})