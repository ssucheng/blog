// 引用express框架
const express = require('express');
// 引入集合构造函数
const {User} = require('../model/user');
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
    if(user){
        // res.send(user);
        if(user.password == password){
           res.send('登录成功');
           return
        }else{
            res.status(400).render('admin/err.art',{msg:'用户密码错误'});
        }
    }else{
        res.status(400).render('admin/err.art',{msg:'用户密码错误'});
    }

    
})
module.exports = admin;