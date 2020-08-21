var express = require("express");
var router = express.Router();
var _jssdk = require("qc-wechat-jssdk");
_jssdk.configure({
  appId: 'wx0e0d14440f38df78',
  secret: "95250a7c12049bd4f423289a021cf4e8"
})

router.get("/", function (req, res, next) {
  const url = req.query.url;
  if(url) {
    _jssdk.getjssdk(url).then((data) => {
      return res.json(data)
    })
    .catch(() => {
      next()
    })
  } else {
    next()
  }
})

module.exports = router;