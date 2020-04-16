var express = require('express');
var SysDep = require('../model/department');
const Boom = require('boom')
var router = express.Router();
const defindParams = {
  page: 1,
  pageSize: 10
}

/* 列表 */
router.get('/', function(req, res, next) {
  // /department/:id
  const id = req.param.id
  if (id) {
    SysDep.getById(id, function (err, row, fields) {
      if (err) {
        Boom.badRequest(new Error(err.stack))
      }
      res.json({
        data: rows
      })
    })
  }
  // /department/
  const query = Object.assign(defindParams, req.body)
  SysDep.get(query, function(err, rows, fields){
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
});

/** 新增 */
router.post('/', function (req, res, next) {
  const query = req.body;
  SysDep.add(query, function (err, rows, fields) {
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
router.put('/', function (req, res, next) {
  const id = req.param.id
  const params = req.body;
  const newParams = Object.assign({id: id}, params)
  SysDep.update(newParams, function (err, rows, fields) {
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
 * @see {@link http://localhost:3000/department/1 delete}
 * */
router.delete('/', function (req, res, next) {
  const id = req.params.id;
  SysDep.remove(id, function (err, rows, fields) {
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
})

module.exports = router;
