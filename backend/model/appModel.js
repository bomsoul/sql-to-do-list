'user strict';

var sql = require('./db');

var Todo = function(todo){
    this.title = todo.title;
    this.description = todo.description;
    this.status = todo.status;
};

Todo.createTodo = function(newTodo,result){
    sql.query('INSERT INTO todolist set ?',newTodo, function(err,res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res.insertId);
            result(null,res.insertId);
        }
    });
}
Todo.getTodoById = function(id,result){
    sql.query('Select * From todolist where id = ?',id,function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
}

Todo.getAllTodo = function(result){
    sql.query('Select * From todolist',function(err,res){
        if(err){
            console.log("error :",err);
            result(null,err);
        }
        else{
            console.log("Task:", res);
            result(null,res);
        }
    });
}

Todo.updateById = function(id, task, result){
    sql.query("UPDATE todolist SET title = ?,description = ?,status = ? WHERE id = ?", [task.title,task.description,task.status, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{   
            result(null, res);
        }
    }); 
};

module.exports= Todo;
