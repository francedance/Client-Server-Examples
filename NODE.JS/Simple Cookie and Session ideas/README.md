## This is very simple cookie/session idea in Node JS with Express. This is just an example to understand what session is how it is used for building data driven websites.

## Please do not use this practice for a real application!!! 
## Usually, you should have a logic behind each route. For example, Sign In route should let a user type in their username and password and checks database to see if their input matches the database.
## I've simplified that procedure (just to show..horrible security) by just setting my username and password already into session but the idea similar, your session should contain an information about the user! Please not, password or username!
## Perhaps retrieving an email address of a user or their unique id from Database to further process inside a website.

## The logic in this example is simple: 

    1) When a user tries to access "restricted" page, it let's you to "Signin" page.
    2) "Signin" page automatically sets insecure info of a user's username and password into session as a variable.
    3) Now when a user tries to access "restricted" page, the server checks session info to see if a user is logged in or not. If logged in, then show "restricted" page, else repeat step "1".
    4) "Singout" page simply destroys current session and a user must log in again to access "restricted" page.

## Demo

![ezgif com-crop 1](https://user-images.githubusercontent.com/10924864/29036496-a6ea0f24-7b6d-11e7-9826-e046c9607d0e.gif)


