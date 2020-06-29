const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/carsys', { useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log('数据库链接失败'));

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const carSchema = new mongoose.Schema({
    name: {
        tyep: String
    },
    price: {
        type: Number
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema)

const Car = mongoose.model('Car', carSchema)

// User.create({username:'wj',password:'123'}).then(res => {
//     console.log(res);
// })

// Car.create({ name: '保时捷', price: 1000000.00, buyer: '5ef4b7fd4302034bcc0ae9d2' }).then(res => {
//     console.log(res)
// })

Car.find().populate('buyer').then(res => console.log(res))