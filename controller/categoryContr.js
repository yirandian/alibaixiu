const categorydb = require('../model/categorydb.js')

module.exports = {
    // 直接返回 categories 页面
    categories: (req, res) => {
        res.render('categories', {})
    },
    // 得到所有的分类数据
    getAllData: (req, res) => {
        // 执行 sql 语句
        // let selSql = `SELECT * FROM categories`
        categorydb.getAllData( (err, result) => {
            // 如果 err 存在说明，出错误了，返回出错信息
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
    addData: (req,res) =>{
        // console.log(222);
        
        // 获取提交的数据
        let params = req.body
        // console.log(params)
        // let addSql = `INSERT INTO categories (slug,name) VALUES ('${params.slug}','${params.name}')`
        categorydb.addData(params,(err,result) =>{
            // 如果 err 存在说明，出错误了，返回出错信息
            if (err) {
                return res.send({
                    status: 400,
                    msg: '出错了'
                })
            }
            res.send({
                status: 200,
                msg: '添加成功',
                data:result
            })
        })

    },
    delData: (req,res) =>{
        // 接收 id 
        let id = req.body.id
        // console.log(id);
        let delSql = `DELETE FROM categories WHERE id = ${id}`
        // console.log(delSql);
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
    },
    delAllCateByIds: (req,res) =>{
        let ids = req.body.id
        // console.log(params);
        let delMoreDatasql = `DELETE FROM categories WHERE id in (${ids})`
        // console.log(delMoreDatasql);
        categorydb.query(delMoreDatasql,(err,result) =>{
            if (err) {
                return res.send({
                    status: 400,
                    msg: '出错了'
                })
            }
            res.send({
                status: 200,
                msg: '批量删除成功'
            })
        })
    }


}