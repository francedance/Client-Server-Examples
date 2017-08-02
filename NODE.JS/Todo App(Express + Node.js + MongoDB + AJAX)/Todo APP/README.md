**This is a simple TODO application in my version Lol. I've used Express + Node.JS + MongoDB + AJAX + Jquery to come up with this Todo app**
**I know  there are many parts that I am naive about and I am willing to take any advices!** 

**Demonstration**

![ezgif com-crop](https://user-images.githubusercontent.com/10924864/28856544-c700f5c6-7711-11e7-8de1-6124e760d008.gif)


## Overall logic (Please refer to my codes inside the folder for detailed logic)

### + Submitting a new todo/todo detail is done through Form (using "POST" method). I've set up Node.JS to accept requests from form.

### + Once a form is submitted, Node.JS sets up a new todo model based on user inputs from client side then save it into MongoDB.

### + List of todos are generated in the client side through EJS (Embedded Javascript) template engine. Node.JS spits out data from MongoDB then passes them to Client using EJS.

### + Updating a todo list uses AJAX call. Simply passing new todo/todo detail info from client to server side using "POST" method when requesting to server.

### + Server parses updated info in the request then update exisiting todo then save.

### + In general, overall app is functioning based on corresponding 'id' from MongoDB. 

### + I've used EJS as my template engine. If you're using JADE, Mustache and etc, you need to find your way of passing data from Server to Client.

### + Make sure your MongoDB is running in the background! Successful todo list should be able to "Fetch exisiting todo lists, Update todo list, Permanently delete from MongoDB, maintains same info/view when a browser is closed/refreshed/restarted."


