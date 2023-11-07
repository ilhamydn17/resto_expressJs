// Preparation for Stuff
const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/views"));



// Execution 
app.get('/', (req, res) => {
  // Memanggil halaman index yang ada pada folder views
  res.render('index') 
})

app.listen(port=3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})