module.exports = {
  insert: 'INSERT INTO `warehouse` SET ?',
  select: 'SELECT * FROM `warehouse`',
  update: 'UPDATE `warehouse` SET ?? WHERE id = ?',
  delete: 'DELETE FROM `warehouse` WHERE id = ?',
  getById: 'SELECT * FROM `warehouse` WHERE id = ?'
}