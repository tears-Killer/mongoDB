const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log('数据库链接失败'));

//创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String
})

//使用规则创建集合
const User = mongoose.model('User', userSchema)
//跟新一条数据
// User.updateOne({name:'wj'},{name:'wzy'}).then(res => {
//     console.log(res);
// })

//更新多条数据
User.updateMany({}, { age: 22 }).then(res => {
    console.log(res);
})