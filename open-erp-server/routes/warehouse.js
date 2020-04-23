var Warehouse = require('../db/Warehouse');
const getNewFactory = require('../utils/restfulFactory.js')

module.exports = getNewFactory(Warehouse);
