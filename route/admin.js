// 引用express框架
const express = require('express');
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

module.exports = admin;