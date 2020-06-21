module.exports = (req,res) => {
    res.render('admin/user-edit',{
        // 将地址栏中的参数传递到页面中
        msg:req.query.message
    })
    
}