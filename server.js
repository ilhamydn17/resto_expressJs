const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express()
const path = require('path');
const reser_route = require('./routes/crud-reservation')
require('./utils/db')
const User = require('./model/users')
const Reservation = require('./model/reservations')
const Menu = require('./model/menus')

app.use(reser_route)
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: false,
}));

// Execution Route
app.get('/', (req, res) => {
  // Memanggil halaman index yang ada pada folder views
  res.render('index', { user: req.session.user }) 
})

app.get('/tes', (req, res) => {
  // Memanggil halaman index yang ada pada folder views
  res.render('menu-list') 
})

// Route to login page
app.get('/login', (req, res) => {
  // Memanggil halaman index yang ada pada folder views
  res.render('login') 
})

// Route to login process
app.post('/login', async (req, res) => {
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
app.get('/logout', (req, res) => {
  // Clear the user's session
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    // Redirect to the login page or any other appropriate page
    res.redirect('/login');
  });
});

// Route to redirect to reservation page
app.get('/reservation-form', (req, res) => {
  if (req.session.user) {
    res.render('reservation');
  } else {
    res.redirect('/login'); // Redirect to login if the user is not authenticated
  }
})

app.get('/reservation-list', async (req, res) => {
  if (req.session.user) {
    const reservations = await Reservation.find()
    res.render('reservation-list', { reservations })
  }else{
    res.redirect('/login');
  }
})

app.get('/foods-list', (req, res) => {
  const menus = Menu.find({ type: 'food' })
    .then((menus) => {
     res.render('menu-list', { menus, type: 'Foods' })
    })
})

app.get('/beverages-list', (req, res) => {
  const menus = Menu.find({ type: 'beverage' })
    .then((menus) => {
      res.render('menu-list', { menus, type: 'Beverages' })
    })
})

app.get('/desserts-list', (req, res) => {
  const menus = Menu.find({ type: 'dessert' })
    .then((menus) => {
      res.render('menu-list', { menus, type: 'Desserts' })
    })
})

app.listen(port=3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
