// 引用express框架
const express = require('express');
// cosnt 
// 创建admin路由
const admin = express.Router();
// 登录路由 加上模板引擎渲染
admin.get('/login',require('./admin/loginPage'));
// 用户列表路由 加上模板引擎渲染
admin.get('/user',require('./admin/userPage'));
// 退出登录
admin.get('/logout',require('./admin/logout'))

admin.get('/article-edit',(req,res) => {
    res.render('admin/article-edit')
});
admin.get('/article',(req,res) => {
    res.render('admin/article')
});

// 新增用户
admin.get('/user-edit',require('./admin/user-edit-page'));
admin.post('/user-edit',require('./admin/user-edit-fn'))
// 登录验证
admin.post('/login',require('./admin/login'));
module.exports = admin;