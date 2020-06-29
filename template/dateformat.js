const template = require('art-template')
const path = require('path')
const dateFormat = require('dateformat')
//导入模板变量
template.defaults.imports.dateFormat = dateFormat

//设置模板根目录
template.defaults.root = path.join(__dirname, 'views')

// 配置模板的默认后缀
template.defaults.extname = '.html'
const html = template('dateformat', {
    time: new Date()
})
console.log(html);
