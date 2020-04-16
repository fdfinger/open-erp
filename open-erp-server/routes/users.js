var express = require('express');
var SysUser = require('../model/user');
const Boom = require('boom')
var router = express.Router();
const defindParams = {
  page: 1,
  pageSize: 10
}

/* 列表 */
router.get('/', function(req, res, next) {
  // /users/
  const query = Object.assign(defindParams, req.body)
  SysUser.get(query, function(err, rows, fields){
      if (err) {
          Boom.badRequest(new Error(err.stack))
        }
        res.json({
      data: rows
    })
  })
});

/** 明细 */
router.get('/:id', function(req, res, next){
  const id = req.param('id')
  if (id) {
    SysUser.getById(Number(id), function (err, rows, fields) {
      if (err) {
        Boom.badRequest(new Error(err.stack))
      }
      res.json({
        data: rows
      })
    })
  }
})

/** 新增 */
router.post('/', function (req, res, next) {
  const query = req.body;
  SysUser.add(query, function (err, rows, fields) {
    if (err) {
      Boom.badRequest(new Error(err.stack));
    }
    res.json({
      data: rows
    })
  })
})

/** 
 * 更新
 * @description /department/:id body= [{key:value}]
 */
router.put('/:id', function (req, res, next) {
  const id = req.param('id')
  const params = req.body;
  const newParams = Object.assign({id: Number(id)}, params)
  SysUser.update(newParams, function (err, rows, fields) {
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
})

/** 
 * 删除
 * @see {@link http://localhost:3000/department/1 delete}
 * */
router.delete('/:id', function (req, res, next) {
  const id = req.param('id');
  SysUser.remove(id, function (err, rows, fields) {
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
})

module.exports = router;
