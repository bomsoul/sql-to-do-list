var express = require('express');
var cors = require('cors');
app = express(),
bodyParser = require('body-parser'),
port =process.env.PORT || 4000
const mysql = require('mysql');
const mc = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'sThptANgYR',
    password: 'rqvwRwuHSD',
    database: 'sThptANgYR'
})
mc.connect();
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./routes/appRoutes');
routes(app);