// Mengimpor library express dan membuat instance aplikasi express yang disimpan dalam variabel 'global'
const express = require('express') 
const global = express()


// Mengimpor beberapa modul dan model yang diperlukan untuk aplikasi
const path = require('path');
const session = require('express-session');
const User = require('../model/users')
const Reservation = require('../model/reservations') 
const Menu = require('../model/menus') 


// Mengimpor dan menjalankan file 'db.js' dari direktori '../utils'
require('../utils/db') 


// Menggunakan middleware express-session untuk mengelola sesi
// Konfigurasi sesi disediakan dengan beberapa opsi
global.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: false,
}));


// Meng-handle permintaan GET ke route '/'
// Menggunakan method 'render' untuk merender view 'index' dengan menyertakan objek 'user' dari sesi
global.get('/', (req, res) => {
    res.render('index', { user: req.session.user }) 
})


// Meng-handle permintaan GET ke route '/reservation-form'
// Jika pengguna memiliki sesi yang aktif, merender view 'reservation'
// Jika tidak, pengguna akan diarahkan ke halaman login
global.get('/reservation-form', (req, res) => {
    if (req.session.user) {
        res.render('reservation');
    } else {
        res.redirect('/login');
    }
})


// Meng-handle permintaan GET ke route '/reservation-list'
// Jika pengguna memiliki sesi yang aktif, melakukan pencarian semua reservasi menggunakan model Reservation dan merender view 'reservation-list' dengan menyertakan objek 'reservations'
// Jika tidak, pengguna akan diarahkan ke halaman login
global.get('/reservation-list', async (req, res) => {
    if (req.session.user) {
        const reservations = await Reservation.find()
        res.render('reservation-list', { reservations })
    }else{
        res.redirect('/login');
    }
})


// Meng-handle permintaan GET ke route '/foods-list'
// Melakukan pencarian semua menu dengan tipe 'food' menggunakan model Menu
// Setelah itu, merender view 'menu-list' dengan menyertakan objek 'menus' dan tipe 'Foods'
global.get('/foods-list', (req, res) => {
    const menus = Menu.find({ type: 'food' })
        .then((menus) => {
            res.render('menu-list', { menus, type: 'Foods' })
        })
})


// Meng-handle permintaan GET ke route '/beverages-list'
// Melakukan pencarian semua menu dengan tipe 'beverage' menggunakan model Menu
// Setelah itu, merender view 'menu-list' dengan menyertakan objek 'menus' dan tipe 'Beverages'
global.get('/beverages-list', (req, res) => {
    const menus = Menu.find({ type: 'beverage' })
        .then((menus) => {
            res.render('menu-list', { menus, type: 'Beverages' })
        })
})

// Meng-handle permintaan GET ke route '/desserts-list'
// Melakukan pencarian semua menu dengan tipe 'dessert' menggunakan model Menu
// Setelah itu, merender view 'menu-list' dengan menyertakan objek 'menus
global.get('/desserts-list', (req, res) => {
    const menus = Menu.find({ type: 'dessert' })
        .then((menus) => {
            res.render('menu-list', { menus, type: 'Desserts' })
        })
})

// Mengekspor variabel instansiasi 'global' agar bisa digunakan di file lain
module.exports = global
