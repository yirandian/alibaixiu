// 职责：开启服务器
// 1.0 引入 express
// 2.0 搭建服务器
// 3.0 处理静态文件
// 4.0 处理路由文件


//导入模块
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

// 引入本地模块
const usersRouter = require('./router/usersRouter.js')

//创建服务器
const app = express();

// 配置 ejs 模板引擎
app.set('views','./views')
app.set('view engine','ejs')



// 配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置静态文件
app.use('/assets',express.static('./assets'))
app.use('/static/uploads', express.static('./uploads'))

// 注册路由中间件
// app.use(demoRouter)
app.use(usersRouter)


//3.开启服务器
app.listen(3000,()=>{
console.log('success');
});