const express = require('express')
const loginContr = require('../controller/loginContr.js')
const router = express.Router()


router.get('/login',loginContr.getLogin)  // 添加获取静态页面的路由
      .post('/postLoginData',loginContr.postLoginData)



module.exports  = router