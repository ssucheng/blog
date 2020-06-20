// 引入mongoose 模块
const mongoose = require('mongoose');
// 引入bcrypt 模块
const bcrypt = require('bcryptjs');
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
// 进行加密
// bcrypt.genSalt(10,(err,salt) => {
//     // 对明文进行加密
//     bcrypt.hash('45784565',salt,(err,pwd) => {
//         User.create({
//             username:'zhangjiajia',
//             email:'1551189282@qq.com',
//             password:pwd,
//             role:'normal',
//             state:0
//         });
//         // 验证
//         bcrypt.compare('45784565',pwd,(err,isOk) => {
//             console.log(isOk);
//         })
//     })

// })
// 插入文档
// User.create({
//     username:'sucheng',
//     email:'943704372@qq.com',
//     password:45784565,
//     role:'admin',
//     state:0
// }).then(result => console.log(result))
//   .catch(result => console.log(result))
 module.exports = {
     //在新特性中 User = User 可以简写成User
     User
 }