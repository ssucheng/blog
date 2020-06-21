module.exports = (req,res,next) => {
    // 访问除登录页之外且没有登录信息的都要重定向到登录页
    if(req.url !== '/login' && !req.session.userName ){
        res.redirect('login');
    }else{
        // 放行
        next();
    }
}   