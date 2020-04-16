const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addWebpackPlugin,
  addLessLoader,
} = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const modifyVars = require("./theme/modifyVars");

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars,
  })
);
