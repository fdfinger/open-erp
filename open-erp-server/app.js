var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const depRouter = require("./routes/department");
const areaRouter = require("./routes/area");
const warehouseRouter = require("./routes/warehouse");
const loginRouter = require("./routes/login");
const processCataRouter = require("./routes/processCata");
const processRouter = require("./routes/process");
const customerRouter = require("./routes/customer");
const materialCatalogueRouter = require("./routes/materialCatalogue");
const materialRouter = require("./routes/material");
const productRouter = require("./routes/product");
const deviceRouter = require("./routes/device");
const getjssdk = require("./routes/getjssdk")

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/department", depRouter);
app.use("/area", areaRouter);
app.use("/warehouse", warehouseRouter);
app.use("/login", loginRouter);
app.use("/processCata", processCataRouter);
app.use("/process", processRouter);
app.use("/customer", customerRouter);
app.use("/materialCatalogue", materialCatalogueRouter);
app.use("/material", materialRouter);
app.use("/product", productRouter);
app.use("/device", deviceRouter);
app.use("/getjssdk", getjssdk);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({
    statusCode: 404,
    message: "请求参数错误",
  });
  // next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
