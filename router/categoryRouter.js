const express = require('express')
// 引入本地模块
const categoryContr = require('../controller/categoryContr.js')
const router = express.Router()


// 添加一个 categories 路由
router.get('/categories',categoryContr.categories)
      .get('/getAllData',categoryContr.getAllData)
      .post('/addData',categoryContr.addData)
      .post('/delData',(req,res) =>{
        categoryContr.delData(req,res)
      })
      .get('/editData',categoryContr.editData)
      .post('/updateData',categoryContr.updateData)

// 暴露接口
module.exports = router