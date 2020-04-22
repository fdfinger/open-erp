var express = require("express");
var router = express.Router();

function getNewFactory(tableModel, attributes) {
  if ('findAndCountAll' in tableModel) {
    router.get("/", function (req, res, next) {
      const { page, pageSize, ...query } = req.query;
      const parsePage = parseInt(page);
      const parseSize = parseInt(pageSize);
      const defaultPagination = {
        offset: parsePage ? (parsePage - 1) * parseSize : undefined,
        limit: parsePage ? parseSize : undefined,
      };
      tableModel.findAndCountAll({
        ...defaultPagination,
        where: query,
        attributes: attributes,
      })
        .then((result) => {
          res.json({
            data: result,
          });
        })
        .catch((err) => {
          next(new Error(err));
        });
    });

    router.get("/:id", function (req, res, next) {
      const id = req.params.id;
      if (id) {
        tableModel.findOne({ where: { id } })
          .then((result) => {
            res.json({
              statusCode: 200,
              message: "操作成功",
              data: result || {},
            });
          })
          .catch((err) => {
            next(new Error(err));
          });
      } else {
        next();
      }
    });

    router.post("/", function (req, res, next) {
      const query = req.body;
      if (query) {
        tableModel.create(query)
          .then((result) => {
            res.json({ result });
          })
          .catch((err) => {
            next(new Error(err));
          });
      } else {
        next();
      }
    });

    router.put("/:id", function (req, res, next) {
      const id = req.params.id;
      const params = req.body;
      const newParams = Object.assign({}, { id: Number(id) }, params);
      if (id) {
        tableModel.update(newParams, {
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

    router.delete("/:id", function (req, res, next) {
      const id = req.params.id;
      if (id) {
        tableModel
          .destroy({
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

    return router
  } else {
    throw new Error('找不到数据库模型!')
  }
}

module.exports = getNewFactory