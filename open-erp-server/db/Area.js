const Sequelize = require("sequelize");
const { seq } = require("./index");

const Area = seq.define(
  "sys_area",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    areaCode: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "area_code",
    },
    parentAreaCode: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "parent_area_code",
    },
    areaName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "area_name",
    },
    areaStatus: {
      type: Sequelize.STRING,
      defaultValue: 0,
      allowNull: false,
      field: "area_status",
    },
    createDate: {
      type: Sequelize.DATE,
      field: "create_date",
    },
    modifyDate: {
      type: Sequelize.DATE,
      field: "modify_date",
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = {
  Area
};
