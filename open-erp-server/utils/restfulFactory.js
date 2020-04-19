var express = require("express");
var router = express.Router();

function RestFulFactory(tableModel, attributes) {
  this.tableModel = tableModel;
  this.attributes = attributes || undefined;
}

RestFulFactory.prototype.list = function (callback) {
  if (callback) {
    callback();
  } else {
    var t = this.tableModel;
    var attr = this.attributes;
    router.get("/", function (req, res, next) {
      t.findAndCountAll({ where: req.query, attributes: attr })
        .then((result) => {
          res.json({
            data: result,
          });
        })
        .catch((err) => {
          next(new Error(err));
        });
    });
  }
  return this;
};

RestFulFactory.prototype.findOne = function (callback) {
  if (callback) {
    callback();
  } else {
    var t = this.tableModel;
    router.get("/:id", function (req, res, next) {
      const id = req.params.id;
      if (id) {
        t.findOne({ where: { id } })
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
  }
  return this;
};

RestFulFactory.prototype.create = function (callback) {
  if (callback) {
    callback();
  } else {
    var t = this.tableModel;
    router.post("/", function (req, res, next) {
      const query = req.body;
      if (query) {
        t.create(query)
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
  }
  return this;
};

RestFulFactory.prototype.update = function (callback) {
  if (callback) {
    callback();
  } else {
    var t = this.tableModel;
    router.put("/:id", function (req, res, next) {
      const id = req.params.id;
      const params = req.body;
      const newParams = Object.assign({}, { id: Number(id) }, params);
      if (id) {
        t.update(newParams, {
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
    return this;
  }
};

RestFulFactory.prototype.delete = function (callback) {
  if (callback) {
    callback();
  } else {
    t = this.tableModel;
    router.delete("/:id", function (req, res, next) {
      const id = req.params.id;
      if (id) {
        this.tableModel
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
  }
  return this;
};

RestFulFactory.prototype.render = function () {
  this.list();
  this.findOne();
  this.create();
  this.update();
  this.delete();
  return router;
};

module.exports = RestFulFactory;
