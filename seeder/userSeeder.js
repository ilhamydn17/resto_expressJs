// Mengimpor model 'Menu' dari file '../model/menus' yang berisi definisi skema dan operasi terkait menu
const Menu = require('../model/menus')


// Memasukkan banyak data menu ke dalam koleksi 'Menu' di database
// Menggunakan metode insertMany() pada model 'Menu'
// Menggunakan promise untuk menangani respons dan kesalahan
// Jika berhasil, mencetak data menu yang dimasukkan
// Jika terjadi kesalahan, mencetak pesan kesalahan
Menu.insertMany(menuData).then((menuData) => {
    console.log(menuData);
}).catch((err) => {
    console.log(err);
})

