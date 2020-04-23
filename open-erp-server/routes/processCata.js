var ProcessCata = require("../db/ProcessCata");
var getNewFactory = require("./restfulFactory.js");

const router = getNewFactory(ProcessCata);

module.exports = router;
