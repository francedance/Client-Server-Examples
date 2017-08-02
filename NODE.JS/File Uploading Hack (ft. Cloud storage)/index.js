var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
var formidable = require('formidable');
var del = require('node-delete');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

var Todo = require('./model.js');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="http://localhost:3000/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
});

app.post('/fileupload',function(req,res){
    
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){

        var oldpath = files.filetoupload.path;
        var newpath = "./" + files.filetoupload.name;

        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;


        res.write('File uploaded and moved!');
        res.end();
      });

      
             cloudinary.config({ 
            cloud_name: 'example', 
            api_key: 'example', 
            api_secret: 'example' 
            });


             
            cloudinary.uploader.upload(files.filetoupload.name, function(result) { 
                console.log(result) 
            });


            del(['./' + files.filetoupload.name]);
          

        
    });

  




});




app.listen(3000, 'localhost');

