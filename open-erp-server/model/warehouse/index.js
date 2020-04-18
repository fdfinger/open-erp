const sql = require("./dao");
const { query, objToSql } = require("../../utils");

const initSelect = {
  page: 1,
  pageSize: 20,
  area_name: ''
}

module.exports = {
  /** 新增 */
  add(params, callback) {
    query(sql.insert, params, callback);
  },
  /** 获取列表 */
  get(params = {}, callback) {
    const s = sql.select + objToSql(params);
    query(s, [], callback);
  },
  /** 更新 */
  update(params, callback) {
    const { id, ...other } = params;
    query(sql.update, [other, id], callback);
  },
  /** 删除 */
  remove(id, callback) {
    query(sql.delete, [id], callback);
  },
  /** 获取单条记录 */
  getById(id, callback) {
    query(sql.getById, [id], callback);
  },
};
