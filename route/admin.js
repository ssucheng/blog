// 引用express框架
const express = require('express');
// 引入集合构造函数
const {User} = require('../model/user');
// 引入bcrypt 
const bcrypt = require('bcryptjs');
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
// POST请求处理
admin.post('/login', async function(req, res){
    // 服务器端处理用户输入方式不能为空
    const {email ,password} = req.body;
    // 判断用户输入是否为空
    if(email.trim().length == 0 || password.trim().length == 0) return res.status(400).render('admin/err.art',{msg:'用户密码错误'});
    // 查询数据库中是否有用户输入的用户信息 es6语法email：email  可以写成email
    const user =await User.findOne({email});  
    // {"state":0,"_id":"5eeb22ca5f699832b0c49b63","username":"sucheng","email":"943704372@qq.com","password":"45784565","role":"admin","__v":0}
    // 验证加密 密文
    const isOK = await bcrypt.compare(password,user.password)
    // 判断用户是否存在
    if(user){
        // res.send(user);
        // 判断用户输入与数据库中信息是否一致
        if(isOK){
        //    res.send('登录成功');
        //  将用户储存在请求对象中 
            req.session.userName = user.username;
            // 如果登录成功 将用户名存在locals中 实现页面共享数据
            req.app.locals.userInfo = user;
            // 重定向到user页面
            res.redirect('user');
        //    return
        }else{
            res.status(400).render('admin/err.art',{msg:'用户密码错误'});
        }
    }else{
        res.status(400).render('admin/err.art',{msg:'用户密码错误'});
    }

    
})
module.exports = admin;