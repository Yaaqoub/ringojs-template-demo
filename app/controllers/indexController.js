/**
 * @author Yaaqoub SEMLALI <semlali.yaaqoub@gmail.com>
 */

var exports = module.exports = {};
let response = require('ringo/jsgi/response');

exports.index = function(request) {
    return response.html('RingoJs App Template Demo');
};