const Menu = require('../model/menus')
require('../utils/db')
    
const menuData = [
    // Makanan
    {
        type: 'food',
        name: 'Nasi Goreng',
        description: 'Nasi goreng dengan bumbu kacang',
        price: 15000,
        img: 'https://media.istockphoto.com/id/1345298910/id/foto/nasi-goreng-spesial-atau-nasi-goreng-spesial.jpg?s=1024x1024&w=is&k=20&c=RQ3dh8xDRssXdD8g4b8RTsvjKmB8lApI8d1nVlj1pZs='
    },
    {
        type: 'food',
        name: 'Ayam Geprek',
        description: 'Ayam geprek dengan bumbu kacang',
        price: 20000,
        img: 'https://media.istockphoto.com/id/1490486178/id/foto/ayam-geprek-makanan-jalanan-populer-di-indonesia-terbuat-dari-ayam-crispy-yang-dihancurkan-di.jpg?s=1024x1024&w=is&k=20&c=Aq7PhmBtbrxHej7hpBGHgsOATSFvnT1cGxr2aJLtjiY='
    },
    {
        type: 'food',
        name: 'Ayam Bakar',
        description: 'Ayam bakar dengan bumbu kacang',
        price: 25000,
        img: 'https://media.istockphoto.com/id/1579950935/id/foto/sate-babi.jpg?s=1024x1024&w=is&k=20&c=Npdj_ozBUwjDdu8ckuhYY1gnbRLafCR2CJk6zq1m2OY='
    },
    {
        type: 'food',
        name: 'Sate Ayam',
        description: 'Sate ayam dengan bumbu kacang',
        price: 30000,
        img: 'https://media.istockphoto.com/id/1526696550/id/foto/tusuk-sate-babi-bbq.jpg?s=1024x1024&w=is&k=20&c=kfKGBk4V_EnAmn_ifkxqFu_BibwEPjzD343rzwzOddw='
    },
    {
        type: 'food',
        name: 'Mie Ayam',
        description: 'Mie ayam dengan bumbu kacang',
        price: 15000,
        img: 'https://media.istockphoto.com/id/1145475124/id/foto/sup-mie-dengan-daging-babi-dan-sayuran-di-latar-belakang-kayu-hidangan-sehat-dan-makanan-diet.jpg?s=1024x1024&w=is&k=20&c=cwhbGBerm0Vt0I6LTY3wxO0yAj1Mw-_2-GM35AT2WN8='
    },
    {
        type: 'food',
        name: 'Mie Goreng',
        description: 'Mie goreng dengan bumbu kacang',
        price: 15000,
        img: 'https://media.istockphoto.com/id/1346097498/id/foto/mie-goreng.jpg?s=1024x1024&w=is&k=20&c=YnUrowg2HWVpInLTFNo8e6y-mjkkNEOjMqBa8qLwnjE='
    },

    // Beverages
    {
        type: 'beverage',
        name: 'Es Teh',
        description: 'Es teh segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/1204404992/id/foto/teh-es-lemon.jpg?s=1024x1024&w=is&k=20&c=P52Ji7FIsteUyBXAkTOskHrCU7nRV1lVgzcwOL_YewA='
    },
    {
        type: 'beverage',
        name: 'Es Jeruk',
        description: 'Es jeruk segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/1210980573/id/foto/jeruk-darah-margarita-mezcal-soda-jeruk-darah-buatan-sendiri-air-jeruk-nipis-garam-cacing.jpg?s=1024x1024&w=is&k=20&c=8_x7e7ROggp-cf2WBEUMBOFw91tspVM3OyS51Elshr0='
    },
    {
        type: 'beverage',
        name: 'Es Kopi',
        description: 'Es kopi segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/957499598/id/foto/es-kopi-dalam-gelas-tinggi-dengan-krim-dan-potongan-gula-mint-dan-jerami.jpg?s=1024x1024&w=is&k=20&c=s0mFIAaoB_tqfHXG3yBlh9tqYCTt6Fbz-fPV9jaoIrA='
    },
    {
        type: 'beverage',
        name: 'Es Dawet',
        description: 'Es dawet segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/1405841153/id/foto/thai-milk-tea-milk-ice-tea-cheddar-adalah-minuman-tradisional-thailand-yang-telah-lama-populer.jpg?s=1024x1024&w=is&k=20&c=9JGIwwSSEZcqGVWBxkD-TGyu6ozs_mMZTYBB0sml-Sk='
    },
    {
        type: 'beverage',
        name: 'Es Jeruk Lemon',
        description: 'Es jeruk lemon segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/467252126/id/foto/soda-minuman-ringan-dengan-lemon.jpg?s=1024x1024&w=is&k=20&c=vqdF2rwLohKkOzBLl1ZNn0D6A9B_jNV-75gI3KxqwpM='
    },
    {
        type: 'beverage',
        name: 'Es Campur',
        description: 'Es campur segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/472837462/id/foto/jus-buah-segar-diperas-di-pasar-boqueria-di-barcelona-spanyol.jpg?s=1024x1024&w=is&k=20&c=T_S8AzYTTmJ2fIfFT1TGXsJv_1xWYzlJyOsj92egVqM='
    },

    // dessert
    {
        type: 'dessert',
        name: 'Kue Kering',
        description: 'Kue kering segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/1053180010/id/foto/dapur-turki-makanan-penutup-turki-tradisional-yang-lezat-baklava.jpg?s=1024x1024&w=is&k=20&c=z7owWxusir76b_P6MxeQlv72nKaiW_0HXVCqhdN4OJw='
    },
    {
        type: 'dessert',
        name: 'Kue Sus',
        description: 'Kue sus segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/931689284/id/foto/wadah-kertas-dengan-popcorn-ayam-renyah-goreng.jpg?s=1024x1024&w=is&k=20&c=dWCbCteOetRmD9SCw9ZnzH_CoiP_EtfPj7aWf9NXoL4='
    },
    {
        type: 'dessert',
        name: 'Kue Batang',
        description: 'Kue batang segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/1333023716/id/foto/kue-susu-lezat.jpg?s=1024x1024&w=is&k=20&c=X04KElMbNw5XG4E9HgUPKePXc-68sFyZOI6gV2FInt0='
    },
    {
        type: 'dessert',
        name: 'Kue Pukis',
        description: 'Kue pukis segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/175441134/id/foto/makanan-penutup-mousse-cokelat.jpg?s=1024x1024&w=is&k=20&c=km8GohZq6RnpOuL-juXFG66Kr8TANhSAMGccJbIAAb4='
    },
    {
        type: 'dessert',
        name: 'Kue Lumpur',
        description: 'Kue laurur segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/691586168/id/foto/kue-bolu-bulat-di-piring-di-atas-meja.jpg?s=1024x1024&w=is&k=20&c=UzYIcxpv09F6F_XLI-8KK5CG-NYv_f7ocAlTsb5C6do='
    },
    {
        type: 'dessert',
        name: 'Kue Coklat',
        description: 'Kue coklat segar',
        price: 5000,
        img: 'https://media.istockphoto.com/id/155598375/id/foto/makanan-penutup-kue-cokelat.jpg?s=1024x1024&w=is&k=20&c=t04M1AxQkhMzedKWr0FF6SRBQL17SG7_H0C7VRL3vhE='
    }
]

Menu.insertMany(menuData).then((menuData) => {
    console.log(menuData);
}).catch((err) => {
    console.log(err);
})