// Mengimpor library express dan membuat instance aplikasi express yang disimpan dalam variabel 'auth'
const express = require('express')
const auth = express()

// Mengimpor beberapa modul dan model yang diperlukan untuk aplikasi
const session = require('express-session');
const bodyParser = require('body-parser'); 
const User = require('../model/users') 
require('../utils/db')

// Menggunakan middleware body-parser untuk mengurai data permintaan HTTP
// Menggunakan middleware express-session untuk mengelola sesi
// Konfigurasi sesi disediakan dengan beberapa opsi
auth.use(bodyParser.json());
auth.use(bodyParser.urlencoded({ extended: false }));
auth.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: false,
}));

// Meng-handle permintaan GET ke route '/login'
// Merender view 'login'
auth.get('/login', (req, res) => {
    res.render('login') 
})

// Meng-handle permintaan POST ke route '/login'
// Mengambil username dan password dari body permintaan
// Melakukan pencarian pengguna dengan menggunakan model User
// Jika pengguna ditemukan, menyimpan pengguna dalam sesi dan mengarahkan pengguna ke halaman '/reservation-form'
// Jika pengguna tidak ditemukan, mengarahkan pengguna kembali ke halaman login
auth.post('/login', async (req, res) => {
    const { username, password } = req.body
  
    const user = await User.findOne({ username, password })
  
    if (user) {
        req.session.user = user
        res.redirect('/reservation-form')
    } else {
        res.redirect('/login')
    }
})

// Meng-handle permintaan GET ke route '/logout'
// Menghancurkan sesi pengguna dan mengarahkan pengguna ke halaman '/login'
auth.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect('/login');
    });
});

// Mengimpor variabel instansiasi 'auth' agar bisa digunakan di file lain
module.exports = auth