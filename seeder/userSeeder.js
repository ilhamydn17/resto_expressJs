const User = require('../model/users')
require('../utils/db')
    
// insert 1 data
const user1 = new User({
    name: 'Rico Gamntenk',
    username: 'rico_',
    email: 'rico@example.com',
    password: 'rico123',
    phone: '12345'
})

// save to collection
user1.save().then((user)=> console.log(user))