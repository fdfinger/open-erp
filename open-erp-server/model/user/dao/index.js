module.exports = {
  insert: 'INSERT INTO sys_user SET ?;',
  select: 'SELECT * FROM sys_user LIMIT ?, ?;',
  update: 'UPDATE sys_user SET ?? WHERE id = ?;',
  delete: 'DELETE FROM sys_user WHERE id = ?;',
  getById: 'SELECT * FROM sys_user WHERE id = ?;'
}