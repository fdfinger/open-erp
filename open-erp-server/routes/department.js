var express = require('express');
var SysDep = require('../model/department');
const Boom = require('boom')
var router = express.Router();
const defindParams = {
  page: 1,
  pageSize: 10
}

/* GET */
router.get('/', function(req, res, next) {
  const query = Object.assign(defindParams, req.body)
  SysDep.get(query, function(err, rows, fields){
    if (err) {
      Boom.badRequest(new Error(err))
    }
    res.json({
      data: rows
    })
  })
});

module.exports = router;
