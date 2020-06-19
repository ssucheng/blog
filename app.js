// 引用express框架
const express = require('express');
// 引入path模块
const path = require('path');
// 引入中间件
const bodyParser = require('body-parser');
// 引入路由
const home = require('./route/home');
const admin = require('./route/admin');
// 引入数据库连接文件 通过require引入是可以自动运行的
require('./model/connect');
// 引入user.js创建一个文档
// require('./model/user');
// 创建网站服务器
const app = express();

// 开放静态资源文件
app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'publicSelf')));
//  告诉express框架使用模板的所在目录
app.set('views',path.join(__dirname,'views'));
//告诉express框架渲染什么后缀的文件
app.set('view engine','art');
// 使用的是什么什么模板引擎
app.engine('art',require('express-art-template'));
// 解析 application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: false}))
// 解析 application/json
app.use(bodyParser.json());
// app.use 拦截所有请求匹配路由
app.use('/home',home);
app.use('/admin',admin);
// 监听端口
app.listen(80);
console.log('网站服务器启动成功，请访问localhoset');