var Process = require("../db/Process");
var getNewFactory = require("./restfulFactory.js");

const router = getNewFactory(Process);

module.exports = router;
