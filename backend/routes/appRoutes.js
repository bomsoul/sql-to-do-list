'use strict';

module.exports = function(app) {
    var todolist = require('../controller/appController');

    app.route('/')
    .get(todolist.list_all_todo);

    app.route('/create')
    .post(todolist.create_todo);

    app.route('/show/:id')
    .get(todolist.show_todo);

    app.route('/edit/:id')
    .put(todolist.update_todo);
}