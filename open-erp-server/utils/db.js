/**
 * @file 提供查询
 * @author Jiangfei<jiangfei.ng@foxmail.com>
 */
const mysql = require('mysql');
const mysqlConfig = require('../config/mysql-config');

const pool = mysql.createPool(mysqlConfig)

/**
 * SQL查询
 * @param {string} sql - sql语句
 * @param {array} options - 传递参数
 * @param {function} callback - 回调函数
 */
module.exports = function (sql, options = [], callback) {
  pool.getConnection(function(err, conn) {
    if (err) {
      callback(err, null, null);
    } else {
      conn.query(sql, options, function(err, rows, fields) {
        // 释放连接
        console.log(sql, options)
        conn.release();
        callback(err, rows, fields);
      })
    }
  })
}