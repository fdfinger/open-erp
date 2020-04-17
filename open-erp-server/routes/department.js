var express = require('express');
var SysDep = require('../model/department');
const Boom = require('boom')
var router = express.Router();

/* 列表 */
router.get('/', function(req, res, next) {
  // /department/
  SysDep.get(req.query, function(err, rows, fields){
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
});

router.get('/:id', function(req, res, next) {
  // /department/:id
  const id = req.param('id')
  if (id) {
    SysDep.getById(Number(id), function (err, rows, fields) {
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
router.put('/:id', function (req, res, next) {
  const id = req.param('id')
  const params = req.body;
  const newParams = Object.assign({id: Number(id)}, params)
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
router.delete('/:id', function (req, res, next) {
  const id = req.param('id')
  SysDep.remove(Number(id), function (err, rows, fields) {
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
})

module.exports = router;
