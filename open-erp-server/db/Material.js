const Sequelize = require("sequelize");
const { seq } = require("./index");

const Material = seq.define(
  "material",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "material_id",
    },
    cataId: {
      type: Sequelize.INTEGER,
      field: "material_cata_id",
    },
    warehouseId: {
      type: Sequelize.INTEGER,
      field: "warehouse_id",
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "project_code",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "project_name",
    },
    specificationModel: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "specification_model",
    },
    specificationUnit: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "specification_unit",
    },
    chargeUnit: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "charge_unit",
    },
    conversion: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "conversion",
    },
    material: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "material",
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "color",
    },
    procurementPrice: {
      type: Sequelize.STRING,
      defaultValue: '0.00',
      allowNull: false,
      field: "procurement_price",
    },
    procurementRate: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
      field: "procurement_rate",
    },
    safetyStock: {
      type: Sequelize.INTEGER,
      defaultValue: '',
      allowNull: false,
      field: "safety_stock",
    },
    stockUp: {
      type: Sequelize.INTEGER,
      defaultValue: '',
      allowNull: false,
      field: "stock_up",
    },
    stockDown: {
      type: Sequelize.INTEGER,
      defaultValue: '',
      allowNull: false,
      field: "stock_down",
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: 0,
      field: "material_status",
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

module.exports = Material;
