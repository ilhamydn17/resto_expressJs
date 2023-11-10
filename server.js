// Mengimpor library express dan membuat instance aplikasi express yang disimpan dalam variabel 'app'
const express = require('express')
const app = express()

// Mengimpor beberapa file rute yang diperlukan untuk aplikasi
const path = require('path');
const authRoute = require('./routes/auth-route')
const reservationRoute = require('./routes/crud-reservation')
const globalRoute = require('./routes/app-route')

// Menggunakan middleware untuk menggunakan file rute yang telah diimpor
app.use(globalRoute)
app.use(reservationRoute)
app.use(authRoute)

// Mengatur penggunaan middleware dan konfigurasi untuk aplikasi express
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/views"));

// Membuat aplikasi express mendengarkan pada port 3000
// Ketika aplikasi berjalan, mencetak pesan ke konsol untuk memberi tahu bahwa aplikasi sedang berjalan
app.listen(port=3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})