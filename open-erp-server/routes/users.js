var express = require("express");
const { User } = require("../db/User");

var router = express.Router();

const showAttrs = [
  "id",
  "username",
  "telephone",
  "mail",
  "sex",
  "education",
  "job",
  "remark",
  "depId",
  "status",
];

/* 列表 */
router.get("/", function (req, res, next) {
  // /users/
  const { page, pageSize, ...query } = req.query;
  const parsePage = parseInt(page);
  const parseSize = parseInt(pageSize);
  const defaultPagination = {
    offset: parsePage ? (parsePage - 1) * parseSize : undefined,
    limit: parsePage ? parseSize : undefined,
  };
  User.findAndCountAll({
    ...defaultPagination,
    attributes: showAttrs,
    where: query,
  }).then((result) => {
    res.json({ data: result });
  });
});

/** 明细 */
router.get("/:id", function (req, res, next) {
  const id = req.param("id");
  if (id) {
    User.findOne({
      where: { id },
      attributes: showAttrs,
    }).then((result) => {
      res.json({
        data: result || {},
      });
    });
  }
});

/** 新增 */
router.post("/", function (req, res, next) {
  const query = req.body;
  if (query) {
    User.create(query).then((result) => {
      res.json({ result });
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
    User.update(newParams, {
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
 * @see {@link http://localhost:3000/department/1 delete}
 * */
router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  if (id) {
    User.destroy({
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
