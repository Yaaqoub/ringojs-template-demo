/**
 * @author Yaaqoub SEMLALI <semlali.yaaqoub@gmail.com>
 */

let indexController = require('./../controllers/indexController.js');

module.exports = function(app) {

    /**
     * (GET Method)
     */
    app.get('/', indexController.index);
};