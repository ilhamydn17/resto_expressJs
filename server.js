const express = require('express') 
const app = express() 
const auth = require('./routes/auth-route')
const path = require('path');
const reser_route = require('./routes/crud-reservation')
const globalRoute = require('./routes/app-route')

app.use(globalRoute)
app.use(reser_route)
app.use(auth)

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/views"));

app.listen(port=3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
