var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema ({

    todo: String,
    todo_detail: {type: String, required: true, unique: true},
    created_at: Date,
    updated_at: Date



});



var todo = mongoose.model('todo', todoSchema);


module.exports = todo;