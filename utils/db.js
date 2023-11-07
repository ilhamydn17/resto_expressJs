const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/resto_express', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



// // insert 1 data
// const user1 = new User({
//     name: "Fulan Tampan",
//     email: "fulan@example.com",
//     nohp: "0812898967676"
// })

// // save to collection
// user1.save().then((user)=> console.log(user))