const express = require('express')
const userContr = require('../controller/usersContr.js')
const router = express.Router()

// 得到静态页面
router.get('/users',(req,res) =>{
    userContr.getUsers(req,res)
})

// 添加用户的路由
router.post('/addUser',(req,res) =>{
    userContr.addUser(req,res)
})
// 获取所有用户的路由
router.get('/getAllUsers',(req,res) =>{
    userContr.getAllUsers(req,res)
})
// 添加一个删除数据的路由
router.get('/delUser',(req,res) =>{
    userContr.delUser(req,res)
})

// 暴露接口
module.exports  = router