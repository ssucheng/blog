// 引入mongoose模块
const mongoose = require('mongoose');
const options ={
    useNewUrlParser: true ,
    useUnifiedTopology: true
}
//弃用警告  百度之后的一个参数
mongoose.set('useCreateIndex', true) 
// 连接数据库 无密码链接方式
mongoose.connect('mongodb://localhost/blog',options)
        .then(() => {console.log('数据库连接成功')})
        .catch(() => {console.log('数据库连接失败')})
