var express = require("express");
const { Area } = require("../db/Area");
var router = express.Router();

const attributes = [
  "id",
  "areaCode",
  "parentAreaCode",
  "areaName",
  "areaStatus",
  "createDate",
];

/* 列表 */
router.get("/", function (req, res, next) {
  const { page , pageSize, ...query } = req.query
  const parsePage = parseInt(page)
  const parseSize = parseInt(pageSize)
  const defaultPagination = { offset: parsePage ? (parsePage - 1) * parseSize : undefined, limit: parsePage ? parseSize : undefined }
  Area.findAndCountAll({ ...defaultPagination,  where: query, attributes })
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
    Area.findOne({ where: { id } })
      .then((result) => {
        res.json({
          statusCode: 200,
          message: "操作成功",
          data: result || {},
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
    Area.create(query)
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
    Area.update(newParams, {
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
    Area.destroy({
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
