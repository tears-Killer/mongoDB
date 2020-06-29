const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log('数据库链接失败'));

//创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})

//使用规则创建集合
const Course = mongoose.model('Course', courseSchema)

// Course.create({ name: 'java高级', author: 'wj', isPublished: true }, (err, res) => {
//     if (err != null) {
//         console.log(err);
//     } else {
//         console.log(res);

//     }
// })

Course.create({ name: 'java高级', author: 'wj', isPublished: true })
    .then(res => {
        console.log('添加成功');
    })
    .catch(err => {
        console.log(err);
    })