var Warehouse = require("../db/Warehouse");
const getNewFactory = require("../utils/restfulFactory.js");

const router = getNewFactory(Warehouse);

module.exports = router;
