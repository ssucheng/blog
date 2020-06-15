// 引用express框架
const express = require('express');
// 创建admin路由
const admin = express.Router();
admin.get('/',(req,res)=>{
    res.send('欢迎来到admin页面');
})
module.exports = admin;