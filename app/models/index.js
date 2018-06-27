/**
 * @author Yaaqoub SEMLALI <semlali.yaaqoub@gmail.com>
 */

let {Store} = require("ringo-sqlstore");

let db_config = require('./../config/db.config')['development'];

console.log(db_config.url);

let connectionPool = module.singleton("connectionPool", function() {
    return Store.initConnectionPool(db_config);
});

let store = new Store(connectionPool);

require('./Posts')(store);

/**
 * This Line needs to be always at the end of the script
 */
store.syncTables();