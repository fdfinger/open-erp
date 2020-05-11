const Sequelize = require("sequelize");
const { seq } = require("./index");

const Product = seq.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "product_id",
    },
    proCode: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "product_project_code",
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "product_code",
    },
    norms: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "product_norms",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "product_name",
    },
    valuation: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "product_valuation",
    },
    material: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "product_material",
    },
    valuationUnit: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "product_valuation_unit",
    },
    colorNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "product_color_number",
    },
    dosage: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '',
      field: "product_dosage",
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "product_status",
    },
    remark: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "product_remark",
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

module.exports = Product;
