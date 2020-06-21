
// 引入构造函数User
const {User,userEditSchema} = require('../../model/user');
// 引入bcryp模块
const bcrypt = require('bcryptjs');
module.exports = async (req,res,next) => {
    // res.send('ok');
    // 通过req.body拿到表单提交的数据
    // res.send(req.body);
    // 制定验证规则
    // const schema = {
    //     username: joi.string().min(2).max(20).required().error(new Error('用户格式不正确')),
    //     email: joi.string().email().required().error(new Error('邮箱格式不正确')),
    //     password: joi.string().required(/^[a-zA-Z0-9]{3,30}$/).error(new Error('密码格式不正确')),
    //     role:joi.string().required().error(new Error('管理员格式不正确')),
    //     state:joi.number().error(new Error('状态不正确'))
    // }  
    // 要验证的对象
    // -req.body;
    // validate 方法验证user是否符合验证规则
    try{
        await userEditSchema(req.body);
    }catch(err){
        // 将捕获的错误信息传递到编辑页面
        // return res.redirect(`/admin/user-edit?message=${err.message}`);
        // next 执行下一个app.use()  并且next()中只能是字符串
        //下一个执行的app.use()在app.js 中
        return next(JSON.stringify({path:'/admin/user-edit',message:`${err.message}`}));
    }
    // 因为email是唯一的 查询数据库中是否存在这个 如果不存在就创建这个用户
        const user = await User.findOne({email:req.body.email});
        // 如果user存在 就重定向 携带报错信息
        if(user){
        //    return res.redirect(`/admin/user-edit?message=用户已存在`);
        return next(JSON.stringify({path:'/admin/user-edit',message:'用户已存在'}));
        }
        // 将密码加密
        const salt = await bcrypt.genSalt(10);
        // 对明文进行加密
        const pwd = await bcrypt.hash(req.body.password,salt);
        // 将加密的密码赋值给req。body
        req.body.password = pwd;
        // 存储到数据库中
        User.create(req.body);
        // return res.redirect()
        res.send(req.body);
}