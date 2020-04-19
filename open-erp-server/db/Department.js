const Sequelize = require("sequelize");
const { seq } = require("./index");

const Department = seq.define(
  "sys_dept",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    parentId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "parent_id",
    },
    level: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
    },
    seq: {
      type: Sequelize.INTEGER,
      defaultValue: "",
      allowNull: false,
    },
    remark: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
    },
    operator: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
    },
    operatorTime: {
      type: Sequelize.DATE,
      field: "operator_time",
    },
    operatorIp: {
      type: Sequelize.STRING,
      field: "operator_ip",
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = {
  Department,
};
