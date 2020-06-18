// 引入mongoose 模块
const mongoose = require('mongoose');
// 创建集合规则
const userSchema = mongoose.Schema({
    username: {
        type:String,
        required:true,
        minlength:2,
        maxlength:20,
    },
    email: {
        type:String,
        //uniqu 是告诉数据库这个email要唯一
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true,

    },
    // 超级管理员：admin，
    // 普通管理员：normal
    role: {
        type:String,
        required:true
    },
    // default为0默认开启
    state: {
        type:Number,
        default:0
    }
});
// 创建集合
const User = mongoose.model('User',userSchema);
// 插入文档
 User.create({
     username:'sucheng',
     email:'943704372@qq.com',
     password:45784565,
     role:'admin',
     state:0
 }).then(result => console.log(result))
   .catch(result => console.log(result))
 module.exports = {
     //在新特性中 User = User 可以简写成User
     User
 }