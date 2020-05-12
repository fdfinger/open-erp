const Sequelize = require("sequelize");
const { seq } = require("./index");

const Device = seq.define(
  "workshop_device",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "device_id",
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "device_code",
    },
    machineCode: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "device_machine_code",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "device_name",
    },
    norms: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "device_norms",
    },
    unit: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "device_unit",
    },
    buyDate: {
      type: Sequelize.DATE,
      field: "device_buy_date",
    },
    depId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "device_use_dep_id",
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: 0,
      field: "device_status",
    },
    remark: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: '',
      field: "device_remark",
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

module.exports = Device;
