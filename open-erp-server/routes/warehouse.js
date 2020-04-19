var Warehouse = require('../db/Warehouse');
const RestfulFactory = require('../utils/restfulFactory')

var router = new RestfulFactory(Warehouse).render()

module.exports = router;
