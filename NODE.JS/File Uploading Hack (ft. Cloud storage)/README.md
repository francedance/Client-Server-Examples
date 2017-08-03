## I found some useful (for my standard) ways of managing file uploads while I was building my blog from a scratch and I would like to share this here!

### Please, all the security aspects are ignored here and I suggest using this for websites that does not require too much of security! 

**I came up with these methods as to "NOT" want to pay much money for hosting and cloud services HAHAHA**
**I kind of like the idea of using cloud storage to save my images than save it to server storage because I think it's more convenient. Well you can just point the img src to the cloud links. I like to save server storages as much as possible. PS: You're using FREE version!**
**Also, try to minimize image files as much as possible to save up storages. Use services like [JPEGmini](http://www.jpegmini.com/).**

## Overall Logic Of This Hack

  ### 1) A user uploads a file from client side views.
  ### 2) Node JS accepts a file and its property such as filepath, filename then save it to your server's storgage.
  ### 3) Once saved, you simply upload user's submitted file to Cloudinary storage using your Cloudinary information.
  ### 4) Once a file is submitted to Cloudinary, you immediately delete file from a server storage to save up storage.
  
**---------------------------------------------------------------------------------------------------------------------------**

## What you NEED!

  ### 1) A simple app using Node JS framework, OR you can simply just download my files here!
  ### 2) NPM! You'll be installing some dependencies for your app.
  ### 3) A sample image file or whichever file that you want to test (I suggest using image files here!)
  ### 4) A FREE account for Cloudinary! Please register a FREE account [here](https://cloudinary.com) 
  
**---------------------------------------------------------------------------------------------------------------------------**  

## Getting start!

   ### 1) Install all the dependencies!
   
   ```
   npm install --save cloudinary
   npm install --save formidable 
   npm install --save node-delete
   npm install --save express
   npm install --save fs
   ```
   
   ### 2) Include them in your Node JS app!
   
   ```Javascript
   var cloudinary = require('cloudinary');
   var formidable = required('formidable');
   var del = require('node-delete');
   var fs = require('fs');
   var express = require('express');
   ```
   
   ### 3) Generate a form to submit for user. I've just let server generated form.
   
   ```Javascript
   
   app.get('/',function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="http://localhost:3000/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
});
   
   ```
   
   ### 4) Set a url path where a file is uploaded. I've used ('/fileupload') as my path with "POST" method! Handle file upload with formidable. Save it to the path you desire. Send it to Cloudinary using your credentials! Delete the file from server storage. 
   
   
  ```Javascript
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
  
  
  ```
  ### Done! Please refer to documentation of each dependencies for better experience and tweak! 
  
  **[Cloudinary Documentation on Node Integration](http://cloudinary.com/documentation/node_integration)**
  
  **[Node-delete Documentation](https://www.npmjs.com/package/node-delete)**
  
  **The Formidable I've used in this example seems outdated, try to look into newer version below**
  
  **[Formidable-Upload Documentation](https://www.npmjs.com/package/formidable-upload)**
   
   
   
   


  


