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

//查询所有数据
// User.find().then(res => {
//     console.log(res);
// })


//根据id查询
// User.find({ _id: '5ef44a401e7f1036c7f10a7e' }).then(res => {
//     console.log(res);
// })

//查询一条数据
// User.findOne({ name: 'wj' }).then(res => {
//     console.log(res);
// })

//大于 小于
// User.find({ age: { $gt: 20, $lt: 30 } }).then(res => {
//     console.log(res);
// })

//匹配包含
// User.find({ age: { $in: [22,30] } }).then(res => {
//     console.log(res);
// })

//按需查询
// User.find().select('name age -_id').then(res => {
//     console.log(res);
// })

//按照年龄进行升序排序
// User.find().sort('age').then(res => {
//     console.log(res);
// })

//降序排列
// User.find().sort('-age').then(res => {
//     console.log(res);
// })

//skip()跳过的数量 limit显示数据的条数
// User.find().skip(1).limit(1).then(res => {
//     console.log(res);
// })