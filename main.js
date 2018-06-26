/**
 * @author Yaaqoub SEMLALI <semlali.yaaqoub@gmail.com>
 */

let {Application} = require('stick');

let app = exports.app = new Application();

app.configure('route');


require('./app/routes/index.js')(app);


if (require.main === module) {
    require('ringo/httpserver').main(module.id);
}