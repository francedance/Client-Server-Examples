var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');


var app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(cookieParser());

  app.use(session({
      name: "testing1234",
      secret: "Your secret key", 
                    expires: new Date(Date.now() + (30 * 86400 * 1000)),
                cookie: {maxAge: new Date(Date.now()+ 60000 )}
            
    }));
           

app.get('/', function(req,res){
    
    var session = req.session;

    
   
        res.render('index',{session});
    
    
    

});

app.get('/signin', function(req,res){

  

    req.session.username = "test123";
    req.session.password = "test123"
    

    res.redirect('/');

});

app.get('/error', function(req,res){

    var session = req.session;

  res.render('error',{session});

   

});


app.get('/error/signin', function(req,res){

       req.session.username = "francedance";
    req.session.password = "chicken9807"
    

    res.redirect('/');
   

});



app.get('/signout', function(req,res){

    req.session.destroy() ;
    res.redirect('/');

});

app.get('/restricted', function(req, res){
   
    var session = req.session;

    if( ! session.username) {
        session.error = "Please Log in to access!";
        res.redirect('/error');
       
    }else {
        
        res.render('restricted',{session});
    }

  


})




app.listen(3000, 'localhost');