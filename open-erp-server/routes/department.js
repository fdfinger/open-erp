var express = require("express");
var SysDep = require("../model/department");
const { Department } = require("../db/Department");
const Boom = require("boom");
var router = express.Router();

const attributes = ["id", "name", "parentId", "level", "seq", "remark"];

/* 列表 */
router.get("/", function (req, res, next) {
  Department.findAndCountAll({ where: req.query, attributes })
    .then((result) => {
      res.json({
        data: result,
      });
    })
    .catch(() => {
      next();
    });
});

router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  if (id) {
    Department.findOne({ where: { id } })
      .then((result) => {
        res.json({
          statusCode: 200,
          message: "操作成功",
          data: result,
        });
      })
      .catch(() => {
        next();
      });
  } else {
    next();
  }
});

/** 新增 */
router.post("/", function (req, res, next) {
  const query = req.body;
  if (query) {
    Department.create(query)
      .then((result) => {
        res.json({ result });
      })
      .catch(() => {
        next();
      });
  } else {
    next();
  }
});

/**
 * 更新
 * @description /department/:id body= [{key:value}]
 */
router.put("/:id", function (req, res, next) {
  const id = req.params.id;
  const params = req.body;
  const newParams = Object.assign({}, { id: Number(id) }, params);
  if (id) {
    Department.update(newParams, {
      where: { id },
    })
      .then(() => {
        res.json({
          statusCode: 200,
          message: "操作成功",
          data: {},
        });
      })
      .catch(() => {
        res.json({
          statusCode: 400,
          message: "操作失败",
          data: {},
        });
      });
  } else {
    next();
  }
});

/**
 * 删除
 * */
router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  if (id) {
    Department.destroy({
      where: { id },
    })
      .then((result) => {
        res.json({
          statusCode: 200,
          message: "操作成功",
          data: { result },
        });
      })
      .catch(() => {
        res.json({
          statusCode: 400,
          message: "操作失败",
          data: {},
        });
      });
  } else {
    next();
  }
});

module.exports = router;
