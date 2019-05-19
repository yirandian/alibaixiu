const db = require('../model/db.js')

module.exports = {
    query:db.query,
    // 直接返回 categories 页面
    categories: (req, res) => {
        res.render('categories', {})
    },
    // 得到所有的分类数据
    getAllData: function(callback) {
        // 执行 sql 语句
        let selSql = `SELECT * FROM categories`
        db.query(selSql, (err, result) => {
            callback(err, result)
        })
    },
    addData: function(obj,callback) {
        // console.log(222);
        
        // 获取提交的数据
        // let params = req.body
        // console.log(params)
        let addSql = `INSERT INTO categories (slug,name) VALUES ('${obj.slug}','${obj.name}')`
        db.query(addSql,(err,result) =>{
            callback(err,result)
        })

    },
    delData: (req,res) =>{
        // 接收 id 
        let id = req.body.id
        // console.log(id);
        let delSql = `DELETE FROM categories WHERE id = ${id}`
        console.log(delSql);
        categorydb.query(delSql,(err,result) =>{
            res.send({
                status: 200,
                msg: '删除成功'
            })
        })
    },
    editData: (req,res) =>{
        
        // 接收 id 
        let id = req.query.id
        // console.log(id);
        let editSql = `SELECT * FROM categories WHERE id=${id}`
        categorydb.query(editSql,(err,result) =>{
            if (err) {
                return res.send({
                    status: 400,
                    msg: '出错了'
                })
            }
            res.send({
                status: 200,
                msg: '查询成功',
                data:result
            })
        })
    },
    updateData: (req,res) =>{
        let params = req.body
        // console.log(params);
        let updateSql =  `UPDATE categories SET name="${params.name}",slug="${params.slug}" WHERE id=${params.id}`
        // console.log(updateSql);
        categorydb.query(updateSql,(err,result) =>{
            if (err) {
                return res.send({
                    status: 400,
                    msg: '出错了'
                })
            }
            res.send({
                status: 200,
                msg: '修改成功'
            })
        })
    }


}