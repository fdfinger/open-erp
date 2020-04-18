/**
 * @file 提供工具类
 * @author Jiangfei<jiangfei.ng@foxmail.com>
 */
const query = require("./db");

const objToSql = function (obj = {}) {
  let ret = "";
  const keys = Object.keys(obj);
  const arr = keys
    .filter(function (key) {
      return obj[key] !== "";
    })
    .map(function (item) {
      if (typeof obj[item] === "string") {
        return "`" + item + '` = "' + obj[item] + '"';
      } else {
        return "`" + item + "` = " + obj[item];
      }
    });
  ret = arr.join(" AND ");
  if (ret) {
    return (ret = " WHERE " + ret);
  }
  return ret;
};

module.exports = {
  query,
  objToSql,
};
