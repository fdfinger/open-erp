var Warehouse = require('../db/Warehouse');
const getNewFactory = require('../utils/restfulFactory')

module.exports = getNewFactory(Warehouse);
