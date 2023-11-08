// Preparation for Stuff
const express = require('express')
const app = express()
const path = require('path');
const User = require('./model/users')

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/views"));



// Execution 
app.get('/', (req, res) => {
  // Memanggil halaman index yang ada pada folder views
  res.render('index') 
})

app.get('/', (req, res) => {
  // Memanggil halaman index yang ada pada folder views
  res.render('login') 
})

app.get('/reservation-form', (req, res) => {
  // Memanggil halaman index yang ada pada folder views
  res.render('reservation') 
})

app.listen(port=3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})