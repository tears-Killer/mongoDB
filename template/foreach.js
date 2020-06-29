const template = require('art-template')

const path = require('path')

const views = path.join(__dirname, 'views', 'foreach.html')
const html = template(views, {
    users: [{
        name: 'wj',
        age: 22,
        sex: '男'
    }, {
        name: 'wzx',
        age: 22,
        sex: '女'
    }, {
        name: 'wzy',
        age: 26,
        sex: '男'
    }]
})

console.log(html);