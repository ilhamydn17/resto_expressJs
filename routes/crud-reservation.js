// Mengimpor library express dan membuat instance aplikasi express yang disimpan dalam variabel 'reservation'
const express = require('express')
const reservation = express()


// Mengimpor beberapa modul dan model yang diperlukan untuk aplikasi
var methodOverride = require('method-override')
const bodyParser = require('body-parser'); 
const Reservation = require('../model/reservations')


// Mengimpor file utilitas 'db'
require('../utils/db')


// Menggunakan middleware body-parser untuk mengurai data permintaan HTTP
// Menggunakan middleware method-override untuk meng-handle metode HTTP tambahan seperti PUT atau DELETE
reservation.use(bodyParser.json());
reservation.use(bodyParser.urlencoded({ extended: false }));
reservation.use(methodOverride('_method'));


// Meng-handle permintaan POST ke route '/reservation/store'
// Mengambil data dari body permintaan untuk membuat objek reservasi baru
// Menyimpan objek reservasi baru ke database
// Mengarahkan pengguna kembali ke halaman utama jika berhasil
// Menangani kesalahan dan memberikan respons JSON dengan pesan kesalahan jika terjadi kesalahan
reservation.post('/reservation/store', async (req, res) => {
    try {
        const { name_order, date_order, table_type, person_count, addition_message } = req.body
        const reservation = new Reservation({name_order, date_order, table_type, person_count, addition_message})

        await reservation.save()
        res.redirect('/')
    } catch (error) {
        res.status(400).json({ error: 'Gagal membuat reservasi' });
    }
})


// Meng-handle permintaan DELETE ke route '/reservation'
// Menghapus satu entri reservasi berdasarkan nama pesanan yang diberikan
// Mengarahkan pengguna ke halaman 'reservation-list' jika berhasil
// Menangani kesalahan dan memberikan respons JSON dengan pesan kesalahan jika terjadi kesalahan
reservation.delete('/reservation', (req, res) => {
  Reservation.deleteOne({ name_order: req.body.name })
    .then((result) => {
      res.redirect('reservation-list')
    })
    .catch((err) => {
      res.status(500).json({ error: 'Gagal menghapus reservasi' });
    });
});

// Mengimpor variabel instansiasi 'reservation' agar bisa digunakan di file lain
module.exports = reservation