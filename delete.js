const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useUnifiedTopology: true })
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

//删除单个
// User.findOneAndDelete({ name: 'wj' }).then(res => {
//     console.log(res);
// })

//删除多个
// User.deleteMany({}).then(res => {
//     console.log(res);
// })