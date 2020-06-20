// 测试 bcrypt 环境是否搭建成功
const bcrypt = require('bcryptjs');
// 异步加密
bcrypt.genSalt(10, (err,salt) => {
    // console.log(err);
    console.log(salt);
    // 对明文加密
    bcrypt.hash('123456',salt,(err,pwd) => {
        console.log(pwd);
         // 验证
        bcrypt.compare('123456',pwd,(err,isOK) => {
            console.log(isOK);
        })
    })
   
   
})
