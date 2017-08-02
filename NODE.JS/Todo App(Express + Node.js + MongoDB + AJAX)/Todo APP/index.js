var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/test');

var Todo = require('./model.js');

app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get('/',function(req,res){

    Todo.find({}, function(err, todos){

        if (err) throw err;

        res.render('main', {todos});
    })


    

});


app.post('/',function(req,res){

   var todo = req.body.todo;
    var todo_detail = req.body.todo_detail;

    var todo = new Todo({
        todo: todo,
        todo_detail: todo_detail

    });
    
    todo.save(function(err){
        if (err) throw err;
        console.log('Todo saved successfully');
        res.redirect('/');
    })
  
   

});



app.get('/delete/:id',function(req,res){

 

    Todo.findById(req.params.id , function(err, todo){
        if (err) throw err;


        todo.remove(function(err) {
            if (err) throw err;

            else
            res.redirect('/');
        })

        
    })
    

});

app.post('/edit/:id',function(req,res){

    
    var new_todo = req.body.new_todo;
    var new_todo_detail = req.body.new_todo_detail;


    Todo.findById(req.params.id , function(err, todo){
        if (err) throw err;

       todo.todo = new_todo;
        todo.todo_detail = new_todo_detail;
        
        todo.save(function(err){
            if(err) throw err;

            console.log('Todo successfully updated!');

          
        });

        
    }); 

    

});





app.listen(3000, 'localhost');

