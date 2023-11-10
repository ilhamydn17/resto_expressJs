const express = require('express')
const auth = express()
const session = require('express-session');
const bodyParser = require('body-parser'); 
const User = require('../model/users') 
require('../utils/db')

auth.use(bodyParser.json());
auth.use(bodyParser.urlencoded({ extended: false }));
auth.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: false,
  }));

// Route to login page
auth.get('/login', (req, res) => {
    // Memanggil halaman index yang ada pada folder views
    res.render('login') 
  })
  
  // Route to login process
auth.post('/login', async (req, res) => {
    const { username, password } = req.body
    
    // find user by username and password
    const user = await User.findOne({ username, password })
  
    if (user) {
      req.session.user = user
      res.redirect('/reservation-form')
    } else {
      res.redirect('/login')
    }
})
  
// Route to logout / delete session
auth.get('/logout', (req, res) => {
    // Clear the user's session
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      // Redirect to the login page or any other appropriate page
      res.redirect('/login');
    });
});

module.exports = auth