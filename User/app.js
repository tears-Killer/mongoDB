const http = require('http')

const mongoose = require('mongoose')

const url = require('url')

const app = http.createServer()

mongoose.connect('mongodb://localhost/carsys', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(() => {
        console.log('数据库连接失败');
    })

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [String]

})

const User = mongoose.model('User', userSchema)

// User.create({ name: 'wyf', age: 28, password: '123', email: 'wyf@qq.com', hobbies: ['rap', '篮球'] })
//     .then(res => {
//         console.log('添加成功')
//     }).catch(err => {
//         console.log(err)
//     })

app.on('request', async (req, res) => {
    const method = req.method.toLowerCase()

    const pathname = url.parse(req.url).pathname

    if (method == 'get') {
        if (pathname == '/index' || pathname == '/') {
            let users = await User.find()
            let list = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="./css/common.css">
                <link rel="stylesheet" href="./css/index.css">
                <link rel="stylesheet" href="./css/bootstrap.min.css">
            </head>
            
            <body>
                <form action="" method="post">
                    <h1>Car Mannagment System</h1>
                    <table>
                        <thead>
                            <th>用户名</th>
                            <th>年龄</th>
                            <th>爱好</th>
                            <th>邮箱</th>
                            <th>操作</th>
                        </thead>
                        <tbody>`
            users.forEach(item => {
                list += `<tr>
                            <td>${item.name}</td>
                            <td>${item.age}</td>
                            <td>`
                item.hobbies.forEach(item => {
                    list += `<span>${item}</span>`
                })

                list += `</td>
                            <td>${item.email}</td>
                            <td>
                                <a href="" class="btn btn-primary op">删除</a>
                                <a href="" class="btn btn-primary op">修改</a>
                            </td>
                        </tr>`
            })
            list += `<tr>
                            <td colspan="5">
                                <a href="" class="btn btn-primary">添加</a>
                                <a href="" class="btn btn-primary">返回</a>
                            </td>
                        <tr/>
                    </tbody>
        
                </table>
        
            </form>
        </body>
        
        </html>`
        }
        res.end(list)
    }
})

app.listen('2000')
