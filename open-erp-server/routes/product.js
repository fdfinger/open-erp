const Product = require("../db/Product");
const getNewFactory = require("./restfulFactory.js");
const express = require("express");
const router = express.Router();

module.exports = getNewFactory(router, Product);
