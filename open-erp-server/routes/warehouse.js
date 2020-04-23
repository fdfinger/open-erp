var Warehouse = require("../db/Warehouse");
var getNewFactory = require("./restfulFactory.js");

const router = getNewFactory(Warehouse);

module.exports = router;
