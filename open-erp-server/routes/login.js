var express = require("express");
const { User } = require("../db/User");

var router = express.Router();

const attributes = [
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

router.post("/", function (req, res, next) {
  const query = req.body;
  if (query) {
    User.findOne({ where: { username: query.username }, attributes }).then((result) => {
      console.log(result)
      res.json({ data: result });
    });
  } else {
    next();
  }
});

module.exports = router;