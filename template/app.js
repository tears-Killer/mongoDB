//导入模板引擎
const template = require('art-template')
const path = require('path')

const views = path.join(__dirname, 'views', 'index.html')
const html = template(views, {
    name: '张三',
    age: 0,
    content: '<h3>内容</h3>'
})

console.log(html);
