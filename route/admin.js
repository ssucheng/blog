// 引用express框架
const express = require('express');
// cosnt 
// 创建admin路由
const admin = express.Router();
// 登录路由 加上模板引擎渲染
admin.get('/login',(req,res) => {
    // res.send('欢迎来到admin页面');
    res.render('admin/login');
});
// 用户列表路由 加上模板引擎渲染
admin.get('/user',(req,res) => {
    res.render('admin/user')
});
admin.get('/article-edit',(req,res) => {
    res.render('admin/article-edit')
});
admin.get('/article',(req,res) => {
    res.render('admin/article')
});
admin.get('/user-edit',(req,res) => {
    res.render('admin/user-edit')
});

admin.post('/login', function(req, res){
    res.send(req.body);
    // if(!req.body) return res.sendStatus(400);
    // res.send('welcome, '+ req.body.email);
})
module.exports = admin;