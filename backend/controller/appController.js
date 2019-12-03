'use strict';

var Todo = require('../model/appModel.js');

exports.list_all_todo = function(req, res) {
    Todo.getAllTodo(function(err, todo) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', todo);
    res.send(todo);
  });
};

exports.create_todo = function(req, res) {
    var new_todo = new Todo(req.body);
    Todo.createTodo(new_todo, function(err, todo) {
    if (err){
        res.send(err);
        }
    res.json(todo);
    });
};

exports.show_todo = function(req, res) {
  Todo.getTodoById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_todo = function(req, res) {
  Todo.updateById(req.params.id, new Todo(req.body), function(err, todo) {
    if (err)
      res.send(err);
    res.json(todo);
  });
};