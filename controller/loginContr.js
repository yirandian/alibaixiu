const logindb = require('../model/logindb.js')
module.exports = {
    // 得到静态页面
    getLogin: (req, res) => {
        res.render('login', {})
    },
    // 接收提交的参数
    postLoginData: (req, res) => {
        console.log(1);

        let params = req.body
        let sql = `SELECT password,nickname,avatar,id FROM users WHERE email = '${params.email}'`
        console.log(sql);
        logindb.query(sql,  (err,result) => {
            console.log(result);
            if (err) {
                return res.send({
                    status:400,
                    msg:'验证出错'
                })
            }
            if (result.length == 0) {
                return res.send({
                    status:401,
                    msg:'邮箱或者密码不正确'
                })
            }
            if (result[0].password != params.password && result[0].email != params.email) {
                return res.send({
                    status:400,
                    msg:'验证出错'
                })
            }
            req.session.user = {
                email: params.email,
                password: params.password,
                // 保存一个用户的昵称
                nickname: result[0].nickname,
                avatar: result[0].avatar,
                id: result[0].id
            }
            console.log(req.session.user)
            res.send({
                status: 200,
                msg:'登录成功'
            })
        })
    },
    // 退出登录
    loginout: (req,res) =>{
        // console.log(123);
        // console.log(req.session.user);
        req.session.user = null
        // 响应成功的信息给浏览器
        res.send({
            status: 200,
            msg:'退出成功'
        })
        
    }
}