const express = require('express') 
const globalRoute = express()
const path = require('path');
const session = require('express-session');
const User = require('../model/users')
const Reservation = require('../model/reservations') 
const Menu = require('../model/menus') 

require('../utils/db') 

globalRoute.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: false,
  }));

// Execution Route
globalRoute.get('/', (req, res) => {
    // Memanggil halaman index yang ada pada folder views
    res.render('index', { user: req.session.user }) 
})
  
// Route to redirect to reservation page
globalRoute.get('/reservation-form', (req, res) => {
    if (req.session.user) {
      res.render('reservation');
    } else {
      res.redirect('/login'); // Redirect to login if the user is not authenticated
    }
})
  
globalRoute.get('/reservation-list', async (req, res) => {
    if (req.session.user) {
      const reservations = await Reservation.find()
      res.render('reservation-list', { reservations })
    }else{
      res.redirect('/login');
    }
})
  
globalRoute.get('/foods-list', (req, res) => {
    const menus = Menu.find({ type: 'food' })
      .then((menus) => {
       res.render('menu-list', { menus, type: 'Foods' })
      })
})
  
globalRoute.get('/beverages-list', (req, res) => {
    const menus = Menu.find({ type: 'beverage' })
      .then((menus) => {
        res.render('menu-list', { menus, type: 'Beverages' })
      })
})
  
globalRoute.get('/desserts-list', (req, res) => {
    const menus = Menu.find({ type: 'dessert' })
      .then((menus) => {
        res.render('menu-list', { menus, type: 'Desserts' })
      })
})

module.exports = globalRoute
  