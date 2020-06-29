const template = require('art-template')
const path = require('path')

const views = path.join(__dirname, 'views', 'extend.html')
const html = template(views, {
    msg: '嘿嘿'
})

console.log(html);
