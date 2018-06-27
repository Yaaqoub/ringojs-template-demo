/**
 * @author Yaaqoub SEMLALI <semlali.yaaqoub@gmail.com>
 */

const db_params = {
    db_name: 'ringo_demo_db',
    params: [
        'autoReconnect=true',
        'useSSL=false',
        'useLegacyDatetimeCode=false',
        'serverTimezone=Europe/Paris'
    ]
};

const db = {
    development: {
        url: 'jdbc:mysql://localhost/' + getParams(db_params),
        driver: 'com.mysql.jdbc.Driver',
        username: 'root',
        password: ''
    },
    test: {
        url: 'jdbc:mysql://localhost/testRingo?autoReconnect=true&useSSL=false&useLegacyDatetimeCode=false&serverTimezone=Europe/Paris',
        driver: 'com.mysql.jdbc.Driver',
        username: 'root',
        password: ''
    },
    production: {
        url: 'jdbc:mysql://localhost/testRingo?autoReconnect=true&useSSL=false&useLegacyDatetimeCode=false&serverTimezone=Europe/Paris',
        driver: 'com.mysql.jdbc.Driver',
        username: 'root',
        password: ''
    }
};

function getParams(obj) {
    let paramString = obj.db_name + '?';

    for (let i in obj.params) {
        paramString += obj.params[i] + '&';
    }
    return paramString;
}

module.exports = db;