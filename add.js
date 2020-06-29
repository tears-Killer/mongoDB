const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log('数据库链接失败'));

//创建集合规则
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        //必写字段
        required: [true, '请输入文章标题'],
        minlength: [2, '最少为2位'],
        maxlength: [5, '最长为5位'],
        //去除字符串两边空格
        trim: true
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: {
            values: ['html', 'css', 'javascript'],
            message: '请按需求输入'
        }
    },
    author: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length > 2
            },
            message: '传入的值不符合'
        }
    }
})

//使用规则创建集合
const Post = mongoose.model('Post', postSchema)

Post.create({ title: '黑夜', age: 22, category: 'web', author: 'w' })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        const error = err.errors
        for (var i in error) {
            console.log(error[i]['message']);

        }
    })