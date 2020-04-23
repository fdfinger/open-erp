var Process = require("../db/Process");
const getNewFactory = require("../utils/restFulFactory.js");

const router = getNewFactory(Process);

module.exports = router;
