var express = require('express');
var wareHouseModel = require('../model/warehouse');
const Boom = require('boom')
var router = express.Router();

/* 列表 */
router.get('/', function(req, res, next) {
  wareHouseModel.get(req.query, function(err, rows, fields){
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
});

router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id)
  if (id) {
    wareHouseModel.getById(Number(id), function (err, rows, fields) {
      if (err) {
        Boom.badRequest(new Error(err.stack))
      }
      res.json({
        data: rows
      })
    })
  } else {
    next()
  }
})

/** 新增 */
router.post('/', function (req, res, next) {
  const query = req.body;
  wareHouseModel.add(query, function (err, rows, fields) {
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
  wareHouseModel.update(newParams, function (err, rows, fields) {
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
  wareHouseModel.remove(Number(id), function (err, rows, fields) {
    if (err) {
      Boom.badRequest(new Error(err.stack))
    }
    res.json({
      data: rows
    })
  })
})

module.exports = router;
