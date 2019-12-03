'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'sThptANgYR',
    password: 'rqvwRwuHSD',
    database: 'sThptANgYR'
})

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection;