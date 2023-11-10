// Mengimpor model 'Menu' dari file '../model/menus' yang berisi definisi skema dan operasi terkait menu
const User = require('../model/users')


// Memasukkan data user ke dalam koleksi 'users' di database
// Menggunakan promise untuk menangani respons dan kesalahan
// Jika berhasil, mencetak data user yang dimasukkan
// Jika terjadi kesalahan, mencetak pesan kesalahan
const user1 = new User({
    name: 'Fulan Tampan',
    username: 'fulan_',
    email: 'fulan@example.com',
    password: 'fulan123',
    phone: 12345678
})
user1.save().then((user1) => {
    console.log(user1);
}).catch((err) => {
    console.log(err)
})


