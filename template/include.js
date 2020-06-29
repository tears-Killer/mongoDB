const template = require('art-template')
const path = require('path')

const views = path.join(__dirname, 'views', 'include.html')
const html = template(views, {
    msg: '我很帅'
})

console.log(html);