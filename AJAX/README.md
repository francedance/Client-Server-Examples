## Please read this before experimenting with examples here!!

**This will never work/run if you just open it on a web browser like the way use to see .html contents**

**You must! have some kind of server running in your computer to make it work!**

**I've basically used WAMP server (Windows Apache MySQL PHP) on my local machine and I recommend you to setup your own server locally**

**If you're interested in using WAMP server, AND it's FREE!, go here [WAMP server](http://www.wampserver.com/en/) to download!** 

**When you're successfully installed WAMP, type this:**

    localhost 
    
**to your web browser's URL** 

**You should see main screen that looks like this:**

![localhost](https://user-images.githubusercontent.com/10924864/27991137-5a3fa448-643b-11e7-9479-efe906918ed8.PNG)

**You're all set now! To test, simply place the files inside 'WWW' directory located inside WAMP's installed directory.**

**For example, if you correctly placed a folder named 'login' inside 'WWW' directory, you should be able to navigate to files inside 'login' through your web browser**

![capture](https://user-images.githubusercontent.com/10924864/27991163-6134e8fc-643c-11e7-891e-ed432ffb9c93.PNG)

**TIP: File path maybe a bit different than the way you used to do without the server**

**Example** 

**If 'login' folder contains 'js/' directory , 'css/' directory , and 'index.html'**

**So**

    login/
  
    -> js/
    
    -> css/
    
    -> index.html

**Let's say you want to access 'css/' from 'index.html'**

**You would normally do this:**

```Html

  <link href="css/somefile" rel="stylesheet">

```
**Which will work in your standard development without a server, but it will not work with WAMP!** 

**Do this instead:**

```Html
  
  <link href="http://localhost/login/css/somefile" rel="stylesheet">

```
**Well, the second version worked for me, if you got through it without the second method, Good for you! Let me know the secret!**

**You're testing in your local machine but at this point you're on a server! Your server doesn't know different paths to your local files saved in your hard drive.**

## What is AJAX? 

**It isn't a programming language, it's more of methodologies of making something happen!**

**AJAX = (Asynchronous Javascript XML). In simplest explanation, it's a method of letting Javascript communicate with backends (data servers).**

**Let's say your frontend(UI/UX) is built in Javascript/HTML/CSS and PHP as Server Side Scripting language and MySQL as database**

**General concept is that, your frontend part sends a data to a backend, then backend response to the frontend. Javascript/HTML/CSS can't never talk to server directly! but PHP can communicate with data server. AJAX simply work as a bridge between Javascript and PHP so that it can access datas inside places like MySQL.**

  
