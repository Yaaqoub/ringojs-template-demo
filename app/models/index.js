let {Store} = require("ringo-sqlstore");

let db_config = require('./../config/db.config')['development'];

console.log(db_config.url);

let connectionPool = module.singleton("connectionPool", function() {
    return Store.initConnectionPool(db_config);
});

let store = new Store(connectionPool);