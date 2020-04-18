var express = require('express');
var SysArea = require('../model/area');
const Boom = require('boom')
var router = express.Router();

/* 列表 */
router.get('/', function(req, res, next) {
  SysArea.get(req.query, function(err, rows, fields){
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
});

router.get('/:id', function(req, res, next) {
  const id = req.param('id')
  if (id) {
    SysArea.getById(Number(id), function (err, rows, fields) {
      if (err) {
        Boom.badRequest(new Error(err.stack))
      }
      res.json({
        data: rows
      })
    })
  }
  next
})

/** 新增 */
router.post('/', function (req, res, next) {
  const query = req.body;
  SysArea.add(query, function (err, rows, fields) {
    if (err) {
      Boom.badRequest(new Error(err.stack));
    }
    res.json({
      data: rows
    })
  })
})

/** 更新 */
router.put('/:id', function (req, res, next) {
  const id = req.param('id')
  const params = req.body;
  const newParams = Object.assign({id: Number(id)}, params)
  SysArea.update(newParams, function (err, rows, fields) {
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
})

/** 删除 */
router.delete('/:id', function (req, res, next) {
  const id = req.param('id')
  SysArea.remove(Number(id), function (err, rows, fields) {
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
})

module.exports = router;
