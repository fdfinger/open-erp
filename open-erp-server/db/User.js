const Sequelize = require("sequelize");
const { seq } = require("./index");
const User = seq.define("sys_user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telephone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sex: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  education: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  job: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  remark: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
  },
  depId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'dep_id'
  },
  status: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  operator: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
  },
  operatorTime: {
    type: Sequelize.DATE,
    field: 'operator_time'
  },
  operatorIp: {
    type: Sequelize.STRING,
    field: 'operator_ip'
  },
}, {
  freezeTableName: true
});


module.exports = {
  User
}