/**
 * @file 提供工具类
 * @author Jiangfei<jiangfei.ng@foxmail.com>
 */
const query = require("./db");

const objToSql = function (obj = {}) {
  let ret = "";
  const keys = Object.keys(obj);
  const arr = keys.map(function(item){
    return '`'+ item +'` = ' + (obj[item] !== '' ? obj[item] : "''")
  })
  ret = arr.join(' AND ')
//  for (let index = 0; index < keys.length; index++) {
//    const key = keys[index];
//    if (obj[key] !== '' && obj[key] !== 0) {
//    ret = ret + ' `' + key + '` = ' + obj[key]
//    if (obj[key] !== '' && index < keys.length - 1) {
//      ret += ' AND'
//    }
// }
//
// }
  if (ret) {
return ret = ' WHERE ' + ret;
}
  return ret;
};

module.exports = {
  query,
  objToSql
};
